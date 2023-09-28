import { useState } from 'react'
import useTasksContext from '../hooks/use-tasks-context'

function TaskCreate() {
    const [title, setTitle] = useState('Task name')
    const [showInput, setShowInput] = useState(false)
    const { createTask } = useTasksContext()

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(title)
        setShowInput(false)
        setTitle('Task name')
    }

    let content = showInput ? (
        <>
            <input className="input" value={title} onChange={handleChange}></input>
            <button className="button">Add</button>
        </>
    ) : (
        <>
            <span className="icon material-symbols-outlined" onClick={() => setShowInput(true)}>add</span>
            <h3 onClick={() => setShowInput(true)}>Add a Task</h3>
        </>
    )

    return (
        <div className="task-create">
            <form className="form" onSubmit={handleSubmit}>
                {content}
            </form>
        </div>
    )
}

export default TaskCreate