"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SectionHeader from "../section-header";
import { useAllScholarshipsQuery } from "@/store/feature/scholarship-feature";
import Loading from "@/app/Loader";
import toast from "react-hot-toast";
import { useGetAllScholDocsQuery } from "@/store/feature/document-feature";
import Image from "next/image";
import { Download, Eye } from "lucide-react";

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

	if (isLoading && docsLoading) {
		return <Loading />;
	}

	const handleDownload = async (url: string, filename: string) => {
		try {
			const response = await fetch(url);
			const blob = await response.blob();
			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);
			link.download = filename || "download.pdf"; // Default filename
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Download failed:", error);
		}
	};

	return (
		<>
			<SectionHeader
				highlightTitle="Scholarships"
				normalTitle="Programs"
				description="We are committed to helping students achieve their academic goals by providing them with the necessary resources and scholarships."
			/>

			{/* Scholarship Details */}
			<div className="my-8 lg:flex gap-8 flex-col items-center p-3 justify-evenly">
				<div className="w-full flex flex-col gap-3 lg:w-3/4 text-justify">
					<p>
						It is the vision of the Jalpaiguri Government Engineering College
						Alumni Association to project JGEC as a successful and a leading
						institution of learning and research. One of the main aspects
						towards fulfilling this goal would be to engage the successful
						professional alumnus of our alma matter in order to nurture the
						young minds of JGEC with positive and inspiring tools for their
						enlightenment to outer world outside campus and thus to highlight
						glory of JGEC to outsiders.
					</p>
					<p>
						To promote this noble initiative of Alumni Association among
						JGECian, Mr. BIbhas Bhowmik (CE, 1985) and Mr. Premangshu Ghosh (EE, 1979) have started the scholarship programme in the year 2013 for 4th year Civil Engineering and Electrical Engineering students respectively. Purpose of the alumni scholarship
						programme is to help meritorious students who need some financial
						assistance to achieve their career goal.
					</p>
				</div>

				<div className="w-full lg:w-3/4">
					<div className="bg-[#7ec9ee] h-full">
						<div className="bg-[#3fa3d5] text-lg md:text-xl text-neutral-950 p-2.5 font-medium">
							Scholarship Programs
						</div>
						<div className="w-full  ">
							<div className="grid grid-cols-1 md:grid-cols-2  h-full">
								{data?.scholarships
									.reduce<[JSX.Element[], JSX.Element[]]>(
										(acc, item, index) => {
											const column = index % 2;
											acc[column].push(
												<li
													key={item.id}
													className="px-4 py-2.5 border-b border-neutral-200 text-neutral-950">
													<Link
														href={`/scholarships/${item.id}`}
														className="flex flex-col gap-2">
														<h4 className="text-sm font-medium">{item.name}</h4>
														<p className="text-xs">{item.subtitle}</p>
													</Link>
												</li>
											);
											return acc;
										},
										[[], []]
									)
									.map((column, idx) => (
										<ul
											key={idx}
											className="overflow-auto">
											{column}
										</ul>
									))}
							</div>
						</div>
					</div>
				</div>
				{docsData?.response.length > 0 ? (
					<div className=" bg-slate-100 mb-8 rounded overflow-y-auto w-3/4  h-[70vh]">
						<div className="font-medium rounded bg-slate-200 p-2">
							Scholarship Recipient List
						</div>
						<div className="p-4 grid lg:grid-cols-5 lg:gap-3 grid-cols-2 gap-3 ">
							{docsData?.response.map((item: any) => (
								<div
									key={item.title}
									className="group rounded border shadow-lg flex flex-col items-center bg-[#f2f2f2]  h-[20vh]  lg:w-[30vh] lg:h-[20vh] relative overflow-hidden">
									<div className="mt-8 lg:mt-8">
										<Image
											src="/assets/pdf.png"
											width={40}
											height={40}
											alt=""
										/>
									</div>

									<div className="bg-white absolute bottom-0 w-full p-2 group-hover:p-3 group-hover:h-full transition-all duration-300 h-1/4">
										<div className="flex gap-1 group-hover:items-start items-center line-clamp-1 text-xs">
											<Image
												src="/assets/pdf.png"
												width={20}
												height={20}
												alt=""
											/>
											<div className=" line-clamp-1 group-hover:line-clamp-2">
												{item.title}
											</div>
										</div>
										<div className="mt-5 flex gap-6 justify-center items-center p-4">
											<Link
												href={item.link}
												target="_blank">
												<Eye
													size={19}
													cursor={"pointer"}
												/>
											</Link>
											<Download
												size={19}
												cursor={"pointer"}
												onClick={() =>
													handleDownload(item.link, `${item.title}.pdf`)
												}
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default Scholarship;
