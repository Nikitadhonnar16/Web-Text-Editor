import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { useState } from 'react';
import Textform from './Components/Textform';
import Alerts from './Components/Alerts';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>
  {
        setAlert(
          {
            msg : message,
            type: type
          }
        )

        setTimeout(() => {

            setAlert(null);
        }, 1500);
  }

    const toggleMode=()=>
    {
       if(mode  === 'light')
       {
          setMode('dark');
          document.body.style.backgroundColor='rgb(5 24 39)';
          showAlert("Dark Mode has Enabled","success");
        

       }
       else
       {
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert("Light Mode has Enabled","success");

          
       }
    }




  return (
    <>
     <Router>
    <Navbar title="TextUtils" About="About"  mode={mode} toggleMode={toggleMode} />
    <Alerts alert={alert}/>
    <Switch>
          <Route path="/About">
            <About heading="About Us"/>
          </Route>
          <Route path="/">
            <Textform mode={mode} showAlert={showAlert} />
            </Route>
     </Switch>
    
  

    </Router>
    </>
  );
}

export default App;
