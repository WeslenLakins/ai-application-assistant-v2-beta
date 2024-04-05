import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

function Headshot() {
  const { id } = useParams(); // This ID should be the workflowRunId
  const [runDetails, setRunDetails] = useState(null);

  useEffect(() => {
    const fetchRunDetails = async () => {
      try {
        const response = await fetch(`/api/leap-ai/runs/${id}`);
        if (!response.ok) throw new Error('Failed to fetch run details');
        const data = await response.json();
        setRunDetails(data);
      } catch (error) {
        console.error('Fetch error:', error);
        toast.error("Could not load run details.");
      }
    };

    fetchRunDetails();
  }, [id]);

  if (!runDetails) {
    return (
      <div className="headshot-container">
        <h1>Workflow Run Details for {id}</h1>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="headshot-container">
      <h1>Workflow Run Details for {id}</h1>
      <div className="headshot-detail">
        <p><strong>Status:</strong> {runDetails.status}</p>
        <p><strong>Created At:</strong> {new Date(runDetails.created_at).toLocaleString()}</p>
        <p><strong>Started At:</strong> {runDetails.started_at ? new Date(runDetails.started_at).toLocaleString() : 'N/A'}</p>
        <p><strong>Ended At:</strong> {runDetails.ended_at ? new Date(runDetails.ended_at).toLocaleString() : 'N/A'}</p>
      </div>
      <div className="headshot-section">
        <h2>Input</h2>
        <div className="headshot-images">
          {Object.keys(runDetails.input).filter(key => key.startsWith('sample_image_url')).map(key => (
            <img key={key} src={runDetails.input[key]} alt="Sample" />
          ))}
        </div>
      </div>
      <div className="headshot-section">
        <h2>Output</h2>
        <div className="headshot-output">
        {runDetails.output.face_generations.map((url, index) => (
            <a 
              key={index}
              href={url}
              download={`generated_face_${index + 1}.jpg`}
            >
              <img src={url} alt="Generated Face" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Headshot;
