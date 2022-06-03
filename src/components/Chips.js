import React from "react";
import {Link} from 'react-router-dom';
import '../styles/snack.css';

const Chips = () => {

    return (
        <div id="snack">
            <h2>Hope you Enjoy!</h2>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdMxIlK5xCN9so6SP-0vyBruL3rl8x6ODUAHmN4tZQMLYNW8lRdGYl76bxJmO2jc2PiE&usqp=CAU"} alt="Doritos Chips"/>
            <Link to="/">Go Back</Link>
        </div>
        
    )
}

export default Chips;