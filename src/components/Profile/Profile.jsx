import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo profile={props.profile} />
      <MyPostsContainer /> 
    </div>
  );
};
export default Profile;
