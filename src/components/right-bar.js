const RightBar = () => {
  return (
    <div class="right-bar">
      <div class="right-bar__function">
        <div class="right-bar__profile">
          <div class="logo">
            <img
              src="https://www.iphones.ru/wp-content/uploads/2021/12/macbook-pro-2021-16-inch-m1-pro-max-impressions-iphonesru-12-2.jpeg"
              alt=""
              class="right-bar__ava"
            />
          </div>

          <div class="qwerty">
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

            <div class="right-bar__post">
              <h1 class="right-bar__title">My Post</h1>
              <input type="text" placeholder="your news..." />
              <button class="right-bar__btn">Send</button>
            </div>
            <div class="right-bar__task">
              <p class="right-bar__task-txt">Hey, why nobody love me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
