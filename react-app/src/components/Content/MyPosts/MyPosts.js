import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let allPosts = props.posts.map( p =>  <Post id={p.id} avaUrl={p.avaUrl} text={p.text} key={p.id} />)

  return (
    <div className="my-posts">
      <div className="my-posts__header">
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="my-posts__body">
        { allPosts }
      </div>
    </div>
  );
}

export default MyPosts;
