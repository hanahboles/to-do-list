import { createContext, useState } from 'react'

const TasksContext = createContext()

function Provider({ children }) {
    const [tasks, setTasks] = useState([])
  
    const fetchTasks = async () => {
      // placeholder for later
      // local storage 
      // useCallback to be added here
    }
  
    const createTask = (title) => {
      const updatedTasks = [
        ...tasks,
        {
          id: Math.round(Math.random() * 9999),
          title
        }
      ]
      setTasks(updatedTasks)
    }
  
    const deleteTaskById = async (id) => {  
      const updatedTasks = tasks.filter((task) => {
        return task.id !== id
      })
      setTasks(updatedTasks)
    }
  
    const editTaskById = async (id, title) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) return { ...task, title}
        return task
      })
      setTasks(updatedTasks)
    }

    const valueToShare = {
        tasks,
        fetchTasks,
        createTask,
        deleteTaskById,
        editTaskById,
    }

    return (
    <TasksContext.Provider value={valueToShare}>
        {children}
    </TasksContext.Provider>
    )
}

export { Provider }
export default TasksContext