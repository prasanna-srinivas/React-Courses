import logo from './logo.svg';
import './App.css';
// import Gretings from './Welcome';
// import User from './Student';
// import Person from './Classcomp'
import Pc from './Propscomp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {/* <Gretings/> */}
          {/* <User/> */}
          {/* <Person/> */}
          <Pc Name="Prassu" Age ="23" Schoolname = "bbx"/>
                  </a>
      </header>
    </div>
  );
}

export default App;
