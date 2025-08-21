"use client"
import { useSearchParams } from "next/navigation";

const ApplyToJobPage = () => {
	const position = useSearchParams().get('position');
	return (
		<>
			Apply to be a {position}
		</>
	)
}

export default ApplyToJobPage;
