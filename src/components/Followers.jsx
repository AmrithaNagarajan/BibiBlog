import React from "react";
import Header from "./Header";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Options from "./Options";
import Followers from "../FollowersList.js";

// to display the follower page
function Follower(){
    return(
        <div>
            <Header />
            <div className="post-container">
            {Followers.map((name) => {
                return(<div className="followerCard arrow">
                <PersonOutlineIcon/> 
                    <p>{name}<ArrowRightIcon /></p> 
                </div>);
            })
            }
            </div>
            <Options />
        </div>
    );
}

export default Follower;