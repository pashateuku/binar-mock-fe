import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Login.css';

import {useState} from 'react';
import axios from 'axios';

function App() {

  const token = localStorage.getItem('token');
  if(token){
    window.location.href = '/'
  }

  // #Numeric Validator
  // const [value, setValue] = useState('');

  // const handleNumericInput = event => {
  //   const result = event.target.value.replace(/\D/g, '');

  //   setValue(result);
  // };

  //USESTATE FOR USERNAME AND PASSWORD
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  

  //HANDLE ON SUBMIT TO BACKEND
  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const result = await axios.post('https://todo-binar-api.herokuapp.com/login', {
              user_4id: userId,
              password: password
          })
          
          alert(result.data.message);

          if(result.data.message === 'login success'){
            window.location.href = '/'
            console.log(result.data.data.token)
            localStorage.setItem('token', result.data.data.token);
          }

      }
      catch (err) {
          alert(err.toString());
      }
  }

  return (
    <header className='login-page'>
      <div className='row form-parent'>
        <div className="col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 form-content">
          
          <div className='form-content-header'>
            <h2>✔simpledos</h2>
            <p>simply productive</p>
          </div>
          
          <form className='form-content-input' onSubmit={handleSubmit}>

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className='form-content-input__button-form'>Log In</button>

            <a className='form-content-input__href-register' href='/register'>Create Account</a>

          </form>

        </div>
      </div>
    </header>
  );
}

export default App;
