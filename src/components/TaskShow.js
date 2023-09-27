import { useState } from 'react'
import TaskEdit from './TaskEdit'
import useTasksContext from '../hooks/use-tasks-context'

function TaskShow({ Task }) {
    const { deleteTaskById } = useTasksContext()
    const [showEdit, setShowEdit] = useState(false)
    const handleDeleteClick = () => {
        deleteTaskById(Task.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleTitleEdit = () => {
        setShowEdit(false)
    }

    let content = showEdit ? <TaskEdit onSubmit={handleTitleEdit} Task={Task} /> : Task.title

    return (
        <div className="task-show">
            <div>{content}</div>
            <div className="actions">
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
                <button className="edit" onClick={handleEditClick}>Edit</button>
            </div>
        </div>
    )
}

export default TaskShow