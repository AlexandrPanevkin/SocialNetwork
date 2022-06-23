import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks.jsx";

const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.descriptionBlock}>
      <div className={s.startImage}></div>
      <div className={s.description}>
        <img src={props.profile.photos.large} />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};
export default Profileinfo;
