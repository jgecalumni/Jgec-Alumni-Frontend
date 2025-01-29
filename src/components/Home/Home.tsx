"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Home: React.FC = () => {
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
						autoplay={{
							delay: 5000,
							disableOnInteraction: true,
						}}
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
										<div className="flex gap-8">
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
										</div>
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
				<div className="w-full h-auto px-4 md:px-10">
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
								{[0, 1, 2].map((ele) => (
									<SwiperSlide key={ele}>
										<div className="w-full h-full flex flex-col lg:flex-row gap-6 pb-4 pr-4 ">
											<div className="h-auto sm:h-60 w-full lg:w-1/2 lg:h-full">
												<Image
													src="/uploads/scholarship/Bibhas-Bhowmik-1737607751252-WhatsApp Image 2025-01-23 at 08.jpg"
													alt="slide-1"
													width={150}
													height={150}
													className="w-full h-full !object-contain lg:!object-cover rounded-sm"
												/>
											</div>
											<div className="flex flex-col justify-start  gap-6  w-full text-white lg:pt-4">
												<div className="text-base md:text-lg lg:text-xl uppercase font-medium w-full text-center">
													Confident and Profession Personality Scholarship
												</div>
												<div className="flex flex-col text-sm md:text-base justify-center items-center text-slate-200 gap-2">
													<h4>For any 4th year Civil Engineering Student</h4>
													<h1>
														Sponsored by Mr. Bibhas Bhowmik(JGEC, Civil 1985).
													</h1>
													<p className="text-xs md:text-sm text-neutral-200">
														(Initiated from 2013)
													</p>
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
