import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCameraRetro,
	faFileAlt,
	faUsers,
	faSignInAlt,
	faQuestionCircle,
	faBlog,
} from "@fortawesome/free-solid-svg-icons";

const servicesList = [
	{
		id: 1,
		title: "Professional Headshots",
		description:
			"Create new professional headshots tailored for each position you are applying for, enhancing your first impression on potential employers.",
		icon: faCameraRetro,
	},
	{
		id: 2,
		title: "Custom Resumes",
		description:
			"Generate resumes tailored for each job position you apply to, making sure you stand out by highlighting the most relevant skills and experiences.",
		icon: faFileAlt,
	},
	{
		id: 3,
		title: "Networking Pro",
		description:
			"Access our Networking Pro feature to help you network and find new opportunities through a streamlined and efficient platform.",
		icon: faUsers,
	},
	{
		id: 4,
		title: "OAuth Authentication",
		description:
			"Sign in or up for the application with your existing Google accounts using OAuth authentication, for a seamless and secure access experience.",
		icon: faSignInAlt,
	},
	{
		id: 5,
		title: "Interview Q&A",
		description:
			"Generate potential interview questions and answers based on a job description and your resume, enhancing your preparation for any job application.",
		icon: faQuestionCircle,
	},
	{
		id: 6,
		title: "Blog",
		description:
			"Access our Blog feature to read about the latest trends in the job market, career advice, and tips on how to improve your job application.",
		icon: faBlog,
	},
];

const ServiceItem = ({ title, description, icon }) => (
	<div className='service-item'>
		<FontAwesomeIcon icon={icon} className='service-icon' />
		<h3 className='service-title'>{title}</h3>
		<p className='service-description'>{description}</p>
	</div>
);

const Services = () => (
	<section className='services-section'>
		<h2>AI Application Assistant v2 Features</h2>
		<div className='services-grid'>
			{servicesList.map((service) => (
				<ServiceItem key={service.id} {...service} />
			))}
		</div>
	</section>
);

export default Services;
