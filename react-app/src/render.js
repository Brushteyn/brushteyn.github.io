import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost} from './redux/state';

export let rerender = (posts) => {
  ReactDOM.render(
    <BrowserRouter>
      <App posts={posts} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};
