import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

import './styles.css';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Buscar no Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>O que está acontecendo?</h2>
        <TwitterTweetEmbed tweetId={'1304253330563137542'} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="marvel"
          options={{ height: 400 }}
        />
        <TwitterShareButton url="" options={{ text: '#reactjs is awesome', via: 'vbeloti'}} />

      </div>
    </div>
  );
};

export default Widgets;
