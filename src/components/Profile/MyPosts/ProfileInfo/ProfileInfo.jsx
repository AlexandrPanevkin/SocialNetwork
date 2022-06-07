import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.descriptionBlock}>
      <div className={s.startImage}>
        {/* <img src="https://klike.net/uploads/posts/2021-01/1611131113_2.jpg" /> */}
      </div>
      <div className={s.description}>
        <img src={props.profile.photos.large} /> <ProfileStatus status={props.status} />
      </div>
    </div>
  );
};
export default Profileinfo;
