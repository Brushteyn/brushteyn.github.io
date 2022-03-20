import './Post.css';

const Post = (props) => {
  return (
    <div className="my-posts__item">
      <span>{props.id + ')'}</span>
      <img src={props.avaUrl} alt="img" />
      <span>{props.text}</span>
      <button>LIKE</button>
    </div>
  );
}

export default Post;
