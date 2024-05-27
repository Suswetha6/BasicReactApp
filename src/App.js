import logo from './logo.svg';
import './App.css';
import Products from './Product';
import {a,b} from './Product';
function App() {
  console.log(a,b);
  return (

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Products/>
      
    </div>
  );
}

export default App;
