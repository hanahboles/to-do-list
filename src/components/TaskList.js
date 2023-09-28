import TaskShow from './TaskShow'
import useTasksContext from '../hooks/use-tasks-context'

function TaskList() {
    const { tasks } = useTasksContext()
    const renderedTasks = tasks.map((task) => {
        return <TaskShow task={task} key={task.id} />
    })

    return (
        <div className="task-list">
            {renderedTasks}
        </div>
    )
}

export default TaskList