import React from "react";

export default function Info(props) {

    return (
        <div className="Info">
            <a href={props.item.link} target="_blank" rel="noopener noreferrer">
            <img className="hero-img" src={props.item.img} />
            </a>
            <h1 className="hero-name">{props.item.hero}</h1>
            <text className="hero-info">{props.item.description}</text>
            {props.index < props.length - 1 && <hr className="line"></hr>}
        </div>
    )
}