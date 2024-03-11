import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts, reset } from '../features/posts/postSlice';
import Spinner from '../components/Spinner';

function Posts() {
  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.post
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }

  return (
    <div className='blog-posts'>
      <h1>Posts</h1>
      {isSuccess && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className='post-card'>
            <div className='post-content'>
              <h2 className='post-title'>{post.title}</h2>
              <p className='post-excerpt'>{post.headline}</p>
              <div className='post-info'>
                <span>
                  Published on {new Date(post.createdAt).toLocaleDateString()}
                </span>
                <button className='read-more-btn'>Read More</button>
              </div>
              <div className='post-info'>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export default Posts;
