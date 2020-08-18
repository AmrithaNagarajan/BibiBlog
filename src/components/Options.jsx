import React,{useState} from "react";
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link} from "react-router-dom";
  import MainPage from "./MainPage";
  import Followers from "./Followers";
  import Settings from "./Settings";

// to enable the functions in the bottom right screen

function Options(){
    return(
        <div className="options">
            <Link to="/Mainpage">
                <HomeIcon/>
            </Link>
            <Link to="/Followers">
                <AddBoxIcon/>
            </Link>
            <Link to="/Settings">
                <SettingsIcon className="icons"/>
            </Link>
        </div>
    );
}

export default Options;