import React, { useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const PostList = ({ posts, fetchPosts }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleComment = async (id) => {
    await axios.post(`http://localhost:8000/api/posts/${id}/comment`, { text: comment });
    setComment('');
    fetchPosts();
  };

  const handleRating = async (id) => {
    await axios.post(`http://localhost:8000/api/posts/${id}/rate`, { rating });
    setRating(0);
    fetchPosts();
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="mb-5 border p-5 rounded shadow">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="mb-3">{post.content}</p>
          <h3>Average Rating: {post.averageRating.toFixed(1)}</h3>
          <div>
            <textarea
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="block w-full border rounded p-2 mb-2"
            />
            <button
              onClick={() => handleComment(post._id)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Comment
            </button>
          </div>
          <div className="mt-5">
            <span>Rate:</span>
            {[1, 2, 3, 4, 5].map((val) => (
              <FaStar
                key={val}
                className={`inline-block cursor-pointer ${val <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => setRating(val)}
              />
            ))}
            <button
              onClick={() => handleRating(post._id)}
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
            >
              Rate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
