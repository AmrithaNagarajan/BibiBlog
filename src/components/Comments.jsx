import React,{useState} from "react";


// to display the comments
function Comment(props){
    return(
        <div className="comment">
            <ul>
            {props.comments.map((content) => {
                return(
                <li>{content}</li>
                );
            })
            }
            </ul>
        </div>
    );
}

export default Comment;