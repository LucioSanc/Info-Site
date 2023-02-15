import React from "react";
import ProfileLogo from "../images/1660702651135.jpg";

function Navbar() {
    return (
        <nav>
            <img src={ProfileLogo} className="nav--icon"></img>
            <h1 className="nav--title">Lucio Sanchez - Some Things To Know About Me ⌐■_■</h1>
        </nav>
    )
}

export default Navbar;