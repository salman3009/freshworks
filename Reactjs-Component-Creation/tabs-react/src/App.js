import './App.css';
import { useState } from 'react';
function App() {
  return (
    <div className="container">

      <div className="box">
        <h1 className="header">Square</h1>
        <div className="square"></div>
      </div>

      <div className="box">
        <h1 className="header">Rectangle</h1>
        <div className="rectangle"></div>
      </div>

      <div className="box">
        <h1 className="header">Oval</h1>
        <div className="oval"></div>
      </div>

      <div className="box">
        <h1 className="header">circle</h1>
        <div className="circle"></div>
      </div>


      <div className="box">
        <h1 className="header">trapezoid</h1>
        <div className="trapezoid"></div>
      </div>


      <div className="box">
      <h1 className="header">Triangle up</h1>
      <div className="triangle-up"></div>
      </div>
      <div className="box">
      <h1 className="header">Triangle down</h1>
      <h1 className="triangle-down"></h1>
      </div>
      <div className="box">
      <h1 className="header">Triangle right</h1>
      <h1 className="triangle-right"></h1>

      </div>
      <div className="box">
      <h1 className="header">Triangle left</h1>
      <h1 className="triangle-left"></h1>
      </div>

    </div>
  )
}

export default App;
