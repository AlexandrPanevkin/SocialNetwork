import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import userPhoto from '../../../../assets/images/user.jpg'
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks.jsx";

const Profileinfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={s.descriptionBlock}>
      <div className={s.startImage}></div>
      <div className={s.description}>
        <img src={profile.photos.large || userPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
};
export default Profileinfo;
