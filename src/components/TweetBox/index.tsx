import { Avatar, Button } from '@material-ui/core';
import React, { MouseEvent, useState } from 'react';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import './styles.css';
import db from '../../config/connectionFirebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    db.collection('posts').add({
      displayName: 'Vinicius Beloti',
      username: 'vbeloti',
      verified: true,
      text: tweetMessage,
      image:
        'https://pbs.twimg.com/media/EhbLpkSXsAEK5U0?format=jpg&name=small',
      avatar: 'https://i.imgur.com/I80W1Q0.png',
    });

    setTweetMessage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="O que está acontecendo?"
          />
        </div>

        <div className="tweetBox__footer">
          <div className="tweetBox__icons">
            <label>
              <CropOriginalIcon />
              <input className="tweetBox__inputImg" type="file" />
            </label>

            <GifIcon />
            <InsertEmoticonIcon />
          </div>
          <Button onClick={handleSubmit} className="tweetBox__tweetButton">
            Tweetar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
