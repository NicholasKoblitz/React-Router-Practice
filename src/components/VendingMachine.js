import React from "react";
import {Link} from 'react-router-dom';
import '../styles/VendingMachine.css';

const VendingMachine = () => {

    return (
        <div id="vending">
            <h1>Vending Machine!</h1>
            <h3>Pick Your Snack</h3>
            <div id="links">
                <Link to="/chips">Potato Chips</Link>
                <Link to="/sour-patch-kids">Sour Patch Kids</Link>
                <Link to="/water">Bottle of Water</Link>
            </div>
        </div>
    )
}

export default VendingMachine;