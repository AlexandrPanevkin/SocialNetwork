import React from "react";
import s from './ProfileInfo.module.css'

const Profileinfo = () => {
  return (
    <div>
      <div>
        <img src="https://tinypng.com/images/social/website.jpg" />
      </div> 
      <div className={s.descriptionBlock}>ava + discription</div>
    </div>
  );
};
export default Profileinfo;
