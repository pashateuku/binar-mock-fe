import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';

import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../features/todoSlice';

import TaskListComponent from '../components/AppComponent/TaskListComponent';

function App() {
  const token = localStorage.getItem('token');
  if(!token){
    window.location.href = '/login'
  }

  const handleLogOut = () => {
    localStorage.clear('token');
    window.location.href = '/'
  }

  const [value, setValue] = useState('');
	const dispatch = useDispatch();
  
  const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodoAsync({
					title: value,
          foreign_id: token
				})
			);
		}
    setValue('')
	};

  return (
    <section className='todo-section'>
      <header className='todo-page'>
        <div className='row form-parent'>
          <div className="col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 form-content">
            
            <div className='task-header'>
              <h2>all task</h2>
              <p>welcome to productivity</p>
            </div>

            <form onSubmit={onSubmit} className='form-add'>
              <input 
                type='text'
                className='form-add__input'
                placeholder='Add your new task'
                value={value}
                maxLength="50"
                onChange={(event) => setValue(event.target.value)}
              />
              <button type='submit' className='form-add__button'>
                <p>Add</p>
              </button>
            </form>
            
            <TaskListComponent tokenId={token} />
            <p onClick={handleLogOut} className='log-out-button'>Log Out</p>
          </div>
        </div>
      </header>
    </section>
  );
}

export default App;
