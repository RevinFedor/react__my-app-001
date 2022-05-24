import Post from "./Post/Post";
import React from "react";

const MyPost = (props) => {
  let postDataArray = props.postData.map((el) => {
    return <Post massage={el.message} like={el.like} />;
  });

  let newPostElement = React.createRef();

  let addPostClick = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className="">
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
    </div>
  );
};

export default MyPost;
