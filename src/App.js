// import { useContext, useEffect } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
// import TasksContext from './context/tasks'

function App() {
  // const { fetchTasks } = useContext(TasksContext)

  // useEffect(() => {
  //   fetchTasks()
  // }, [])

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskCreate />
      <TaskList />
    </div>
  );
}

export default App;
