import { useState } from "react";
import Post from "./Post";

const Blog = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState();

  const addPost = () => {
    const postsCopy = [...posts];
    const id = postsCopy.length > 0 ? postsCopy[0].id + 1 : 1;
    const post = { content: newPost, id };
    setNewPost("");
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    const postsCopy = [...posts];
    const index = postsCopy.findIndex((post) => post.id === id);
    postsCopy.splice(index, 1);
    setPosts(postsCopy);
  };

  return (
    <div>
      <h2>Welcome {user.username}!</h2>
      <div>
        <textarea
          placeholder="TYPE YOUR POST!"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={addPost}>Post</button>
      </div>
      <div>
        {posts.map((post) => {
          return (
            <Post
              user={user}
              post={post}
              deletePost={deletePost}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
