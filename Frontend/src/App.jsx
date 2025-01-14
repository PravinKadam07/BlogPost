import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:8000/api/posts');
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">MERN Blog App</h1>
      <PostForm fetchPosts={fetchPosts} />
      <PostList posts={posts} fetchPosts={fetchPosts} />
    </div>
  );
};

export default App;
