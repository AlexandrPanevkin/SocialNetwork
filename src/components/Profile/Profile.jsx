import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./MyPosts/ProfileInfo/ProfileInfo";

import classes from "./Profile.module.css";

const Profile = () => {

  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
  ];

  return (
    <div>
      <Profileinfo />
      <MyPosts posts={posts} />
    </div>
  );
};
export default Profile;
