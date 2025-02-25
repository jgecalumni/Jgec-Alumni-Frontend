"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SectionHeader from "../section-header";
import { useAllScholarshipsQuery } from "@/store/feature/scholarship-feature";
import Loading from "@/app/Loader";
import toast from "react-hot-toast";
import { useGetAllScholDocsQuery } from "@/store/feature/document-feature";
import Image from "next/image";
import { Eye } from "lucide-react";

const Scholarship = () => {
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);
	const {
		data: docsData,
		isLoading: docsLoading,
		isError: docsisError,
		error: docsError,
		refetch,
	} = useGetAllScholDocsQuery({});
	console.log(docsData?.response);

	const { data, error, isError, isLoading } = useAllScholarshipsQuery({
		page: page,
		search: "",
	});
	useEffect(() => {
		if (isError) {
			toast.error(
				(error as any)?.data?.message || "Failed to fetch scholarships"
			);
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
			<div className="h-screen flex items-center px-3 justify-evenly">
				{docsData?.response.length > 0 ? (
					<div className=" bg-slate-100 rounded overflow-y-auto w-1/2 h-[70vh]">
						<div className="font-medium rounded bg-slate-200 p-2">
							Documents
						</div>
						<div className="p-4 flex flex-wrap justify-center gap-3 ">
							{docsData?.response.map((item:any) => (
								<div
									key={item.title}
									className="group rounded border shadow-lg flex flex-col items-center bg-[#f2f2f2]  w-[30vh] h-[20vh] relative overflow-hidden">
									<div className="mt-8">
										<Image
											src="/assets/pdf.png"
											width={40}
											height={40}
											alt=""
										/>
									</div>

									<div className="bg-white absolute bottom-0 w-full p-2 group-hover:p-3 group-hover:h-full transition-all duration-300 h-1/4">
										<div className="flex gap-1 items-start line-clamp-1">
											<Image
												src="/assets/pdf.png"
												width={20}
												height={20}
												alt=""
											/>
											<div className="text-sm line-clamp-1 group-hover:line-clamp-2">{item.title}</div>
										</div>
										<div className="mt-4 flex gap-6 justify-center items-center p-4">
											<Link
												href={item.link}
												target="_blank">
												<Eye size={18} />
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<></>
				)}

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
