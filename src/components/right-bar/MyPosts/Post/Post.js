import s from "./Post.module.css";
<<<<<<< HEAD
import React from "react";
=======

>>>>>>> 69280e1161b57a0f560b502a4c2659afb7e61b90
const Post = (props) => {
  return (
    <div class={s.right_bar__task}>
      <img
        src="https://luxsite.ua/wp-content/uploads/2019/12/Office-Computer-Work-Laptop-Freelancer-Business-620823.jpg"
        alt="asd"
        className={s.post__images}
      />

      <p class={s.right_bar__task_txt}> {props.massage} </p>
<<<<<<< HEAD
      <p class={s.right_bar__task_txt}> {props.like} </p>
=======
>>>>>>> 69280e1161b57a0f560b502a4c2659afb7e61b90
    </div>
  );
};

export default Post;
