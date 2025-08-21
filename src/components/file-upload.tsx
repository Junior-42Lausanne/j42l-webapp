import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import React from "react";

const FileUpload = () => {
	const [selectedFile, setSelectedFile] = React.useState<string[]>([]);
	function selectFile(event: React.ChangeEvent<HTMLInputElement>) {
		if (event.target.files && event.target.files.length > 0) {
			setSelectedFile([...selectedFile, event.target.files[0].name]);
		}
	}
	function removeFile (fileToDelete: string) {
		setSelectedFile(selectedFile.filter(currentFile => currentFile !== fileToDelete))
	}
	return (

	<div className="grid w-full max-w-sm items-center gap-3">
		{selectedFile.map((name) => (
			<div key={name}	className="flex flex-1 justify-between">
				<p>{name}</p>
				<X onClick={() => removeFile(name)}/>
			</div>
		))}
		<Input onChange={selectFile} type="file" multiple />
	</div>
	)
}

export default FileUpload;