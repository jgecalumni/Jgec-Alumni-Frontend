"use client";

import Image from "next/image";
import React from "react";
import { Download, Eye } from "lucide-react";
import Link from "next/link";
import { useGetAllGivingBackDocsQuery } from "@/store/feature/document-feature";
import Loading from "@/app/Loader";

const Giving_Back = () => {
	const {
		data: docsData,
		isLoading: docsLoading,
		isError: docsisError,
		error: docsError,
		refetch,
	} = useGetAllGivingBackDocsQuery({});
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
		<>
			<div className="lg:mt-[8em] w-full   mt-[6em] h-[60vh] overflow-hidden  ">
				<div className="h-full  rotate-0 w-full">
					<div className="text-white h-full z-20 w-full top-0 flex flex-col items-center justify-center gap-3  absolute ">
						<div className="lg:text-5xl text-4xl text-blue-400 font-medium">
							Giving<span className="text-white"> Back</span>
						</div>
						<div className="lg:text-xl text-xs px-4 lg:w-1/2 text-center">
							What can you donate to your alma mater?
						</div>
					</div>
					<Image
						loading="lazy"
						layout="fill"
						objectFit="cover"
						src="/assets/membership.jpg"
						alt=""
						className=" brightness-[30%]"
					/>
				</div>
			</div>
			<div className="my-8 flex flex-col-reverse items-center p-3 px-8 justify-evenly">
				{docsData?.response.length > 0 ? (
					<div className=" bg-slate-100 mb-8 rounded overflow-y-auto w-full  h-[50vh]">
						<div className="font-medium rounded bg-slate-200 p-2">
							Documents
						</div>
						<div className="p-4 grid lg:grid-cols-3  lg:gap-3 grid-cols-2 gap-3 ">
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
												<Eye size={19} />
											</Link>
											<Download
												size={19}
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
				<div className="pb-14">
					<div className="lg:p-6 p-2 w-full flex flex-col">
						<h2 className="lg:text-2xl md:text-3xl text-2xl text-primary  font-semibold">
							JALPAIGURI GOVERNMENT ENGINEERING COLLEGE ALUMNI BUILD
							MULTIPURPOSE "KANCHENJUNGA": A HUB FOR LEARNING, COLLABORATION,
							AND COMMUNITY
						</h2>
						{/* <div className="border-primary w-20 md:w-48 mt-2 border-[2.5px] rounded-full"></div> */}
					</div>
					<div className="flex px-6 flex-col justify-center items-center gap-6">
						<div>
							<span className="font-medium">Jalpaiguri, West Bengal:</span> In a
							testament to alumni spirit, the Jalpaiguri Government Engineering
							College (JGEC) Alumni Association has constructed a unique
							facility named "Kanchenjunga" on campus. This three-story building
							serves a dual purpose: a convention center fostering
							industry-academia interaction and a guest house offering
							affordable accommodation.
						</div>
						<div>
							<span className="font-medium">
								A Dream Realized by Dedicated Alumni:
							</span>{" "}
							The project is the brainchild of a passionate group of former
							students. Notably, the land for the project was a private plot
							within the campus, purchased by the Alumni Association with the
							generous financial support of another alumnus, Mr. Premangshu
							Ghosh'79'.
						</div>{" "}
						<div>
							<span className="font-medium">Beyond Bricks and Mortar:</span> A
							Platform for Growth: Kanchenjunga transcends its physical
							structure. The Alumni Association envisioned it as a platform for
							enriching the lives of students and the community. The center will
							host diverse extracurricular activities and soft skill development
							programs for engineering students. A few students interaction
							sessions had been organised. However, more facility enhancement is
							under plan to continue full fledged students development program.
							Alumni Association invites more ideas and volunteers as flag
							bearer of the program. Additionally, Jyoti, an educational center
							for underprivileged children run by the JGEC students, is already
							utilizing Kanchenjunga for cultural events.
						</div>
						<div>
							<span className="font-medium">Giving Back During Hardship:</span>{" "}
							The commitment of the alumni association extends beyond academics.
							During the COVID-19 pandemic, Kanchenjunga served as a base for
							supporting 55 underprivileged families around the college campus
							for two years. Essential commodities and winter clothes were
							distributed, demonstrating the alumni's strong social
							responsibility.
						</div>
						<div>
							<span className="font-medium">Sustainability Takes Root:</span>{" "}
							Kanchenjunga fosters a spirit of environmental consciousness. Led
							by ex-students, the Alumni Association had initiated a
							research-based composting program at the premises, utilizing food
							waste from hostels and local food stalls. This program actively
							engages students, academicians, and local residents, promoting
							sustainable practices. The program is already published in a
							reputed Bengali Newspaper.
						</div>
						<div>
							<span className="font-medium">
								Affordable Comfort for Visitors:
							</span>{" "}
							Seven well-appointed guest rooms with air conditioning are already
							operational at Kanchenjunga. These rooms provide a comfortable and
							affordable stay for visitors to the college campus, including
							guardians of current students. The price of around Rs. 1,000 per
							night is significantly lower than market rates, with additional
							price waivers available for students from economically
							disadvantaged backgrounds. This facility is particularly
							beneficial for guardians of new students during intake events and
							for industry professionals visiting for campus recruitment drives.
							For enhanced security, CCTV camera surveillance is planned for the
							building.
						</div>
						<div>
							<span className="font-medium">A Vision for the Future:</span> A
							State-of-the-Art Conference Hub: The Alumni Association has
							ambitious plans for Kanchenjunga, according to Project Manager
							Rajib Bhattacharya. They aim to raise donations from ex-students
							to create a modern conference hall within the facility. This hall
							can be booked by local businesses and industries for workshops,
							seminars, and other events, fostering stronger industry-academia
							collaboration.
						</div>
						<div>
							<span className="font-medium">Kanchenjunga:</span> A Beacon of
							Opportunity: The Kanchenjunga project is more than just a
							building; it represents the dedication and vision of the JGEC
							alumni. Professor Subhas Barman sees Kanchenjunga's potential to
							become a crucial hub for industry-academia collaboration in North
							Bengal, while promoting social development and sustainable
							practices. Principal Amitava Ray of Jalpaiguri Government
							Engineering College believes this initiative sets a remarkable
							example of how alumni can contribute significantly to their alma
							mater and the surrounding community.{" "}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Giving_Back;
