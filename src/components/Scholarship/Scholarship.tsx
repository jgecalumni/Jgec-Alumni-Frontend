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
				(error as any)?.data?.message || "Failed to fetch scholarships",
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
				<div className="w-full bg-white shadow-xl p-6 rounded-md flex pb-4 flex-col gap-3 text-sm lg:text-[16px] lg:w-[80%] text-justify">
					<div className="flex items-center gap-1">
						<div className="h-8 border-2 border-primary"></div>

						<h2 className="md:text-3xl text-2xl font-medium text-black">
							JGECAA Annual Scholarship for Scholastic Excellence
						</h2>
					</div>
					<p className="text-gray-700 my-4 leading-relaxed">
						The{" "}
						<span className="font-semibold">
							Jalpaiguri Government Engineering College Alumni Association
							(JGECAA)
						</span>
						began the Annual Scholarship for Scholastic Excellence in the year
						2013, spearheaded by two alumni—
						<span className="font-medium">
							{" "}
							Mr. Bibhas Bhowmik (CE, 1985)
						</span>{" "}
						and
						<span className="font-medium">
							{" "}
							Mr. Premangshu Ghosh (EE, 1979)
						</span>
						—under their unwavering vision and guidance.
					</p>

					<p className="text-gray-700 mb-4 leading-relaxed">
						JGECAA initiated this academic aid program to support students of
						high calibre as well as those facing financial constraints but
						possessing strong potential to achieve their professional goals.
					</p>

					<p className="text-gray-700 mb-4 leading-relaxed">
						What began in 2013 with two sponsors supporting two students from
						each discipline with an amount of
						<span className="font-semibold">
							{" "}
							(₹ 2 × 20,000) × 2 = ₹ 80,000 per annum
						</span>
						, has now grown into a full-fledged scholarship program with over{" "}
						<span className="font-semibold">32 sponsors</span> from India and
						abroad.
					</p>

					<p className="text-gray-700 mb-6 leading-relaxed">
						These scholarships are in addition to the schemes provided by the
						West Bengal Government that have existed for many years.
					</p>

					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						Objectives of the Program
					</h2>

					<p className="text-gray-700 mb-6 leading-relaxed">
						The Alumni Association works tirelessly to ensure that alumni from
						all parts of India and the world come together for the upliftment
						and expansion of the current student community.
					</p>

					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						Sponsorship Guidelines
					</h2>

					<ul className="list-disc pl-6 space-y-4 text-gray-700 leading-relaxed">
						<li>
							Selection criteria (merit-based, need-based, etc.) are open to the
							sponsor’s choice and may be applied to any number of students from
							1st to 4th year. Support may also be extended to postgraduate
							aspirants if desired.
						</li>

						<li>
							Selection is primarily based on a direct face-to-face interview
							conducted by the sponsor or designated senior members. Online
							selection is also encouraged and is generally conducted during the
							Alumni Association AGM in the first week of August.
						</li>

						<li>
							The stipend amount is fully flexible and determined by the
							sponsor. There is no upper limit.
						</li>

						<li>
							Funds are collected annually and then disbursed directly to the
							selected students’ designated bank accounts.
						</li>

						<li>
							Sponsors are encouraged to continue the scholarship for a long
							duration (preferably more than 3–5 years), barring any extreme
							emergencies.
						</li>
					</ul>

					<div className="mt-8 p-5 bg-blue-50 border border-blue-200 rounded-xl">
						<p className="text-gray-700 leading-relaxed">
							JGECAA expects greater participation in such multidimensional and
							benevolent initiatives for the entire JGEC fraternity, both within
							the campus and beyond. With active participation from alumni
							across the globe, we aim to support an even larger cross-section
							of students in the coming years.
						</p>
					</div>
				</div>

				<div className="w-full lg:w-[80%]">
					<div className="bg-[#7ec9ee] h-full">
						<div className="bg-[#3fa3d5] text-lg md:text-xl text-neutral-950 p-2.5 font-medium">
							Scholarship Programs
						</div>
						<div className="w-full  ">
							<div className="grid grid-cols-1 md:grid-cols-2 h-full">
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
												</li>,
											);
											return acc;
										},
										[[], []],
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
