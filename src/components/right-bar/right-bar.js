import MyPost from "./MyPosts/MyPosts";
import s from "./right-bar.module.css";

const RightBar = (props) => {
  
  return (
    <div class={s.right_bar}>
      <div class="right-bar__function">
        <div class="right-bar__profile">
          {/* Изображение и фон */}

          <div class="logo">
            <img
              src="https://www.iphones.ru/wp-content/uploads/2021/12/macbook-pro-2021-16-inch-m1-pro-max-impressions-iphonesru-12-2.jpeg"
              alt=""
              class={s.right_bar__ava}
            />
          </div>

          {/* Профиль пользователя */}

          <div class={s.qwerty}>
            <h1 class="right-bar__title">Dmitry K.</h1>
            <div class="right-bar__info">
              <ul class="right-bar__ul">
                <li class="right-bar__li">Date of Birth: 2 january</li>
                <li class="right-bar__li">City: Minsk</li>
                <li class="right-bar__li">Education: BSU`11</li>
                <li class="right-bar__li">
                  Web Site:
                  <a href="https://www.youtube.com" class="link">
                    https://www.youtube.com
                  </a>
                </li>
              </ul>
            </div>

            <MyPost
              postData={props.state.postData}
              addPost={props.addPost}
              newPostText={props.state.newPostText}
              updateNewPostText={props.updateNewPostText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
