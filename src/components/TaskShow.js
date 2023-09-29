import { useState } from 'react'
import TaskEdit from './TaskEdit'
import useTasksContext from '../hooks/use-tasks-context'

function TaskShow({ task }) {
    console.log(task.complete)
    const { deleteTaskById, updateTaskStatusById } = useTasksContext()
    const [showEdit, setShowEdit] = useState(false)
    const [isComplete, setIsComplete] = useState(task.complete)
    const handleDeleteClick = () => {
        deleteTaskById(task.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleTitleEdit = () => {
        setShowEdit(false)
    }

    const handleCheckmarkClick = () => {
        updateTaskStatusById(task.id, !isComplete)
        setIsComplete(!isComplete)
    }

    let content = showEdit ? <TaskEdit onSubmit={handleTitleEdit} task={task} /> : <label className={isComplete ? 'complete' : ''} htmlFor={task.id}>{task.title}</label>

    return (
        <div className="task-show">
            <input className="checkbox" type="checkbox" id={task.id} checked={isComplete} onChange={handleCheckmarkClick}></input>
            {content}
            <div className="actions">
                <span className="icon material-symbols-outlined" onClick={handleEditClick}>edit</span>
                <span className="icon material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
            </div>
        </div>
    )
}

export default TaskShow