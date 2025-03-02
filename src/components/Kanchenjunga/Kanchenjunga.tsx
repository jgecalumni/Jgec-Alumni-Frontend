"use client";
import React from "react";
import SectionHeader from "../section-header";
import Image from "next/image";
import Link from "next/link";
import { Download, Eye } from "lucide-react";
import { useGetAllKanchenungaDocsQuery } from "@/store/feature/document-feature";
import Loading from "@/app/Loader";

const Kanchenjunga = () => {
	const {
		data: docsData,
		isLoading: docsLoading,
		isError: docsisError,
		error: docsError,
		refetch,
	} = useGetAllKanchenungaDocsQuery({});
	if (docsLoading) {
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
		<div className="bg-[#fff]">
			<SectionHeader
				highlightTitle="Kanchen"
				normalTitle="junga"
				description="A private land inside the college campus purchased by Alumni Association"
			/>
			<div className="flex justify-between lg:mx-10 flex-col lg:items-start">
				<div className="lg:p-8 border ">
					<div className="border flex flex-col space-y-7 lg:space-y-14 border-gray-300 bg-white rounded-md p-4">
					<div className=" p-2 w-full flex flex-col">
						<h2 className="lg:text-2xl md:text-3xl text-lg text-primary  font-semibold">
							JALPAIGURI GOVERNMENT ENGINEERING COLLEGE ALUMNI BUILD
							MULTIPURPOSE "KANCHENJUNGA": A HUB FOR LEARNING, COLLABORATION,
							AND COMMUNITY
						</h2>
						{/* <div className="border-primary w-20 md:w-48 mt-2 border-[2.5px] rounded-full"></div> */}
					</div>
						<div>
							<div className="flex flex-col">
								<h2 className="lg:text-2xl md:text-3xl text-2xl text-primary  font-semibold">
									Kanchenjunga
								</h2>
								<div className="border-primary w-20 md:w-40 mt-2 border-[2px] rounded-full"></div>
							</div>
							<div className="mt-6 text-justify lg:text-lg text-[16px]">
								<div className="text-black">
									The mystical Himalaya for thousand of years remain the center
									of knowledge for seers and scientists. Kanchenjunga is one
									such center of knowledge of Himalaya. The mission is to bring
									Kanchenjunga inside JGEC campus.
								</div>
							</div>
						</div>
						<div className="flex mt-8 flex-col">
							<h2 className="lg:text-3xl md:text-3xl text-2xl text-primary  font-semibold">
								Floor Plans
							</h2>
							<div className="border-primary w-16 md:w-24 mt-2 border-[2px] rounded-full"></div>
							<div className="mt-8 flex items-center justify-between lg:flex-row flex-col gap-4">
								<Image
									src="/assets/Kanchenjunga-floor-plan-1.png"
									alt=""
									height={500}
									width={500}
								/>
								<Image
									src="/assets/Kanchenjunga-floor-plan-2.png"
									alt=""
									height={500}
									width={500}
								/>
							</div>
						</div>
						<div className="flex mt-8 flex-col">
							<h2 className="lg:text-3xl md:text-3xl text-2xl text-primary  font-semibold">
								Purpose of Kanchenjunga
							</h2>
							<div className="border-primary w-48 md:w-48 mt-2 border-[2px] rounded-full"></div>
							<div className="mt-4 bg-white rounded-md flex items-center flex-col-reverse lg:flex-row justify-between gap-4">
								<div className="lg:w-1/2 flex text-justify flex-col gap-4  lg:text-lg text-[16px]">
									<div>
										Kanchenjunga, a Knowledge & Development center shall offer
										Management & Technical Development programs, Seminars,
										Workshops for business houses both public & private
										enterprises & to other non – profit organizations
									</div>
									<div>
										The Industry Achievers shall be invited to address &
										interact with our students , as well.
									</div>
								</div>

								<Image
									src="/assets/kanchenjunga-pic-2.png"
									alt=""
									height={500}
									width={500}
									className="rounded-md"
								/>
							</div>
							<div className="mt-6 bg-white rounded-md flex items-center lg:flex-row flex-col justify-between gap-4">
								<Image
									src="/assets/kanchenjunga-pic-1.png"
									alt=""
									height={500}
									width={500}
									className="rounded-md"
								/>
								<div className="lg:w-1/2 text-justify flex flex-col gap-4 pr-4 text-[16px] lg:text-lg">
									<div>
										Kanchenjunga shall provide challenges to the loyal
										exstudents of JGEC to deliver lectures on their specialized
										subject on regular basis to the students of their Alma Mater
									</div>
									<div>
										During the lean days of the year when no program, seminar,
										workshops are scheduled, specified rooms of Kanchenjunga
										shall be offered as Transit house to the ex-students during
										their holidays.
									</div>
								</div>
							</div>
						</div>
						<div className="flex mt-8 flex-col">
							<h2 className="lg:text-3xl md:text-3xl text-2xl text-primary  font-semibold">
								Promoters of Kanchenjunga
							</h2>
							<div className="border-primary w-48 md:w-48 mt-2 border-[2px] rounded-full"></div>
							<div className="mt-4 flex items-center lg:flex-row flex-col justify-between gap-4">
								<Image
									src="/assets/kanchenjunga-pic-3.png"
									alt=""
									height={400}
									width={400}
								/>
								<div className="text-center lg:text-xl text-lg font-medium">
									ENGINEERING GRADUATES OF JGEC FROM 1966 – 2015
								</div>
								<Image
									src="/assets/kanchenjunga-pic-4.png"
									alt=""
									height={400}
									width={400}
								/>
							</div>
						</div>
						<div className="flex mt-8 pb-4 flex-col">
							<h2 className="lg:text-3xl md:text-3xl text-2xl text-primary  font-semibold">
								Building Features
							</h2>
							<div className="border-primary w-48 md:w-48 mt-2 border-[2px] rounded-full"></div>
							<div className="mt-4 text-justify pl-6 lg:text-[16px] text-[16px]">
								<ul className=" list-disc space-y-2">
									<li>One 1044 sq. ft. conference/ seminar hall.</li>
									<li>
										One 1044 sq. ft. development centre where each desk can be a
										work station as well.
									</li>
									<li>
										Around 300 sq. ft. discussion room for small meetings and
										discussions.
									</li>
									<li>Five/ six guest rooms for accommodation.</li>
									<li>One library & reading room.</li>
									<li>Two office room, etc in G+2 building.</li>
								</ul>
							</div>
						</div>
					</div>
					
				</div>
				<div className="my-8  p-3 ">
					{docsData?.response.length > 0 ? (
						<div className=" bg-slate-100 mb-8 rounded overflow-y-auto h-[60vh] ">
							<div className="font-medium rounded bg-slate-200 p-2">
								Kanchenjunga Documents
							</div>
							<div className="p-4 grid lg:grid-cols-6  lg:gap-3 grid-cols-2 gap-3 ">
								{docsData?.response.map((item: any) => (
									<div
										key={item.title}
										className="group rounded border shadow-lg flex flex-col items-center bg-[#f2f2f2]  h-[20vh]  lg:w-[30vh] lg:h-[20vh] relative overflow-hidden">
										<div className="mt-7 lg:mt-8">
											<Image
												src="/assets/pdf.png"
												width={40}
												height={40}
												alt=""
											/>
										</div>

										<div className="bg-white absolute bottom-0 w-full p-2 group-hover:p-3 group-hover:h-full transition-all duration-300 h-[26%]">
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
													<Eye size={19} cursor={"pointer"}/>
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
			</div>
		</div>
	);
};

export default Kanchenjunga;
