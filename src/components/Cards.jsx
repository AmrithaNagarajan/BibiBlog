import React,{useState} from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Comment from "./Comments.jsx";






function Card(props) {

  const [like,setLike] = useState(false);
  const [dropdown,setDropdown] = useState(false);

  // function to handle like
  function handleLike(){
    setLike((prevValue) => {
      return !prevValue;
    });
  }

  //function to handle view comment
  function handleDropdown(){
    setDropdown((prevValue) => {
      return (!prevValue);
    });
  }

    return (
      <div className="card">
          <h3 className="name">  <PersonOutlineIcon/>{props.name}</h3>
          <img class="post" src={props.img} />
          <p>{props.caption} </p>
          {like? <FavoriteIcon className="likeComment" onClick={handleLike} />:
          <FavoriteBorderOutlinedIcon className="likeComment" onClick={handleLike} /> }
          <InsertCommentIcon className="likeComments"/>
          <p>View Comments
          {dropdown ? <ExpandLessIcon onClick={handleDropdown}/> : <ExpandMoreIcon onClick={handleDropdown} /> }</p>
          {dropdown && <Comment comments={props.comments} />}
        </div>
    );
  }
  
  export default Card;