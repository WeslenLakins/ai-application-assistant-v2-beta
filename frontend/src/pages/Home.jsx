import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>AI Application Assistant v2</h1>
        <p>
          Welcome to the AI Application Assistant v2!
        </p>
      </section>

      <Link to='/new-post' className='btn btn-reverse btn-block'>
        <FaTicketAlt /> Create New Post
      </Link>
      <Link to='/posts' className='btn btn-block'>
        <FaQuestionCircle /> View Posts
      </Link>
      <Link to='/networking' className='btn btn-reverse btn-block'>
        <FaTicketAlt /> Networking Pro
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
