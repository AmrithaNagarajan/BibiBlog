import React,{useState} from "react";
import Header from "./Header";
import Options from "./Options";
import {Link} from "react-router-dom";


// to have a log out page
function Settings(){
    return(
        <div>
            <Header />
            <Link to="/">
            <div className="container">
                <button>Log Out</button>
            </div>
            </Link>
            <Options />
        </div>
    );
}
export default Settings;