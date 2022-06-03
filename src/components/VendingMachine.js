import React from "react";
import {Link} from 'react-router-dom';

const VendingMachine = () => {

    return (
        <div>
            <h1>Vending Machine!</h1>
            <h3>Pick Your Snack</h3>
            <Link to="/chips">Potato Chips</Link>
            <Link to="/sour-patch-kids">Sour Patch Kids</Link>
            <Link to="/water">Bottle of Water</Link>
        </div>
    )
}

export default VendingMachine;