import React, {useRef, useEffect, useState} from 'react';
import './Body.css';


export const Body = (props) => {
    let openedPanel = props.openedPanel;
    return <main>
        {(openedPanel === "bothPanels" || openedPanel === "panel1") && <Panel title={"Panel 1"} childLength={20} {...props}/>}
        {(openedPanel === "bothPanels" || openedPanel === "panel2")  && <Panel title={"Panel 2"} {...props}/>}
    </main>
}


const Panel = ({title, childLength=10, openedPanel, panelTitleSize}) => {

    const titleRef = useRef(null);
    const [titleHeight,setTitleHeight] = useState(48);

    useEffect(() => {
        window.document.title = titleRef.current.offsetHeight;
        setTitleHeight(titleRef.current.offsetHeight);
    }, [titleRef, panelTitleSize])

    return <div className={"panel " + openedPanel}>
        <h1 ref={titleRef} className={"panel-title " + panelTitleSize}>{title}</h1>
        <div className={"panel-content"} style={{height: `calc(100% - ${titleHeight}px)`}}>
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