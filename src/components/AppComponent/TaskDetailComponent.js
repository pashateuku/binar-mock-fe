import React from 'react';
// import { useDispatch } from 'react-redux';
// import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';

const TaskDetailComponent = ({ id, taskTitle}) => {
	// const dispatch = useDispatch();

	// const handleCheckboxClick = () => {
	// 	dispatch(toggleCompleteAsync({ id, completed: !completed }));
	// };

	// const handleDeleteClick = () => {
	// 	dispatch(deleteTodoAsync({ id }));
	// };

	return (
        <form className='task-parent'>
            <div className='task-desc'>{taskTitle}</div>
            <div className='task-icon-toggler'>✅</div>
            <div className='task-icon-updater'>✍</div>
            <div className='task-icon-deleter'>❌</div>
        </form>
	);
};

export default TaskDetailComponent;