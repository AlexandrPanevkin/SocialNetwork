import React from "react";
import s from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://img.freepik.com/free-vector/avatar-of-a-girl-cute-female-image-ordinary-girl-fashionable-flat-style_15870-697.jpg?w=740",
        followed: false,
        fullName: "Dmitry",
        status: "I am a boss",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://img.freepik.com/free-vector/avatar-of-a-girl-cute-female-image-ordinary-girl-fashionable-flat-style_15870-697.jpg?w=740",
        followed: true,
        fullName: "Sasha",
        status: "I am a boss too",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://img.freepik.com/free-vector/avatar-of-a-girl-cute-female-image-ordinary-girl-fashionable-flat-style_15870-697.jpg?w=740",
        followed: false,
        fullName: "Andrew",
        status: "I am a boss too",
        location: { city: "Kiev", country: "Ukraine" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img className={s.userPhoto} src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Подписаться
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Отписаться
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
