import PageTitle from "@/components/shared/page-title";
import ApplicationFilterButton from "./application-filter-button";
import Pagination from "@/components/pagination";
import ApplicationList from "./application-list";

export default function MyApplicationsPage() {
	return (
		<div>
			<PageTitle
				title="My applications"
				description="The list of positions that you have applied to"
			/>
			<div className="mt-8">
				<div className="flex justify-end">
					<ApplicationFilterButton />
				</div>
				<div className="mt-4">
					<ApplicationList />
				</div>
				<Pagination />
			</div>
		</div>
	);
}
