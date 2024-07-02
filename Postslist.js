import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsActions"; // Make sure the action name is correct

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]); // Dependency array should be here

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul>
        {posts.map(post => ( // Use 'post' instead of 'posts' here
          <li key={post.id} className="bg-white shadow-md rounded-md p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
