import React from "react";
import "../styles/header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {

  // const [{user, dispatch}] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img
          alt="logo"
          src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png"
        ></img>
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text"></input>
        </div>
      </div>

      <div className="header_center">
        <div className="header_option header_option--active">
          <HomeIcon fontSize="large" />
        </div>

        <div className="header_option" >
          <SubscriptionsOutlinedIcon fontSize="large"/>
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar src='https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635' />
          <h4>Chris Jimenez</h4>
        </div>

        <div className="icon">
        <IconButton className="icon">
          <AddIcon />
        </IconButton>
        <IconButton className="icon">
          <ForumIcon  />
        </IconButton>
        <IconButton className="icon">
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton className="icon">
          <ExpandMoreIcon />
        </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
