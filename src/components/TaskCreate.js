import { useState, useEffect, useRef } from 'react'
import useTasksContext from '../hooks/use-tasks-context'
import './TaskCreate.css'

function TaskCreate() {
    const [title, setTitle] = useState('')
    const [showInput, setShowInput] = useState(false)
    const { createTask } = useTasksContext()
    const inputRef = useRef(null)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(title)
        setShowInput(false)
        setTitle('')
    }

    const handleCancelClick = () => {
        setShowInput(false)
        setTitle('')
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [showInput])

    let content = showInput ? (
        <>
            <input className="input" placeholder="Task name" value={title} onChange={handleChange} ref={inputRef}></input>
            <button className="button primary">Add</button>
            <button className="button secondary" onClick={handleCancelClick}>Cancel</button>
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