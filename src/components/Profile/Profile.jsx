import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} isOwner={props.isOwner} />
      <MyPostsContainer /> 
    </div>
  );
};
export default Profile;
