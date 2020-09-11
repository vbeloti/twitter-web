import React from 'react';
import Post from '../Post';
import TweetBox from '../TweetBox';

import './styles.css';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post
        displayName="Vinicius Beloti"
        username="vbeloti"
        verified
        text="Descrição do post"
        image="https://pbs.twimg.com/card_img/1304144729190346755/6bRftMDW?format=jpg&name=small"
        avatar="https://i.imgur.com/I80W1Q0.png"
      />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
