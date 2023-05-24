import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "/index.css"
import About from "./About";
import { Link } from "react-router-dom";

const Header= () => {

    return(
        <>
        <div className="header-div">
            <h3>FOOD APP</h3>
            <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
            </ul>
        </div>
        
        </>
    )
}

export default Header