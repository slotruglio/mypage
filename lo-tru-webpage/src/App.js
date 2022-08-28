import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, my name is Sam.
        </p>

        <a class="bi bi-linkedin App-link" href='https://www.linkedin.com/in/samuele-lo-truglio/'>Samuele Lo Truglio</a>
        <a class="bi bi-github App-link" href='https://github.com/slotruglio'>slotruglio</a>
      </header>
    </div>
  );
}

export default App;
