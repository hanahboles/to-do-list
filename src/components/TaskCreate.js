import { useState } from 'react'
import useTasksContext from '../hooks/use-tasks-context'

function TaskCreate() {
    const [title, setTitle] = useState('')
    const { createTask } = useTasksContext()

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(title)
        setTitle('')
    }

    return (
        <div className="task-create">
            <form onSubmit={handleSubmit}>
                <h3>Add a Task</h3>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}></input>
                <button className="button">Add Task</button>
            </form>
        </div>
    )
}

export default TaskCreate