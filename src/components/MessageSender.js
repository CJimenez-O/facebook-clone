import React, { useEffect,  useState }  from "react";
import "../styles/messageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "../stateProvider";
import db from '../firebase'
import firebase from 'firebase'

function MessageSender() {
  const [{user} , dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      db.collection('posts').add({
        message: input,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl
      })

      setImageUrl('')
      setInput('')
  };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
         {/* grabs input and set it as state input value */}
          <input
            value={input} onChange={e => setInput(e.target.value)}
            className="messageSender_input"
            placeholder={`What's on you mind?`}
            type="text"
          />
          <input value={imageUrl}  onChange={e => setInput(e.target.value)} placeholder={"image URL (Optional)"} type="text" />
          <button type="submit" onClick={handleSubmit}>
            {" "}
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="MessageSender_option">
            <VideocamIcon style={{color:'red'}} />
            <h3>Live Video</h3>
        </div>
        <div className="MessageSender_option">
            <PhotoLibraryIcon style={{color:'green'}} />
            <h3>Photo/Video</h3>
        </div>
        <div className="MessageSender_option">
            <InsertEmoticonIcon style={{color:'red'}} />
            <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
