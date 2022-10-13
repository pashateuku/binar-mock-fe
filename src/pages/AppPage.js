import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';

function App() {

  return (
    <section className='todo-section'>
      <header className='todo-page'>
        <div className='row form-parent'>
          <div className="col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 form-content">
            
            <div className='task-header'>
              <h2>all task</h2>
              <p>welcome, 1234</p>
            </div>

            <form className='form-add'>
              <input className='form-add__input'/>
              <div className='form-add__button'>
                <p>Add</p>
              </div>
            </form>
            
            <form className='task-parent'>
              <div className='task-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
              <div className='task-icon-toggler'>✅</div>
              <div className='task-icon-updater'>✍</div>
              <div className='task-icon-deleter'>😀</div>
            </form>
            <form className='task-parent'>
              <div className='task-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
              <div className='task-icon-toggler'>✅</div>
              <div className='task-icon-updater'>✍</div>
              <div className='task-icon-deleter'>😀</div>
            </form>
            <form className='task-parent'>
              <div className='task-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
              <div className='task-icon-toggler'>✅</div>
              <div className='task-icon-updater'>✍</div>
              <div className='task-icon-deleter'>😀</div>
            </form>
            <form className='task-parent'>
              <div className='task-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
              <div className='task-icon-toggler'>✅</div>
              <div className='task-icon-updater'>✍</div>
              <div className='task-icon-deleter'>😀</div>
            </form>
            <form className='task-parent'>
              <div className='task-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
              <div className='task-icon-toggler'>✅</div>
              <div className='task-icon-updater'>✍</div>
              <div className='task-icon-deleter'>😀</div>
            </form>

          </div>
        </div>
      </header>
    </section>
  );
}

export default App;
