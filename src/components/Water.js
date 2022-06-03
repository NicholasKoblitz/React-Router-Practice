import React from "react";
import {Link} from 'react-router-dom';
import '../styles/snack.css';

const Water = () => {

    return (
        <div id="snack">
        <h3>Take this to stay hydrated!</h3>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZKPBb4i9HvkOJ0KmopBfezp9GL8RXLunKA&usqp=CAU"} alt="Bottle of Water"/>
        <Link to="/">Go Back</Link>
    </div>
    )
    
}

export default Water;