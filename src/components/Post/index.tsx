import { Avatar } from '@material-ui/core';
import React from 'react';

import './styles.css';

interface Ipost {
  displayName?: string;
  username?: string;
  verified?: string;
  text?: string;
  image?: string;
  avatar?: string;
}

const Post = ({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
}: Ipost) => {
  return (
    <div className="post">
      <Avatar />
    </div>
  );
};

export default Post;
