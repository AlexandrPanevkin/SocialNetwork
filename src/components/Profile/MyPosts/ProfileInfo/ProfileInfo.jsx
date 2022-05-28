import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  debugger;
  return (
    <div className={s.descriptionBlock}>
      <div className={s.startImage}>
        <img src="https://klike.net/uploads/posts/2021-01/1611131113_2.jpg" />
      </div>
      <div className={s.description}>
        <img src={props.profile.photos.large} /> Варвара Ивановна
      </div>
    </div>
  );
};
export default Profileinfo;
