import React from "react";
import "../styles/feed.css";
import StoryReel from "./storyReel.js";
import MessageSender from "./MessageSender";
import Post from "./post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://imgix.bustle.com/2017/4/20/abbef9a5-0d92-4176-977f-575a2914c5b2.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"
        message="Has anyone seen a usb?"
        timestamp="12h"
        username="Richard Hendricks"
      />
      <Post
        profilePic="https://ih1.redbubble.net/image.1105777995.0088/flat,750x1000,075,f.jpg"
        message="THE FIRST MIDDLE OUT COMPRESSION PLATFORM COMPANY | Enjoy you downloads with a Weissman score of 2.89!"
        timestamp="Sponsored • "
        username="End Frame"
        image={
          "https://s3-us-west-2.amazonaws.com/assets.coderag.prd/wp-content/uploads/2016/05/coderag_endframe_gavin.jpg"
        }
      />
      <Post
        profilePic="https://i.kym-cdn.com/entries/icons/original/000/027/100/_103330503_musk3.jpg"
        message="To the moon!"
        timestamp="Yesterday at 4:20pm"
        username="Elon Musk"
        image={
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/dog_1.jpg?E1LENmMq1JqjhwopgaC_lE8pISHca3DV&size=770:433"
        }
      />

      <Post
        profilePic="https://openpsychometrics.org/tests/characters/test-resources/pics/SV/10.jpg"
        message="Just made a app thats better than pied pipers silly new internet!"
        timestamp="Yesterday at 11:51am"
        username="Jian Yang"
        image={
          "http://www.semantics3.com/blog/content/images/downloaded_images/hot-dog-and-a-not-hot-dog-the-distinction-matters-code-included-8550067fb16/1-VrpXE1hE4rO1roK0laOd7g.png"
        }
      />
    </div>
  );
}

export default Feed;
