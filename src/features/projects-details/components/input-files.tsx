"use client";
import { Input } from "@/components/ui/input"
import React from "react";

const InputFile = () => {
	const [selectedFile, setSelectedFile] = React.useState<string[]>([]);

	function selectFile(event: React.ChangeEvent<HTMLInputElement>) {
		if (event.target.files && event.target.files.length > 0) {
			setSelectedFile([...selectedFile, event.target.files[0].name]);
		}
	}

	return (
		<div className="grid w-full max-w-sm items-center gap-3">
			{selectedFile.map((name) => (
				<p id={name}>{name}</p>
			))}
			<Input onChange={selectFile} id="file" type="file" multiple />
		</div>
	)
}

export default InputFile;