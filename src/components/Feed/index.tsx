import React, { useEffect, useState } from 'react';
import db from '../../config/connectionFirebase';
import Post from '../Post';
import TweetBox from '../TweetBox';
import FlipMove from 'react-flip-move';

import './styles.css';

interface IPost {
  displayName: string;
  username: string;
  verified: boolean;
  text: string;
  image: string;
  avatar: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data() as IPost)),
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
