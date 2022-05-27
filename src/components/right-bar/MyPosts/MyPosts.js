import Post from "./Post/Post";
<<<<<<< HEAD
import React from "react";




const MyPost = (props) => {
  let postDataArray = props.postData.map((el) => {
    return <Post massage={el.message} like={el.like} />;
  });

  let newPostElement = React.createRef();

  let addPostClick = () => {
    props.addPostClick();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div class="right-bar__post">
        <h1 class="right-bar__title">My Post</h1>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button class="right-bar__btn" onClick={addPostClick}>
          Add Post
        </button>
      </div>
      {postDataArray}
=======

const MyPost = () => {
  return (
    <div className="">
      <div class="right-bar__post">
        <h1 class="right-bar__title">My Post</h1>
        <input type="text" placeholder="your news..." />
        <button class="right-bar__btn">Send</button>
      </div>
      <Post massage="Hey, why nobody love meu" />
      <Post massage="Hey, why nobody love me" />
>>>>>>> 69280e1161b57a0f560b502a4c2659afb7e61b90
    </div>
  );
};

export default MyPost;
