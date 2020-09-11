import { SvgIconProps } from '@material-ui/core';
import React, { ComponentType } from 'react';

import './styles.css';

interface ISidebarOption {
  active?: boolean;
  text: string;
  Icon: ComponentType<SvgIconProps>;
}

const SidebarOption = ({ active, text, Icon }: ISidebarOption) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption__active'} `}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
