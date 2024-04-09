import { Link } from "react-router-dom";

function QuestionItem({ question }) {
	return (
		<div className='ticket'>
			<div>{new Date(question.createdAt).toLocaleString("en-US")}</div>
			<div>{question.jobTitle}</div>
			<div>{question.company}</div>
			<Link to={`/question/${question._id}`} className='btn btn-reverse btn-sm'>
				View
			</Link>
		</div>
	);
}

export default QuestionItem;
