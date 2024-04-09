import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getScratchResumeById,
	reset,
} from "../features/scratchResumes/scratchResumeSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function ScratchResume() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { isLoading, isError, isSuccess, scratchResume, message } = useSelector(
		(state) => state.scratchResume
	);

	useEffect(() => {
		if (id) {
			dispatch(getScratchResumeById(id));
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
				<div className='job-details-contents'>
					<p>{new Date(scratchResume.createdAt).toLocaleString("en-US")}</p>
					<p>{scratchResume.jobTitle}</p>
					<p>{scratchResume.company}</p>
					<p>{scratchResume.location}</p>
				</div>
			</section>

			<section className='scratch-resume'>
				<p>{scratchResume.scratchResume}</p>
			</section>
		</>
	);
}

export default ScratchResume;
