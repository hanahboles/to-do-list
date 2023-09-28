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
      <div className="paper">
        <div className="hole top"></div>
        <div className="hole middle"></div>
        <div className="hole bottom"></div>
        <div className="lines">
          <h1 className="header">To-Do List</h1>
          <TaskCreate />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
