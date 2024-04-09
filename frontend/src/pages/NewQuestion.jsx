import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createQuestion, reset } from "../features/questions/questionSlice";
import Spinner from "../components/Spinner";

function NewQuestion() {
	const user = useSelector((state) => state.auth.user);
	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.question
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [jobTitle, setJobTitle] = useState("");
	const [company, setCompany] = useState("");
	const [location, setLocation] = useState("");
	const [jobDescription, setJobDescription] = useState("");
	const [currentResume, setCurrentResume] = useState("");

	useEffect(() => {
		if (isError) {
			toast.error(message);
			dispatch(reset());
		}

		if (isSuccess) {
			toast.success("Question created successfully!");
			dispatch(reset());
			navigate("/");
		}
	}, [isError, isSuccess, message, dispatch, navigate]);

	const onSubmit = (e) => {
		e.preventDefault();

		const questionsAndAnswersData = {
			jobTitle,
			company,
			location,
			jobDescription,
			currentResume,
		};

		dispatch(createQuestion(questionsAndAnswersData, user.token));
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<section className='heading'>
				<h1>Create New Interview Question & Answer Set</h1>
				<p>Please fill out the form below</p>
			</section>

			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<label htmlFor='jobTitle'>Job Title</label>
						<input
							type='text'
							name='jobTitle'
							id='jobTitle'
							className='form-control'
							placeholder='Job title'
							value={jobTitle}
							onChange={(e) => setJobTitle(e.target.value)}></input>
					</div>
					<div className='form-group'>
						<label htmlFor='company'>Company</label>
						<input
							type='text'
							name='company'
							id='company'
							className='form-control'
							placeholder='Company name or client name'
							value={company}
							onChange={(e) => setCompany(e.target.value)}></input>
					</div>
					<div className='form-group'>
						<label htmlFor='location'>Location</label>
						<input
							type='text'
							name='location'
							id='location'
							className='form-control'
							placeholder='Location'
							value={location}
							onChange={(e) => setLocation(e.target.value)}></input>
					</div>
					<div className='form-group'>
						<label htmlFor='jobDescription'>Job Description</label>
						<textarea
							name='jobDescription'
							id='jobDescription'
							className='form-control'
							placeholder='Copy & paste the job description or project requirements here'
							value={jobDescription}
							onChange={(e) => setJobDescription(e.target.value)}></textarea>
					</div>
					<div className='form-group'>
						<label htmlFor='currentResume'>Current Resume</label>
						<textarea
							name='currentResume'
							id='currentResume'
							className='form-control'
							placeholder='Copy & paste your current current resume or add your skills & experience here'
							value={currentResume}
							onChange={(e) => setCurrentResume(e.target.value)}></textarea>
					</div>
					<div className='form-group'>
						<button className='btn btn-block'>
							Generate Interview Question & Answer Set
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default NewQuestion;
