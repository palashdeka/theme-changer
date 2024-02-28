import React , {useState} from "react";
import './App.css';

function App() {
  const[color,setColor]=useState("light");

  const ToggleTheme = () => {
    setColor(prevColor => (prevColor==='light' ? 'dark' : 'light'))
  }
  return (
    <>
    <div className={`container ${color}`} >
      <h1>Theme Changer</h1>
        <button className="button1" onClick={ToggleTheme}>Theme change</button>
    </div>
    </>
  );
}

export default App;
