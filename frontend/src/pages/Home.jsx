import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Welcome to MERN Stack Blog</h1>
        <p>
          This is a simple blog application built using the MERN stack. You can
          create, read, update, and delete posts.
        </p>
      </section>

      <Link to='/new-post' className='btn btn-reverse btn-block'>
        <FaTicketAlt /> Create New Post
      </Link>
      <Link to='/posts' className='btn btn-block'>
        <FaQuestionCircle /> View Posts
      </Link>
      <Link to='/networking' className='btn btn-reverse btn-block'>
        <FaTicketAlt /> Networking Tools
      </Link>
      <Link to='/services' className='btn btn reverse btn-block'>
        <FaQuestionCircle /> View Services
      </Link>
      <Link to='/new-resume' className='btn btn-reverse btn-block'>
        <FaTicketAlt /> Create New Resume
      </Link>
      <Link to='/resumes' className='btn btn-block'>
        <FaQuestionCircle /> View Resumes
      </Link>
      <Link to='/new-headshot' className='btn btn-reverse btn-block'>
        <FaTicketAlt /> Create New Headshot
      </Link>
      <Link to='/headshots' className='btn btn-block'>
        <FaQuestionCircle /> View Headshots
      </Link>
    </>
  );
}

export default Home;
