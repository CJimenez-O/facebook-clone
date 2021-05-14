import React from 'react';
import SidebarRow from '../components/sidebarRow'
import '../styles/sidebar.css';
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GroupIcon from '@material-ui/icons/Group';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatIcon from '@material-ui/icons/Chat';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Avatar} from '@material-ui/core'

function sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={Avatar} title="Chris Jimenez"/>
            <SidebarRow Icon={MenuBookIcon}  title="Pages"/>
            <SidebarRow Icon={GroupIcon}  title="Friends"/>
            <SidebarRow Icon={ChatIcon}  title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon}  title="MarketPlace"/>
            <SidebarRow Icon={VideoLibraryIcon}  title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon}  title=""/>
        </div>
    )
}

export default sidebar
