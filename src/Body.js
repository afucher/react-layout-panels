import React from 'react';
import './Body.css';


export const Body = ({openedPanel}) => {
    return <main>
        {(openedPanel === "bothPanels" || openedPanel === "panel1") && <Panel title={"Panel 1"} childLength={20}/>}
        {(openedPanel === "bothPanels" || openedPanel === "panel2")  && <Panel title={"Panel 2"}/>}

    </main>
}


const Panel = ({title, childLength=10, openedPanel}) => {
    return <div className={"panel " + {openedPanel}}>
        <h1 className={"panel-title"}>{title}</h1>
        <div className={"panel-content"}>
            <FakeContentGenerator size={childLength} />
        </div>
    </div>
}

const FakeContentGenerator = ({size}) => {
    return [...Array(size)].map((i, index) => <FakeContent index={index}/>)
}

const FakeContent = ({index}) => {
    return <div className={"fake-content"}>
        <h2>Fake {index}</h2>
    </div>;
}


export default Body;