import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions, reset } from "../features/questions/questionSlice";
import Spinner from "../components/Spinner";
import QuestionItem from "../components/QuestionItem";

function Questions() {
	const user = useSelector((state) => state.auth.user);
	const { isLoading, isError, isSuccess, questions, message } = useSelector(
		(state) => state.question
	);

	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset());
			}
		};
	}, [isSuccess, dispatch]);

	useEffect(() => {
		dispatch(getQuestions(user.token));
	}, [dispatch, user.token]);

	if (isError) {
		return <div>{message}</div>;
	}

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<h1>Interview Question & Answer Sets</h1>
			<div className='tickets'>
				<div className='ticket-headings'>
					<div>Date</div>
					<div>Job Title</div>
					<div>Company</div>
					<div>Q&A Set</div>
				</div>
				{questions.map((question) => (
					<QuestionItem key={question._id} question={question} />
				))}
			</div>
		</>
	);
}

export default Questions;
