import React from "react";
import Header from "./Header";
import Followers from "../FollowersList.js";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Options from "./Options";

// to display the follower page
function Follower(){
    return(
        <div>
            <Header />
            {Followers.map((name) => {
                return(<div className="followerCard">
                <PersonOutlineIcon/> 
                    <p>{name}<ArrowRightIcon /></p> 
                </div>);
            })
            }
            <Options />
        </div>
    );
}

export default Follower;