import { useState } from 'react'
import useTasksContext from '../hooks/use-tasks-context'

function TaskEdit({ task, onSubmit }) {
    const [newTitle, setNewTitle] = useState(task.title)
    const { editTaskById } = useTasksContext()

    const handleChange = (e) => {
        setNewTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit()
        editTaskById(task.id, newTitle)
    }

    return (
        <form className="task-edit" onSubmit={handleSubmit}>
            {/* <label>Title</label> */}
            <input className="input" value={newTitle} onChange={handleChange}></input>
            <button className="button is-primary" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default TaskEdit