import logo from './logo.svg';
import './App.scss';
// import Statecoban from './Example/1statecoban';
import Formhtmlcoban from './Example/2formhtmlcoban';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <Statecoban /> */}
        <Formhtmlcoban />

      </header>
    </div>
  );
}

export default App;
