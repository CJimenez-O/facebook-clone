import React from "react";
import "../styles/post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Post({ profilePic, image, username, timestamp, message }) {
  const time = new Date(timestamp?.toDate()).toUTCString()

  console.log(profilePic, image, username, timestamp, message);
  return (
    <div className="post">
      <div className="post_top">
        <Avatar className="post_avatar" src={profilePic} />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>{time} </p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>

      <div className="post_image">
        <img src={image} alt="" />
      </div>

      <div className="post_options">
        <div className="post_option po">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleIcon />
          <p>Comment</p>
        </div>
        <div className="post_option lock">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post_option lock">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
