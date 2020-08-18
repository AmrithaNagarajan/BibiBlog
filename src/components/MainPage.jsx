import React from "react";
import Header from "./Header";
import Card from "./Cards";
import Data from "../Data.js";
import Options from "./Options";

// to display the Main Page (posts page)
function MainPage(){
    return(
        <div>
            <Header />
            <div className="post-container">
            {Data.map((follower) => {
                return(
                    <Card
                        id={follower.id}
                        key={follower.id}
                        name={follower.name}
                        img={follower.imgURL}
                        caption={follower.caption}
                        comments={follower.comments}
                    />);
                })
            }
            </div>
        <Options />
        </div>
    );
}

export default MainPage;