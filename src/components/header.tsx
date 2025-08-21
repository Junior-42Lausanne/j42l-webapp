import { signOut } from '@/features/auth/actions/actions';
import Link from 'next/link';

const Header = () => {
	return (
		<div className="flex border-b border-solid border-black pb-5 pt-5">
			<Link className="m-auto" href="/projects">
				Job board
			</Link>
			<Link className="m-auto" href="#">
				My applications
			</Link>
			<Link className="m-auto" href="/profile/edit">
				Profile
			</Link>
			<form action={signOut} className="m-auto">
				<button className="cursor-pointer w-full h-full">
					Sign out
				</button>
			</form>
		</div>
	);
};

export default Header;
