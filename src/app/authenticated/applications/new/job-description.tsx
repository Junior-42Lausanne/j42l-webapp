import { Job } from "@/types/types";

type JobDescriptionProps = {
	job: Job;
	className?: string;
};

const JobDescription = ({ job, className = "" }: JobDescriptionProps) => {
	return (
		<div className={className}>
			<h2 className="text-xl font-bold">Job description</h2>
			<h3 className="mt-4 font-bold">{job.title}</h3>
			<p className="mt-2">{job.description}</p>
		</div>
	);
};

export default JobDescription;
