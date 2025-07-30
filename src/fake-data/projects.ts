export const projects = [
	{
		id: 1,
		title: "E-Commerce Platform Redesign",
		description:
			"A complete overhaul of an online retail platform, focusing on modern UI/UX, performance, and scalability. The project involves both frontend and backend improvements, as well as integration with third-party payment and shipping providers.",
		jobs: [
			{
				id: 1,
				title: "Frontend React Developer",
				description:
					"Develop and maintain user-facing features using React, ensuring responsive design and optimal performance.",
				skills: ["react", "javascript", "html", "css"],
				applied: true,
			},
			{
				id: 2,
				title: "Backend Node.js Engineer",
				description:
					"Design and implement scalable backend services and APIs using Node.js, with a focus on reliability and security.",
				skills: ["node.js", "express", "mongodb", "docker"],
				applied: false,
			},
		],
		documents: [
			{ id: 1, name: "Requirements Specification.pdf" },
			{ id: 2, name: "Wireframes.zip" },
			{ id: 3, name: "API Documentation.docx" },
		],
	},
	{
		id: 2,
		title: "Healthcare Appointment System",
		description:
			"A web application for clinics and hospitals to manage patient appointments, doctor schedules, and notifications. Includes secure authentication, calendar integration, and real-time updates.",
		jobs: [
			{
				id: 3,
				title: "Full Stack Developer",
				description:
					"Work across the stack to build and integrate both frontend and backend components for a seamless user experience.",
				skills: ["javascript", "react", "node.js", "sql"],
				applied: false,
			},
			{
				id: 4,
				title: "UI/UX Designer",
				description:
					"Create intuitive and visually appealing user interfaces, focusing on user experience and accessibility.",
				skills: [
					"figma",
					"wireframing",
					"prototyping",
					"accessibility",
				],
				applied: false,
			},
		],
		documents: [
			{ id: 1, name: "System Architecture.pdf" },
			{ id: 2, name: "User Flow Diagrams.png" },
		],
	},
];
