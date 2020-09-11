import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import React from 'react';

import './styles.css';

interface Ipost {
  displayName: string;
  username: string;
  verified: boolean;
  text: string;
  image: string;
  avatar: string;
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
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{' '}
              <span className="post__headerSpecial">
                {verified && (
                  <VerifiedUserIcon fontSize="small" className="post__badge" />
                )}
                @{username}
              </span>
            </h3>
          </div>

          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt={text} />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
