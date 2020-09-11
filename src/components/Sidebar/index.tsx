import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';

import './styles.css';
import SidebarOption from '../SidebarOption';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption />
    </div>
  );
};

export default Sidebar;
