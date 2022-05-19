import React from "react";
import s from "./ProfileInfo.module.css";

const Profileinfo = () => {
  return (
    <div className={s.descriptionBlock}>
      <div className={s.startImage}>
        <img src="https://klike.net/uploads/posts/2021-01/1611131113_2.jpg" />
      </div>
      <div className={s.description}>
        <img src="https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg" /> Варвара Ивановна
      </div>
    </div>
  );
};
export default Profileinfo;
