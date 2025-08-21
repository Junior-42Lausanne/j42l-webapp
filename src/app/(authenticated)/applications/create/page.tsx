"use client"
import { useSearchParams } from "next/navigation";
import PageTitle from "@/components/page-title";
import FileUpload from "@/components/file-upload";
import TextArea from "@/components/text-area";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const ApplyToJobPage = () => {
	const position = useSearchParams().get('position');
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
					<Button className="flex-1">OK</Button>
					<Button className="flex-1">Back</Button>
				</div>
			</div>
		</>
	)
}

export default ApplyToJobPage;
