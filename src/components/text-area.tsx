const TextArea = ({placeholder} : {placeholder: string}) => {
	return (
		<textarea
			placeholder={placeholder}
			className="min-h-40 w-full">
		</textarea>
	)
}

export default TextArea;