import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let allPosts = props.posts.map( p =>  <Post id={p.id} avaUrl={p.avaUrl} text={p.text} key={p.id} />)

  let newPostElement = React.useRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    if (!text) {
      return;
    }

    props.addPost(text);    
    newPostElement.current.value = "";    
  }

  return (
    <div className="my-posts">
      <div className="my-posts__header">
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className="my-posts__body">
        { allPosts }
      </div>
    </div>
  );
}

export default MyPosts;
