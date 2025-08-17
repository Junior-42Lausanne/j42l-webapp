import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const InputWithLabel = () => {
	return (
		<div className="grid w-full max-w-sm items-center gap-3">
			<Label htmlFor="email">Email</Label>
			<Input type="email" id="email" placeholder="Email" />
		</div>
	)
}


export default InputWithLabel;