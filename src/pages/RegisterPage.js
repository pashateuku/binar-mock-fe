import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Register.css';

import {useState} from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleNumericInput = event => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };

  return (
    <header className='register-page'>
      <div className='row form-parent'>
        <div className="col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 form-content">
          
          <div className='form-content-header'>
            <h2>✔simpledos</h2>
            <p>simply productive</p>
          </div>
          
          <form className='form-content-input'>

            <p className='form-content-input__input-text'>4-digit UserID</p>
            <input 
              className='form-content-input__input-form'
              maxlength="4"
              id="user_4id"
              name="user_4id"
              value={value}
              onChange={handleNumericInput}
            />

            <p className='form-content-input__input-text'>Password</p>
            <input
              className='form-content-input__input-form'
              type="password"
              id="password"
              name="password"
              minlength="8"
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
