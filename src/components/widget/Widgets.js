import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchOutlined className="widgets__searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets__widgetContainar">
        <h2>What's happening?</h2>
        {/* ライブラリ追加 */}
        <TwitterTweetEmbed tweetId={"1508838714180612100"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/reactjs"}
          options={{ text: "#React is awesome:)", via: "reactjs" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
