import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './styles.css';
import SidebarOption from '../SidebarOption';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />

      <SidebarOption text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explorar" Icon={SearchIcon} />
      <SidebarOption text="Notificações" Icon={NotificationsIcon} />
    </div>
  );
};

export default Sidebar;
