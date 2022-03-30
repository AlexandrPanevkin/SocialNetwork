import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./MyPosts/ProfileInfo/ProfileInfo";

import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts posts={props.state.posts} />
    </div>
  );
};
export default Profile;
