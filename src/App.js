import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Body'

function App() {
  const [openedPanel, setOpenedPanel] = useState("bothPanels");

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setOpenedPanel("bothPanels")}>BothPanels</button>
        <button onClick={() => setOpenedPanel("panel1")}>Panel1</button>
        <button onClick={() => setOpenedPanel("panel2")}>Panel2</button>
      </header>
      <Body openedPanel={openedPanel}/>
    </div>
  );
}

export default App;
