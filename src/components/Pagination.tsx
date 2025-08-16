import { ChevronFirst, ChevronLeft, ChevronRight, ChevronLast } from 'lucide-react';
import Link from 'next/link';

const Pagination = () => {
	return (
		<div className='mb-10 flex justify-between'>
			<Link href='#'>
				<ChevronFirst />
			</Link>
			<Link href='#'>
				<ChevronLeft />
			</Link>
			<p className='font-bold'>Page 5 / 10</p>
			<Link href='#'>
				<ChevronRight />
			</Link>
			<Link href='#'>
				<ChevronLast />
			</Link>
		</div>
	);
};

export default Pagination;
