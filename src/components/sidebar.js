import React from "react";
import SidebarRow from "../components/sidebarRow";
import "../styles/sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GroupIcon from "@material-ui/icons/Group";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ChatIcon from "@material-ui/icons/Chat";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { useStateValue } from "../stateProvider";

function Sidebar() {
    const [{user, dispatch} ] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src='https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635'  title='Chris Jimenez' />
      <SidebarRow Icon={MenuBookIcon} title="Pages" />
      <SidebarRow Icon={GroupIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="" />
    </div>
  );
}

export default Sidebar;
