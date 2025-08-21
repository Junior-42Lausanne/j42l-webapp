import { Input } from "@/components/ui/input";
import PageTitle from "@/components/page-title";

const EditProfile = () => {
	return (
		<>
			<PageTitle title='Edit profile'/>
			<div>
				<Input label="LinkedIn" type="url" placeholder="LinkedIn"/>
				<Input label="Github" type="url" placeholder="GitHub"/>
				<Input label="CV" type="file" multiple/>
			</div>
		</>
	);
};
export default EditProfile;