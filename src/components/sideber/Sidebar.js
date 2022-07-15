import React from "react";
import RamenDiningSharpIcon from "@mui/icons-material/RamenDiningSharp";
import SideberOption from "./SideberOption";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Button } from "@mui/material";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* {アイコン} */}
      <RamenDiningSharpIcon className="sidebar__maritterIcon" />
      {/* {SidebarOption} */}
      <SideberOption text="home" Icon={HomeOutlinedIcon} active />
      <SideberOption text="search" Icon={SearchOutlinedIcon} />
      <SideberOption
        text="notification"
        Icon={NotificationsActiveOutlinedIcon}
      />
      <SideberOption text="message" Icon={EmailOutlinedIcon} />
      <SideberOption text="list" Icon={ListAltOutlinedIcon} />
      <SideberOption text="profile" Icon={InsertEmoticonOutlinedIcon} />
      {/* {投稿ボタン} */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        tweet
      </Button>
    </div>
  );
};

export default Sidebar;
