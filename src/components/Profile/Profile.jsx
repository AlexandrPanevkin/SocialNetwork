import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./MyPosts/ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPostsContainer store={props.store}  />
    </div>
  );
};
export default Profile;
