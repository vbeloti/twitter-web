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
        <Avatar src="https://i.imgur.com/I80W1Q0.png" />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Vinicius Beloti{' '}
              <span className="post__headerSpecial">
                <VerifiedUserIcon fontSize="small" className="post__badge" />
                @vbeloti
              </span>
            </h3>
          </div>

          <div className="post__headerDescription">
            <p>Descrição do post</p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/card_img/1304144729190346755/6bRftMDW?format=jpg&name=small"
          alt="Description img"
        />
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
