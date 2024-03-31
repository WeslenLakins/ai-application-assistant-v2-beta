import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { getResumeById, reset } from '../features/resumes/resumeSlice';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

function Resume() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, resume, message } = useSelector(
    (state) => state.resume
  );

  useEffect(() => {
    if (id) {
      dispatch(getResumeById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [isSuccess, dispatch]);

  if (isError) {
    toast.error(message);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='job-details'>
        <h1>Job Details</h1>
        <p>{new Date(resume.createdAt).toLocaleString('en-US')}</p>
        <p>{resume.jobTitle}</p>
        <p>{resume.company}</p>
        <p>{resume.location}</p>
      </section>
      <hr />

      <div style={{ margin: '10px', lineHeight: '1.6' }}>
        {resume.newResume &&
          resume.newResume.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '20px' }}>
              {paragraph}
            </p>
          ))}
      </div>
    </>
  );
}

export default Resume;
