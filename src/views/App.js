// import logo from './logo.svg';
import './App.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import Statecoban from './Example/1-2-3coban/1statecoban';
// import Formhtmlcoban from './Example/1-2-3coban/2formhtmlcoban';
// import Formhtmlnangcao from './Example/1-2-3coban/3formhtmlnangcao';
// import Formhtmlnangcao4 from './Example/4cautrucform/4formhtmlnangcao';
// import Filescss5 from './Example/5addcss/5filescss';
// import Themxoasua6 from './Example/6themxoasua/6formcha';
import Nav7 from './Example/7Nav/7nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav7 />

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Statecoban /> */}
        {/* <Formhtmlcoban /> */}
        {/* <Formhtmlnangcao /> */}
        {/* <Formhtmlnangcao4/> */}
        {/* <Filescss5/> */}
        {/* <Themxoasua6 /> */}

      </header>


      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* search toastify react */}
    </div>
  );
}

export default App;
