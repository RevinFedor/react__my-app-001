import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div class={s.right_bar__task}>
      <img
        src="https://luxsite.ua/wp-content/uploads/2019/12/Office-Computer-Work-Laptop-Freelancer-Business-620823.jpg"
        alt="asd"
        className={s.post__images}
      />

      <p class={s.right_bar__task_txt}> {props.massage} </p>
      <p class={s.right_bar__task_txt}> {props.like} </p>
    </div>
  );
};

export default Post;
