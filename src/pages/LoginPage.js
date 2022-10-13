import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Login.css';

function App() {
  return (
    <header className='login-page'>
      <div className='row form-parent'>
        <div className="col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 form-content">
          
          <div className='form-content-header'>
            <h2>📝todo</h2>
            <p>productive together</p>
          </div>
          
          <form className='form-content-input'>
            <p className='form-content-input__input-text'>4-digit UserID</p>
            <input className='form-content-input__input-form'></input>
            <p className='form-content-input__input-text'>Password</p>
            <input className='form-content-input__input-form'></input>
          </form>

        </div>
      </div>
    </header>
  );
}

export default App;
