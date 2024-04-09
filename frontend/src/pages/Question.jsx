import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionById, reset } from "../features/questions/questionSlice";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function Question() {
	const { id } = useParams();
	const user = useSelector((state) => state.auth.user);
	const { isLoading, isError, isSuccess, question, message } = useSelector(
		(state) => state.question
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (id && user.token) {
			dispatch(getQuestionById(id, user.token));
		}
	}, [dispatch, id, user.token]);

	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset());
			}
		};
	}, [isSuccess, dispatch]);

	useEffect(() => {
		if (isError) {
			toast.error(message);
			dispatch(reset());
		}
	}, [isError, message, dispatch]);

	if (isLoading || !question) {
		return <Spinner />;
	}

	return (
		<>
			<section className='job-details'>
				<h1>Interview Question & Answer Set Details</h1>
				<div className='job-details-content'>
					<div>
						<h3>Job Title</h3>
						<p>{question.jobTitle}</p>
					</div>
					<div>
						<h3>Company</h3>
						<p>{question.company}</p>
					</div>
					<div>
						<h3>Location</h3>
						<p>{question.location}</p>
					</div>
				</div>
			</section>
			<section className='question-and-answer'>
				<h2>Question & Answer Set</h2>
				<div className='question-and-answer-content'>
					{question && question.questionsAndAnswers ? (
						question.questionsAndAnswers
							.split(/(?=Question:)|(?=Answer:)/)
							.map((text, index) => {
								// Trim and check if the text starts with "Question:" to apply the 'question' class
								const isQuestion = text.trim().startsWith("Question:");
								const qaClass = isQuestion ? "question" : "answer";

								// Return a structured div with appropriate class names for styling
								return (
									<div key={index} className={`qa-section ${qaClass}`}>
										{isQuestion ? (
											<h4 className='qa-heading'>{text}</h4>
										) : (
											<p>{text}</p>
										)}
									</div>
								);
							})
					) : (
						<p>Loading questions and answers...</p> // Placeholder text for when data is not yet available
					)}
				</div>
			</section>
		</>
	);
}

export default Question;
