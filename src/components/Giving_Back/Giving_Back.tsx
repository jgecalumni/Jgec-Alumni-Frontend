import Image from "next/image";
import React from "react";
import SectionHeader from "../section-header";

const Giving_Back = () => {
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
			<div className="pb-14">
				<div className="lg:p-14 p-6 w-full flex flex-col">
					<h2 className="lg:text-4xl md:text-3xl text-2xl text-primary  font-semibold">
						How can you give back?
					</h2>
					<div className="border-primary w-20 md:w-48 mt-2 border-[2.5px] rounded-full"></div>
				</div>
				<div className="bg-[#f8f9f9] rounded-lg h-[70vh] md:h-[80vh] lg:h-[60vh]  flex flex-col-reverse lg:flex-row lg:justify-center items-end lg:items-center   mt-4">
					<div className="p-8 lg:p-14">
						<h2 className="lg:text-5xl md:text-4xl text-2xl lg:mb-6 mb-4 font-semibold">Donation</h2>
						<p className="md:w-[80%] lg:text-lg md:text-lg text-sm">
							Donations to the Alumni Association help us support and strengthen
							our alumni network, career services, mentorship program, and other
							initiatives that benefit both our alumni and our university.
						</p>
					</div>
					<div className="  w-[75%] relative h-full p-4  bg-[#516bb7]">
						<div className=" absolute rotate-0 bg-white  lg:top-[2.8rem] border-black w-full  -left-[4rem] h-full">
							<Image
								loading="lazy"
								layout="fill"
								objectFit="cover"
								src="/assets/membership.jpg"
								alt=""
								className="p-4"
							/>
						</div>
					</div>
				</div>
				<div className="bg-[#fff] rounded-lg h-[75vh] md:h-[84vh] lg:h-[60vh]  flex lg:flex-row flex-col lg:justify-center lg:items-center gap-8   mb-4">
					<div className="  w-[75%] relative h-full p-4  bg-[#516bb7]">
						<div className=" absolute rotate-0 bg-white  lg:top-[2.8rem] border-black w-full  -right-[4rem] h-full">
							<Image
								loading="lazy"
								layout="fill"
								objectFit="cover"
								src="/assets/membership.jpg"
								alt=""
								className="p-4"
							/>
						</div>
					</div>
					<div className="lg:p-14 p-8 ">
						<h2 className="lg:text-5xl md:text-4xl text-2xl mb-4 lg:mb-6 font-semibold">
							Internship/Job opportunity
						</h2>
						<p className="md:w-[90%] text-sm md:text-lg lg:text-lg">
							JGEC Alumni Association provides internship opportunities for our
							students with alumni-owned or alumni-managed companies, offering
							valuable hands-on experience and networking opportunities to help
							jump-start their careers.
						</p>
					</div>
				</div>
				<div className="bg-[#f8f9f9] rounded-lg h-[70vh] md:h-[80vh] lg:h-[60vh]  flex flex-col-reverse lg:flex-row lg:justify-center items-end lg:items-center   mt-4">
					<div className="p-8 lg:p-14">
						<h2 className="lg:text-5xl text-2xl lg:mb-6 mb-4 font-semibold">
							Mentorship Programme
						</h2>
						<p className="md:w-[80%] text-sm md:text-lg lg:text-lg">
							The alumni mentoring program at Jalpaiguri Government Engineering College is an
							initiative that connects current students with experienced alumni
							who can provide guidance and support as they navigate their
							academic and professional journeys.
						</p>
					</div>
					<div className="  w-[75%] relative h-full p-4  bg-[#516bb7]">
						<div className=" absolute rotate-0 bg-white  lg:top-[2.8rem] border-black w-full  -left-[4rem] h-full">
							<Image
								loading="lazy"
								layout="fill"
								objectFit="cover"
								src="/assets/membership.jpg"
								alt=""
								className="p-4"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Giving_Back;
