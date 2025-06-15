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

	const filterData =
		data?.scholarships.filter((item) => item.isActive === true) || [];

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
				<div className="w-full bg-white shadow-xl p-6 rounded-md flex pb-4 flex-col gap-3 text-sm lg:text-lg lg:w-[80%] text-justify">
					<div className="flex items-center gap-1">
						<div className="h-8 border-2 border-primary"></div>

						<h2 className="md:text-3xl text-2xl font-medium text-black">Details</h2>
					</div>
					<p className="pl-2 text-[14px] md:text-[16px]">
						It is the vision of the Jalpaiguri Government Engineering College
						Alumni Association to project JGEC as a successful and a leading
						institution of learning and research. One of the main aspects
						towards fulfilling this goal would be to engage the successful
						professional alumnus of our alma matter in order to nurture the
						young minds of JGEC with positive and inspiring tools for their
						enlightenment to outer world outside campus and thus to highlight
						glory of JGEC to outsiders.
					</p>
					<p className="pl-2 text-[14px] md:text-[16px]">
						To promote this noble initiative of Alumni Association among
						JGECian, Mr. Bibhas Bhowmik (CE, 1985) and Mr. Premangshu Ghosh (EE,
						1979) have started the scholarship programme in the year 2013 for
						4th year Civil Engineering and Electrical Engineering students
						respectively. Purpose of the alumni scholarship programme is to help
						meritorious students who need some financial assistance to achieve
						their career goal.
					</p>
					<p className=" pl-2 font-medium text-[14px] md:text-[16px]">
						NB: One student can apply upto 3 scholarships.
					</p>
					<div className="pl-2 ">
						<h1 className="text-black text-[18px]  font-semibold">
							Selection Procedure
						</h1>
						<p className="md:text-sm mt-1 ">
							After students submit their scholarship applications, the
							following selection procedure is followed:
						</p>
						<ul className="md:text-[15px] text-[14px] space-y-3 mt-2 list-decimal pl-4">
							<li className="">
								<p className="">
									<span className="font-medium">
										Initial Shortlisting (1:10 Ratio):{" "}
									</span>
									The scholarship sponsor will review all applications and
									shortlist candidates based on a 1:10 ratio. This means for
									every 1 available scholarship, 10 students will be initially
									shortlisted.
								</p>
							</li>
							<li className="">
								<p className="">
									<span className="font-medium">
										Interview on Scholarship Day:
									</span>
									The shortlisted candidates will be invited for an interview on
									Scholarship Day. This interview will help assess the
									candidates' qualifications, need, and suitability for the
									scholarship.
								</p>
							</li>
							<li className="">
								<p className="">
									<span className="font-medium">
										Final Selection (1:3 Ratio) :{" "}
									</span>
									Based on interview performance and merit, students will be
									selected in a 1:3 ratio for final consideration. This ensures
									that for every 1 scholarship, 3 students are chosen from which
									the final recipient is selected.
								</p>
							</li>
							<li className="">
								<p className="">
									<span className="font-medium">
										Awarding the Scholarship:{" "}
									</span>
									If a student is selected for more than one scholarship, they
									will be awarded the scholarship with the highest monetary
									value.
								</p>
							</li>
						</ul>
					</div>
				</div>

				<div className="w-full lg:w-[80%]">
					<div className="bg-[#7ec9ee] h-full">
						<div className="bg-[#3fa3d5] text-lg md:text-xl text-neutral-950 p-2.5 font-medium">
							Scholarship Programs
						</div>
						<div className="w-full  ">
							<div className="grid grid-cols-1 md:grid-cols-2  h-full">
								{filterData
									.reduce<[JSX.Element[], JSX.Element[]]>(
										(acc: any, item: any, index: any) => {
											const column = index % 2;
											acc[column].push(
												<li
													key={item.id}
													className="px-4 py-2.5 border-b border-neutral-200 text-neutral-950">
													<Link
														href={`/scholarships/${item.id}`}
														className="flex flex-col gap-1">
														<h4 className="text-sm line-clamp-1 font-medium">
															{item.name}
														</h4>
														<p className="text-[12px] font-medium line-clamp-1">
															Sponsored by {item.providerName}
														</p>
														<p className="text-xs line-clamp-1">
															{item.subtitle}
														</p>
													</Link>
												</li>
											);
											return acc;
										},
										[[], []]
									)
									.map((column: any, idx: any) => (
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
					<div className=" bg-slate-100 mb-8 relative rounded mt-4 overflow-y-auto lg:w-[80%] h-full">
						<div className="font-medium sticky z-10 top-0 rounded bg-slate-200 p-2">
							Scholarship Recipient List
						</div>
						<div className="p-3 grid lg:grid-cols-5 lg:gap-3 grid-cols-2 gap-3 ">
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
