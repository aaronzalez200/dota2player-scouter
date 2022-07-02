import React from "react";

export default function Navbar(props) {

    const Win = props.winLoss.win
    const Loss = props.winLoss.lose

    let Bar

    Win > 5 ? Bar = "green" : Bar = "red"

    return (
        <nav>
            <a href="https://www.dotabuff.com/players/129050083" target="_blank" rel="noopener noreferrer">
                <img className="tree-logo" src={props.image}/>
            </a>
            <h1 className="nav-text" 
                style={{color: Bar}}
            >
                TreeHard's Recent Mid Heroes 
                <br></br>
                Win/Loss: {Win/(Win + Loss) * 100}% (Past 10 matches)</h1>
        </nav>
    )
}