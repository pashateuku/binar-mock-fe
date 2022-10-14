import React, { useEffect } from 'react';
import TaskDetailComponent from './TaskDetailComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../../features/todoSlice';

const TodoList = () => {
	const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

    const todos = useSelector((state) => state.todos);
    // console.log(todos)

	return (
        <>
            {/* <TaskDetailComponent id={1} taskTitle={"acumalaka ahahaha"}/> */}

			{todos.map((todo) => (
				<TaskDetailComponent id={todo.todo_id} taskTitle={todo.desc}/>
			))}
        </>
	);
};

export default TodoList;