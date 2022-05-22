import Post from "./Post/Post";

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
    </div>
  );
};

export default MyPost;
