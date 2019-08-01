import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Body'

function App() {
  const [openedPanel, setOpenedPanel] = useState("bothPanels");
  const [panelTitleSize, changePanelTitleSize] = useState("small");

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setOpenedPanel("bothPanels")}>BothPanels</button>
        <button onClick={() => setOpenedPanel("panel1")}>Panel1</button>
        <button onClick={() => setOpenedPanel("panel2")}>Panel2</button>
        <button onClick={() => changePanelTitleSize("small")}>Small</button>
        <button onClick={() => changePanelTitleSize("medium")}>Medium</button>
        <button onClick={() => changePanelTitleSize("large")}>Large</button>
      </header>
      <Body openedPanel={openedPanel} panelTitleSize={panelTitleSize}/>
    </div>
  );
}

export default App;
