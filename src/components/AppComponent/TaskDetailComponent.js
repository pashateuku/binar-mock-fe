import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAsync } from '../../features/todoSlice';

const TaskDetailComponent = ({ id, taskTitle}) => {
	const dispatch = useDispatch();

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};

	return (
        <form className='task-parent'>
            <div className='task-desc'>{taskTitle}</div>
            {/* <button className='task-icon-toggler'>✅</button> */}
            {/* <button className='task-icon-updater'>✍</button> */}
            <button onClick={handleDeleteClick} className='task-icon-deleter'>❌</button>
        </form>
	);
};

export default TaskDetailComponent;