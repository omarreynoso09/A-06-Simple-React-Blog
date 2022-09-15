const Post = ({ user, post, deletePost }) => {
  return (
    <div>
      <div className="userInfo">
        <img src={user.url} />
        <div>{user.username}</div>
      </div>
      <div className="postCard">{post.content}</div>
      <button onClick={() => deletePost(post.id)}>Delete Post</button>
    </div>
  );
};

export default Post;
