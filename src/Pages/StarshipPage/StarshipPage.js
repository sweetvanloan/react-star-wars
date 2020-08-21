import React from 'react';
import { Link } from "react-router-dom";



const Starship = (props) => {
    if (!props.thisShip) {
        return null
    }

    console.log("line 6 in StarshipPage.js - props.name is: ", props.thisShip.name);
    console.log("line 7 in StarshipPage.js - props.model is: ", props.thisShip.model);


    return (
        <>
            <div className="shipDisplay">
                <h1>Name: {props.thisShip.name}</h1>
                <br />
                <h2>Model: {props.thisShip.model}</h2>
            </div>
            <button>
                <Link to="/">Return</Link>
            </button>

        </>
    )

}

export default Starship;