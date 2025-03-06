"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useAllScholarshipsQuery } from "@/store/feature/scholarship-feature";
import Loading from "@/app/Loader";
const Home: React.FC = () => {
	const { data, error, isError, isLoading } = useAllScholarshipsQuery({
		page: 1,
		search: "",
	});
	if (isLoading) return <Loading />;
	return (
		<>
			<div className="w-full">
				<div className="text-neutral-950  flex justify-center  relative h-[30vh] xs:h-[50vh] md:h-[60vh] lg:h-[70vh] lg:mt-[8em] mt-[6em] ">
					<Swiper
						direction={"vertical"}
						pagination={{
							clickable: false,
						}}
						loop={true}
						// autoplay={{
						// 	delay: 5000,
						// 	disableOnInteraction: true,
						// }}
						modules={[Pagination, Autoplay]}
						className="mySwiper">
						{[0, 1, 2].map((ele) => (
							<SwiperSlide key={ele}>
								<div className="h-full relative w-full">
									<div className="absolute z-20 rotate-0 h-full  flex flex-col gap-4 lg:gap-10 justify-center max-w-xs xs:max-w-sm sm:max-w-xl  w-full left-[1em]  lg:left-[13.5em]">
										<div className="text-yellow-400 text-left font-medium lg:text-3xl sm:text-xl text-base">
											<h1 className="text-wrap break-words">
												The Jalpaiguri Government Engineering College Alumini
												Association, Jalpaiguri
											</h1>
										</div>
										{/* <div className="flex gap-8">
											<Link href="/vision-mission">
												<Button className="lg:text-base text-white lg:p-3 lg:px-5  p-2">
													Our Mission
												</Button>
											</Link>
											<Link href="/upcoming-events">
												<Button className="lg:text-base bg-white text-neutral-950 lg:p-3 lg:px-5  p-2 hover:bg-slate-100">
													Upcoming Events
												</Button>
											</Link>
										</div> */}
									</div>
									<Image
										src="https://jgecalum.org/public/site/images/slider/slider1.jpg"
										alt="slide-1"
										width={1000}
										height={300}
										className="w-full h-full object-cover"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="flex flex-col items-center justify-center p-6 md:p-14">
					<div className="bg-white shadow-xl rounded-xl p-6 md:p-10 max-w-5xl w-full flex flex-col lg:flex-row items-center gap-8">
						{/* Image Section */}
						<div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-300">
							<Image
								src="/assets/Members/BhaskarDasgupta.jpg"
								alt="President Bhaskar Dasgupta"
								width={192}
								height={192}
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Text Section */}
						<div className="text-center lg:text-left flex-1">
							<h2 className="lg:text-2xl text-lg font-semibold text-gray-800 mb-4">
								Message from the President
							</h2>
							<div className="text-justify lg:text-[16px] text-sm text-gray-700 space-y-4">
								<p className="font-medium">Dear Alumni and Friends,</p>
								<p>
									It is an honor to welcome you to the official website of the
									Jalpaiguri Government Engineering College Alumni Association.
									Our alma mater has been a pillar of excellence, shaping
									engineers who have made a mark across industries and
									continents. As proud alumni, we carry forward its legacy,
									strengthening bonds and creating opportunities for the
									generations to come.
								</p>
								<p>
									Through this platform, we aim to foster connections, celebrate
									achievements, and extend support to both our fellow alumni and
									the budding engineers of JGEC. Whether it’s professional
									networking, mentorship, or collaborative initiatives, your
									involvement makes a difference.
								</p>
								<p>
									Let us continue to uphold the values of our college and
									contribute to its growth. Together, we can inspire, innovate,
									and make a lasting impact.
								</p>
							</div>
							<div className="mt-8 space-y-1 text-sm lg:text-[16px] text-center font-medium text-gray-800">
								<p>With warm regards,</p>
								<p className="font-semibold">Bhaskar Dasgupta, 1983</p>
								<p className="text-gray-600">
									President, JGEC Alumni Association
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="w-full  h-auto px-4 md:px-10">
					<div className="w-full h-auto lg:h-80 mt-10 mb-6  sm:-mt-16 rounded-md flex max-w-4xl mx-auto  justify-center  items-center p-4 pr-0 max-sm:pt-6 md:p-8 md:pb-4 md:pr-4 z-10  bg-primary relative">
						<div className="bg-white absolute rounded-full -top-5 right-5 px-4 py-2 text-sm font-semibold shadow-md border border-neutral-200">
							Scholarship
						</div>
						<div className="w-full h-full relative ">
							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								loop={true}
								pagination={{
									clickable: false,
								}}
								// navigation={true}
								modules={[Navigation]}
								className="mySwiper">
								{data?.scholarships.map((ele: any) => (
									<SwiperSlide key={ele}>
										<div className="w-full h-full flex flex-col lg:flex-row gap-6 pb-4 pr-4 ">
											<div className="h-auto sm:h-60 w-full lg:w-1/2 lg:h-full">
												<Image
													src={ele.providerImage}
													alt={ele.providerName}
													width={150}
													height={150}
													className="w-full h-full !object-contain lg:!object-cover rounded-sm"
												/>
											</div>
											<div className="flex flex-col justify-start  gap-6  w-full text-white lg:pt-8">
												<div className="text-base md:text-lg lg:text-xl uppercase font-medium w-full text-center">
													{ele.name}
												</div>
												<div className="flex flex-col text-[14px] lg:text-[18px] md:text-base justify-center items-center text-slate-200 gap-2">
													{ele.subtitle}
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
								<SwiperButtons />
							</Swiper>
						</div>
					</div>
				</div> */}
				<div className="bg-primary p-4 h-[70vh] md:h-[50vh] w-full flex items-center justify-center relative">
					<div className="w-full max-w-5xl h-full mx-auto text-center p-4 md:p-8 relative z-10">
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							loop={true}
							pagination={{
								clickable: false,
							}}
							// navigation={true}
							modules={[Navigation]}
							className="mySwiper">
							{data?.scholarships.map((ele: any) => (
								<SwiperSlide key={ele}>
									<div className="w-full h-full flex flex-col lg:flex-row gap-6 pb-4 pr-4 ">
										<div className="h-auto sm:h-60 w-full lg:w-1/2 lg:h-full">
											<Image
												src={ele.providerImage}
												alt={ele.providerName}
												width={150}
												height={150}
												className="w-full h-full !object-contain lg:!object-cover rounded-sm"
											/>
										</div>
										<div className="flex flex-col justify-start  gap-6  w-full text-white lg:pt-8">
											<div className="text-base md:text-lg lg:text-xl uppercase font-medium w-full text-center">
												{ele.name}
											</div>
											<div className="flex flex-col text-[14px] lg:text-[18px] md:text-base justify-center items-center text-slate-200 gap-2">
												{ele.subtitle}
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
							<SwiperButtons />
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
};

const SwiperButtons = () => {
	const swiper = useSwiper();
	return (
		<div className="flex  justify-end items-center gap-2 sm:absolute bottom-0 right-4 sm:right-0 z-50 pe-4">
			<button
				onClick={() => swiper.slidePrev()}
				className="bg-[#5580ff] hover:bg-blue-600 transition-colors ease-linear duration-300 text-white p-3 text-lg rounded-full">
				<FaChevronLeft />
			</button>

			<button
				onClick={() => swiper.slideNext()}
				className="bg-[#5580ff] hover:bg-blue-600 transition-colors ease-linear duration-300 text-white p-3 text-lg rounded-full ">
				<FaChevronRight />
			</button>
		</div>
	);
};

export default Home;
