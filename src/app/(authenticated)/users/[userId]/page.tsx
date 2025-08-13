import PageTitle from "@/components/shared/page-title";
import UserProfile from "@/components/users/user-profile";

const UserProfilePage = () => {
	return (
		<div>
			<PageTitle title="User page" />
			<UserProfile />
		</div>
	);
};

export default UserProfilePage;
