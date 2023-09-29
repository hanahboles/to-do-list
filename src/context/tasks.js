import { createContext, useState, useCallback } from 'react'

const TasksContext = createContext()

function Provider({ children }) {
    const [tasks, setTasks] = useState([])
  
    const fetchTasks = useCallback(() => {
      const tasks = JSON.parse(window.localStorage.getItem('tasks'))
      if (tasks) {
        setTasks(tasks)
      }
    }, [])
  
    const createTask = (title) => {
      const updatedTasks = [
        ...tasks,
        {
          id: Math.round(Math.random() * 9999),
          title,
          complete: false
        }
      ]
      window.localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      setTasks(updatedTasks)
    }
  
    const deleteTaskById = (id) => {  
      const updatedTasks = tasks.filter((task) => {
        return task.id !== id
      })
      window.localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      setTasks(updatedTasks)
    }
  
    const editTaskById = (id, title) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) return { ...task, title}
        return task
      })
      window.localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      setTasks(updatedTasks)
    }

    const updateTaskStatusById = (id, complete) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) return { ...task, complete}
        return task
      })
      window.localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      setTasks(updatedTasks)
    }

    const valueToShare = {
        tasks,
        fetchTasks,
        createTask,
        deleteTaskById,
        editTaskById,
        updateTaskStatusById
    }

    return (
    <TasksContext.Provider value={valueToShare}>
        {children}
    </TasksContext.Provider>
    )
}

export { Provider }
export default TasksContext