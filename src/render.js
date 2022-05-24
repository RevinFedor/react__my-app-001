import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, addMessage, updateNewPostText, updateNewMessage } from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderReactTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        AppState={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
        updateNewMessage={updateNewMessage}
        
      />
    </React.StrictMode>
  );
};