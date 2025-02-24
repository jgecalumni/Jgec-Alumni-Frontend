"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SectionHeader from "../section-header";
import { useAllScholarshipsQuery } from "@/store/feature/scholarship-feature";
import Loading from "@/app/Loader";
import toast from "react-hot-toast";

const Scholarship = () => {
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);

	const { data, error, isError, isLoading } = useAllScholarshipsQuery({
		page: page,
		search: "",
	});
	useEffect(() => {
		if (isError) {
			toast.error((error as any)?.data?.message || "Failed to fetch scholarships");
		}
		if (data) {
			setTotalPages(data?.totalPages);
		}
	}, [data, isError, error]); // Runs whenever `data` updates

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<SectionHeader
				highlightTitle="Scholarships"
				normalTitle="Programs"
				description="We are committed to helping students achieve their academic goals by providing them with the necessary resources and scholarships."
			/>

			{/* Scholarship Details */}
			<div className="h-screen flex items-center px-3 justify-center">
				<div className="w-full lg:w-[30%]">
					<div className=" bg-[#7ec9ee]  h-[70vh]">
						<div className="bg-[#3fa3d5] text-lg md:text-xl text-neutral-950 p-2.5 font-medium">
							Scholarship Programs
						</div>
						<div className="w-full overflow-hidden h-[calc(70vh-4rem)]">
							<ul className="bottom-top overflow-auto">
								{data?.scholarships.map((item, index) => (
									<li
										key={index}
										className="px-4 py-2.5 border-b border-neutral-200 text-neutral-950">
										<Link
											href={`/scholarships/${item.id}`}
											className="flex flex-col gap-2">
											<h4 className="text-sm font-medium">{item.name}</h4>
											<p className="text-xs">{item.subtitle}</p>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Scholarship;
