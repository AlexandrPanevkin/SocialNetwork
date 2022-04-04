import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

    let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value; 
    props.addPost(text);
    newPostElement.current.value='';
  };

  return (
    <div>
      <div className={s.postBlock}>
        <h3>My posts</h3>
      </div>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
