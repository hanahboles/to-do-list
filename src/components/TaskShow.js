import { useState } from 'react'
import TaskEdit from './TaskEdit'
import useTasksContext from '../hooks/use-tasks-context'

function TaskShow({ task }) {
    const { deleteTaskById } = useTasksContext()
    const [showEdit, setShowEdit] = useState(false)
    const handleDeleteClick = () => {
        deleteTaskById(task.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleTitleEdit = () => {
        setShowEdit(false)
    }

    let content = showEdit ? <TaskEdit onSubmit={handleTitleEdit} task={task} /> : <label for={task.id}>{task.title}</label>

    return (
        <div className="task-show">
            <input type="checkbox" id={task.id}></input>
            {content}
            <div className="actions">
                <span className="icon material-symbols-outlined" onClick={handleEditClick}>edit</span>
                <span className="icon material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
            </div>
        </div>
    )
}

export default TaskShow