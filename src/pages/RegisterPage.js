import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Register.css';

import {useState} from 'react';

import axios from 'axios';

function App() {
  const token = localStorage.getItem('token');
  if(token){
    window.location.href = '/'
  }

  //USESTATE FOR USERNAME AND PASSWORD
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // // Numeric only Validation
  // const handleNumericInput = event => {
  //   const result = event.target.value.replace(/\D/g, '');

  //   setValue(result);
  // };

  //HANDLE ON SUBMIT
  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const result = await axios.post('https://todo-binar-api.herokuapp.com/register', {
              user_4id: userId,
              password: password
          });
          alert(result.data.message);

          if(result.data.message === 'registration success'){
            window.location.href = '/login'
          }
      }
      catch (err) {
          alert(err);
      }
  }

  return (
    <header className='register-page'>
      <div className='row form-parent'>
        <div className="col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 form-content">
          
          <div className='form-content-header'>
            <h2>✔simpledos</h2>
            <p>simply productive</p>
          </div>
          
          <form onSubmit={handleSubmit} className='form-content-input'>

            <p className='form-content-input__input-text'>4-digit UserID</p>
            <input 
              className='form-content-input__input-form'
              maxlength="4"
              id="user_4id"
              name="user_4id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />

            <p className='form-content-input__input-text'>Password</p>
            <input
              className='form-content-input__input-form'
              type="password"
              id="password"
              name="password"
              minlength="8"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className='form-content-input__button-form'>Create new Account</button>

            <a className='form-content-input__href-register' href='/login'>Sign in</a>

          </form>

        </div>
      </div>
    </header>
  );
}

export default App;
