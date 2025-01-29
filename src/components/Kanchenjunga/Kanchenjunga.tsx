import React from "react";
import SectionHeader from "../section-header";
import Image from "next/image";

const Kanchenjunga = () => {
	return (
		<div className="bg-[#fff]">
			<SectionHeader
				highlightTitle="Kanchen"
				normalTitle="junga"
				description="A private land inside the college campus purchased by Alumni Association"
			/>
			<div className="lg:p-8 border  lg:px-[12rem]">
				<div className="border flex flex-col space-y-7 lg:space-y-14 border-gray-300 bg-white rounded-md p-4">
					<div>
						<div className="flex flex-col">
							<h2 className="lg:text-3xl md:text-3xl text-2xl text-primary  font-semibold">
								Kanchenjunga
							</h2>
							<div className="border-primary w-20 md:w-40 mt-2 border-[2px] rounded-full"></div>
						</div>
						<div className="mt-6 lg:text-xl text-[16px]">
							<div className="text-black">
								The mystical Himalaya for thousand of years remain the center of
								knowledge for seers and scientists. Kanchenjunga is one such
								center of knowledge of Himalaya. The mission is to bring
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
							<div className="lg:w-1/2 flex flex-col gap-4  lg:text-xl text-[16px]">
								<div>
									Kanchenjunga, a Knowledge & Development center shall offer
									Management & Technical Development programs, Seminars,
									Workshops for business houses both public & private
									enterprises & to other non – profit organizations
								</div>
								<div>
									The Industry Achievers shall be invited to address & interact
									with our students , as well.
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
							<div className="lg:w-1/2 flex flex-col gap-4 pr-4 text-[16px] lg:text-xl">
								<div>
									Kanchenjunga shall provide challenges to the loyal exstudents
									of JGEC to deliver lectures on their specialized subject on
									regular basis to the students of their Alma Mater
								</div>
								<div>
									During the lean days of the year when no program, seminar,
									workshops are scheduled, specified rooms of Kanchenjunga shall
									be offered as Transit house to the ex-students during their
									holidays.
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
						<div className="mt-4 pl-6 lg:text-[18px] text-[16px]">
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
		</div>
	);
};

export default Kanchenjunga;
