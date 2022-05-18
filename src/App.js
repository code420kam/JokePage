import logo from './logo.svg';
import './App.css';
import CreateJoke from './CreateJoke';

function App() {
  document.title = "Kamils Joke Page"
  return (
      <div className="App">
        <div className="App-header">
        Welcome to my page with Jokes :-)
          <img src={logo} className="App-logo" alt="logo" />
            <div className='container'>
              <CreateJoke />
            </div>
        </div>
      </div>
  );
}

export default App;
