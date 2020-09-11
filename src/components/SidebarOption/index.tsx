import { SvgIconProps } from '@material-ui/core';
import React, { ComponentType } from 'react';

import './styles.css';

interface ISidebarOption {
  text: string;
  Icon: ComponentType<SvgIconProps>;
}

const SidebarOption = ({ text, Icon }: ISidebarOption) => {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
