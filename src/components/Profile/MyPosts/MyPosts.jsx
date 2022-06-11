import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={s.postBlock}>
        <h3>Мои публикации</h3>
      </div>
      <form className={s.textarea}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </form>
      <div>
        <button className={s.button}onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
