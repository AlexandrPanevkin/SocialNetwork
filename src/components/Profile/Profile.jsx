import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./MyPosts/ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </div>
  );
};
export default Profile;
