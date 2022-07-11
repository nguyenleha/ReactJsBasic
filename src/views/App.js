import logo from './logo.svg';
import './App.scss';
import Formhtmlnangcao4 from './Example/4cautrucform/4formhtmlnangcao';
// import Statecoban from './Example/1-2-3coban/1statecoban';
// import Formhtmlcoban from './Example/1-2-3coban/2formhtmlcoban';
// import Formhtmlnangcao from './Example/1-2-3coban/3formhtmlnangcao';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Statecoban /> */}
        {/* <Formhtmlcoban /> */}
        {/* <Formhtmlnangcao /> */}
        <Formhtmlnangcao4/>
      </header>
    </div>
  );
}

export default App;
