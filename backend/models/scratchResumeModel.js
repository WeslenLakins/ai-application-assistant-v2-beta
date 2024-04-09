const mongoogse = require("mongoose");

const scratchResumeSchema = new mongoogse.Schema(
	{
		user: {
			type: mongoogse.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		jobTitle: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		jobDescription: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: false,
		},
		linkedInUrl: {
			type: String,
			required: false,
		},
		githubUrl: {
			type: String,
			required: false,
		},
		address: {
			type: String,
			required: false,
		},
		city: {
			type: String,
			required: false,
		},
		state: {
			type: String,
			required: false,
		},
		zip: {
			type: String,
			required: false,
		},
		school1: {
			type: String,
			required: false,
		},
		school1Location: {
			type: String,
			required: false,
		},
		school1StartDate: {
			type: String,
			required: false,
		},
		school1EndDate: {
			type: String,
			required: false,
		},
		school1Degree: {
			type: String,
			required: false,
		},
		school2: {
			type: String,
			required: false,
		},
		school2Location: {
			type: String,
			required: false,
		},
		school2StartDate: {
			type: String,
			required: false,
		},
		school2EndDate: {
			type: String,
			required: false,
		},
		school2Degree: {
			type: String,
			required: false,
		},
		school3: {
			type: String,
			required: false,
		},
		school3Location: {
			type: String,
			required: false,
		},
		school3StartDate: {
			type: String,
			required: false,
		},
		school3EndDate: {
			type: String,
			required: false,
		},
		school3Degree: {
			type: String,
			required: false,
		},
		work1Company: {
			type: String,
			required: false,
		},
		work1Location: {
			type: String,
			required: false,
		},
		work1StartDate: {
			type: String,
			required: false,
		},
		work1EndDate: {
			type: String,
			required: false,
		},
		work1Title: {
			type: String,
			required: false,
		},
		work1Skills: [
			{
				type: String,
				required: false,
				enum: [
					"Communication",
					"Teamwork",
					"Problem-solving",
					"Leadership",
					"Work ethic",
					"Adaptability",
					"Project management",
					"Analytical skills",
					"Technical proficiency",
					"Creativity",
					"Interpersonal skills",
					"Time management",
					"Critical thinking",
					"Customer service",
					"Attention to detail",
					"Organizational skills",
					"Flexibility",
					"Emotional intelligence",
					"Multitasking",
					"Negotiation",
					"Digital literacy",
					"Financial literacy",
					"Entrepreneurial skills",
					"Marketing",
					"Sales",
					"Language skills",
					"Coding",
					"Social media management",
					"SEO/SEM",
					"Data analysis",
					"Graphic design",
					"Networking",
					"Public speaking",
					"Writing and editing",
					"Research",
					"Teaching and training",
					"Cybersecurity",
					"Environmental awareness",
					"Legal compliance",
					"Risk management",
					"Strategic planning",
					"User experience (UX)",
					"Supply chain management",
					"Quality control",
					"Health and safety",
					"Machine learning/AI",
					"Blockchain",
					"Cloud computing",
					"Agile methodologies",
					"Sustainability",
				],
			},
		],
		work2Company: {
			type: String,
			required: false,
		},
		work2Location: {
			type: String,
			required: false,
		},
		work2StartDate: {
			type: String,
			required: false,
		},
		work2EndDate: {
			type: String,
			required: false,
		},
		work2Title: {
			type: String,
			required: false,
		},
		work2Skills: [
			{
				type: String,
				required: false,
				enum: [
					"Communication",
					"Teamwork",
					"Problem-solving",
					"Leadership",
					"Work ethic",
					"Adaptability",
					"Project management",
					"Analytical skills",
					"Technical proficiency",
					"Creativity",
					"Interpersonal skills",
					"Time management",
					"Critical thinking",
					"Customer service",
					"Attention to detail",
					"Organizational skills",
					"Flexibility",
					"Emotional intelligence",
					"Multitasking",
					"Negotiation",
					"Digital literacy",
					"Financial literacy",
					"Entrepreneurial skills",
					"Marketing",
					"Sales",
					"Language skills",
					"Coding",
					"Social media management",
					"SEO/SEM",
					"Data analysis",
					"Graphic design",
					"Networking",
					"Public speaking",
					"Writing and editing",
					"Research",
					"Teaching and training",
					"Cybersecurity",
					"Environmental awareness",
					"Legal compliance",
					"Risk management",
					"Strategic planning",
					"User experience (UX)",
					"Supply chain management",
					"Quality control",
					"Health and safety",
					"Machine learning/AI",
					"Blockchain",
					"Cloud computing",
					"Agile methodologies",
					"Sustainability",
				],
			},
		],
		work3Company: {
			type: String,
			required: false,
		},
		work3Location: {
			type: String,
			required: false,
		},
		work3StartDate: {
			type: String,
			required: false,
		},
		work3EndDate: {
			type: String,
			required: false,
		},
		work3Title: {
			type: String,
			required: false,
		},
		work3Skills: [
			{
				type: String,
				required: false,
				enum: [
					"Communication",
					"Teamwork",
					"Problem-solving",
					"Leadership",
					"Work ethic",
					"Adaptability",
					"Project management",
					"Analytical skills",
					"Technical proficiency",
					"Creativity",
					"Interpersonal skills",
					"Time management",
					"Critical thinking",
					"Customer service",
					"Attention to detail",
					"Organizational skills",
					"Flexibility",
					"Emotional intelligence",
					"Multitasking",
					"Negotiation",
					"Digital literacy",
					"Financial literacy",
					"Entrepreneurial skills",
					"Marketing",
					"Sales",
					"Language skills",
					"Coding",
					"Social media management",
					"SEO/SEM",
					"Data analysis",
					"Graphic design",
					"Networking",
					"Public speaking",
					"Writing and editing",
					"Research",
					"Teaching and training",
					"Cybersecurity",
					"Environmental awareness",
					"Legal compliance",
					"Risk management",
					"Strategic planning",
					"User experience (UX)",
					"Supply chain management",
					"Quality control",
					"Health and safety",
					"Machine learning/AI",
					"Blockchain",
					"Cloud computing",
					"Agile methodologies",
					"Sustainability",
				],
			},
		],
		work4Company: {
			type: String,
			required: false,
		},
		work4Location: {
			type: String,
			required: false,
		},
		work4StartDate: {
			type: String,
			required: false,
		},
		work4EndDate: {
			type: String,
			required: false,
		},
		work4Title: {
			type: String,
			required: false,
		},
		work4Skills: [
			{
				type: String,
				required: false,
				enum: [
					"Communication",
					"Teamwork",
					"Problem-solving",
					"Leadership",
					"Work ethic",
					"Adaptability",
					"Project management",
					"Analytical skills",
					"Technical proficiency",
					"Creativity",
					"Interpersonal skills",
					"Time management",
					"Critical thinking",
					"Customer service",
					"Attention to detail",
					"Organizational skills",
					"Flexibility",
					"Emotional intelligence",
					"Multitasking",
					"Negotiation",
					"Digital literacy",
					"Financial literacy",
					"Entrepreneurial skills",
					"Marketing",
					"Sales",
					"Language skills",
					"Coding",
					"Social media management",
					"SEO/SEM",
					"Data analysis",
					"Graphic design",
					"Networking",
					"Public speaking",
					"Writing and editing",
					"Research",
					"Teaching and training",
					"Cybersecurity",
					"Environmental awareness",
					"Legal compliance",
					"Risk management",
					"Strategic planning",
					"User experience (UX)",
					"Supply chain management",
					"Quality control",
					"Health and safety",
					"Machine learning/AI",
					"Blockchain",
					"Cloud computing",
					"Agile methodologies",
					"Sustainability",
				],
			},
		],
		work5Company: {
			type: String,
			required: false,
		},
		work5Location: {
			type: String,
			required: false,
		},
		work5StartDate: {
			type: String,
			required: false,
		},
		work5EndDate: {
			type: String,
			required: false,
		},
		work5Title: {
			type: String,
			required: false,
		},
		work5Skills: [
			{
				type: String,
				required: false,
				enum: [
					"Communication",
					"Teamwork",
					"Problem-solving",
					"Leadership",
					"Work ethic",
					"Adaptability",
					"Project management",
					"Analytical skills",
					"Technical proficiency",
					"Creativity",
					"Interpersonal skills",
					"Time management",
					"Critical thinking",
					"Customer service",
					"Attention to detail",
					"Organizational skills",
					"Flexibility",
					"Emotional intelligence",
					"Multitasking",
					"Negotiation",
					"Digital literacy",
					"Financial literacy",
					"Entrepreneurial skills",
					"Marketing",
					"Sales",
					"Language skills",
					"Coding",
					"Social media management",
					"SEO/SEM",
					"Data analysis",
					"Graphic design",
					"Networking",
					"Public speaking",
					"Writing and editing",
					"Research",
					"Teaching and training",
					"Cybersecurity",
					"Environmental awareness",
					"Legal compliance",
					"Risk management",
					"Strategic planning",
					"User experience (UX)",
					"Supply chain management",
					"Quality control",
					"Health and safety",
					"Machine learning/AI",
					"Blockchain",
					"Cloud computing",
					"Agile methodologies",
					"Sustainability",
				],
			},
		],
		scratchResume: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoogse.model("ScratchResume", scratchResumeSchema);
