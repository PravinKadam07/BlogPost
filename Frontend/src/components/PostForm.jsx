import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ fetchPosts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/api/posts', { title, content });
    setTitle('');
    setContent('');
    fetchPosts();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full border rounded p-2 mb-2"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full border rounded p-2 mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Post
      </button>
    </form>
  );
};

export default PostForm;
