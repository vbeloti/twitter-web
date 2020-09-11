import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './styles.css';
import SidebarOption from '../SidebarOption';
import { Button } from '@material-ui/core';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />

      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explorar" Icon={SearchIcon} />
      <SidebarOption text="Notificações" Icon={NotificationsIcon} />
      <SidebarOption text="Mensagens" Icon={MailOutlineIcon} />
      <SidebarOption text="Itens salvos" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Listas" Icon={ListAltIcon} />
      <SidebarOption text="Perfil" Icon={PermIdentityIcon} />
      <SidebarOption text="Mais" Icon={MoreHorizIcon} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweetar</Button>
    </div>
  );
};

export default Sidebar;
