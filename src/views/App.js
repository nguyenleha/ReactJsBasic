import logo from './logo.svg';
import './App.scss';
// import Statecoban from './Example/1statecoban';
// import Formhtmlcoban from './Example/2formhtmlcoban';
import Formhtmlnangcao from './Example/3formhtmlnangcao';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Statecoban /> */}
        {/* <Formhtmlcoban /> */}
        <Formhtmlnangcao />
      </header>
    </div>
  );
}

export default App;
