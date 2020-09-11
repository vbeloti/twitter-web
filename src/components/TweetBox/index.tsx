import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import './styles.css';

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input type="text" placeholder="O que está acontecendo?" />
        </div>

        <div className="tweetBox__footer">
          <div className="tweetBox__icons">
            <CropOriginalIcon />
            <GifIcon />
            <InsertEmoticonIcon />
          </div>
          <Button className="tweetBox__tweetButton">Tweetar</Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
