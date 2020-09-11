import { Avatar, Button } from '@material-ui/core';
import React from 'react';

import './styles.css';

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input type="text" placeholder="O que está acontecendo?" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Opcional: Insira a URL da imagem"
        />
        <Button className="tweetBox__tweetButton">Tweetar</Button>
      </form>
    </div>
  );
};

export default TweetBox;
