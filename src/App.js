import './App.css';
// import React,{Component} from 'react';
import SignUp from './component/SignUp';
import Login from './component/Login';
import { Navigate, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
        
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        {/* <Redirect from="/" to="/signup" /> */}
        <Route  path="/"  element={<Navigate to="/signup"  replace/>}/>
    
        </Routes>
 
           
    </div>
  );
}

export default App;
