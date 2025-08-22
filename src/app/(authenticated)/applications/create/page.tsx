"use client"
import { useSearchParams } from "next/navigation";
import PageTitle from "@/components/page-title";
import FileUpload from "@/components/file-upload";
import TextArea from "@/components/text-area";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const ApplyToJobPage = () => {
	const position = useSearchParams().get('position');
	const projectId = useSearchParams().get('projectId');
	return (
		<>
			<PageTitle title={`Apply to be a ${position}`}></PageTitle>
			<div className="flex flex-col space-y-5">
				<Card>
					<CardHeader>
						<CardTitle>Motivation</CardTitle>
					</CardHeader>
					<CardContent>
						<TextArea placeholder="Tell us why you're excited about this position" />
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Documents</CardTitle>
					</CardHeader>
					<CardContent>
						<FileUpload />
					</CardContent>
				</Card>
				<div className="flex gap-4">
					<a href="#" className="flex-1">
						<Button className="w-full">OK</Button>
					</a>
					<a href={`/projects/${projectId}`} className="flex-1">
						<Button className="w-full">Back</Button>
					</a>
				</div>
			</div>
		</>
	)
}

export default ApplyToJobPage;
