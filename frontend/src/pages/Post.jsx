import React from 'react';
import { useLocation } from 'react-router-dom';
// Import your CSS file if you're using CSS Modules or ensure it's included in your main stylesheet
// import './Post.css';

function Post() {
  const location = useLocation();
  const post = location.state?.post; // Access the post data from the location state

  if (!post) {
    return <div className='loading-text'>Loading...</div>; // Use the "loading-text" class for styling the loading state
  }

  // Format the date into a more readable format if necessary
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='post-container'>
      <h2 className='post-title'>{post.title}</h2>
      <div className='post-meta'>
        <span className='post-author'>By {post.author}</span>
        <span className='post-date'>Published on {formattedDate}</span>
      </div>
      <div className='post-content'>
        {post.content}
        {/* If your post content is HTML or Markdown, you might need to use a library like 'dangerouslySetInnerHTML' or 'react-markdown' to parse and display it correctly */}
      </div>
    </div>
  );
}

export default Post;
