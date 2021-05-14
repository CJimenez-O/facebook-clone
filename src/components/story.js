import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/story.css";

function Story({ image, profile, title }) {
  console.log(image);
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story_avatar" src={profile} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
