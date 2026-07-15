import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils - Light Mode';
    }
  } 
  return (
    // <Router>
    <>
    
<Navbar  title="Textutils" abouttext="About Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />


<div className="container my-3">

 {/* ashir ice cream kha raha  */}
 {/* ha  */}
  {/* <Routes>
  <Route path="/about" element={<About />} />

  <Route
    path="/"
    element={ */}
      <Textbox
        heading="Enter the text to analyze below"
        mode={mode}
        showAlert={showAlert} /> 
{/*  </Routes> */}
       </div>
       {/* </Router> */}
        </>

  );
}

export default App; 


