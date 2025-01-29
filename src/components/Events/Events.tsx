"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { EventDetails } from "@/lib/EventDetails";
import { Button } from "../ui/button";
import SectionHeader from "../section-header";

interface TimeRemaining {
	days: string;
	hours: string;
	minutes: string;
	seconds: string;
}

const Events: React.FC = () => {
	const [timeRemaining, setTimeRemaining] = useState<
		Record<number, TimeRemaining>
	>({});

	useEffect(() => {
		const timer = setInterval(() => {
			const updatedTimes: Record<number, TimeRemaining> = {};

			EventDetails.forEach((event) => {
				const eventDate = new Date(`${event.date}T${event.time}`).getTime();
				const currentTime = new Date().getTime();
				const difference = eventDate - currentTime;

				if (difference > 0) {
					updatedTimes[event.id] = {
						days: String(
							Math.floor(difference / (1000 * 60 * 60 * 24))
						).padStart(2, "0"),
						hours: String(
							Math.floor(
								(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
							)
						).padStart(2, "0"),
						minutes: String(
							Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
						).padStart(2, "0"),
						seconds: String(
							Math.floor((difference % (1000 * 60)) / 1000)
						).padStart(2, "0"),
					};
				} else {
					updatedTimes[event.id] = {
						days: "00",
						hours: "00",
						minutes: "00",
						seconds: "00",
					};
				}
			});

			setTimeRemaining(updatedTimes);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<SectionHeader
				highlightTitle="All Events"
				normalTitle="Archive"
				description="Get information about all our upcoming events."
			/>
			{EventDetails.map((event) => (
				<div
					key={event.id}
					className="my-8 flex flex-col justify-center items-center">
					<div className="bg-primary rounded-md shadow-2xl flex md:flex-row flex-col items-center gap-4 justify-between md:h-full lg:h-full 2xl:h-[50vh] md:p-6 p-4 w-[90%] lg:w-[70%]">
						<div className="h-[30vh] md:h-[50vh] lg:h-[60vh] xl:h-[60vh] 2xl:h-full  overflow-hidden lg:flex justify-center items-center rotate-0 w-full md:w-1/2 ">
							<Image
								objectPosition="center"
								objectFit="cover"
								layout="fill"
								src={event.imageUrl}
								alt={event.title}
								className="rounded-md"
							/>
						</div>
						<div className="flex flex-col gap-4 justify-between md:w-[60%]  h-full">
							{/* Remaining Time */}
							<div className="flex gap-4 items-center">
								<div className="flex flex-col items-center">
									<div className="text-white font-medium">Days</div>
									<div className="text-white w-12 h-12 flex justify-center items-center border rounded-md border-white bg-black">
										{timeRemaining[event.id]?.days || "00"}
									</div>
								</div>
								<div className="flex flex-col items-center">
									<div className="text-white font-medium">Hr</div>
									<div className="text-white w-12 h-12 flex justify-center items-center border border-white rounded-md bg-black">
										{timeRemaining[event.id]?.hours || "00"}
									</div>
								</div>
								<div className="flex flex-col items-center">
									<div className="text-white font-medium">Min</div>
									<div className="text-white w-12 h-12 flex justify-center items-center border border-white rounded-md bg-black">
										{timeRemaining[event.id]?.minutes || "00"}
									</div>
								</div>
								<div className="flex flex-col items-center">
									<div className="text-white font-medium">Sec</div>
									<div className="text-white w-12 h-12 flex justify-center items-center border border-white rounded-md bg-black">
										{timeRemaining[event.id]?.seconds || "00"}
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								{/* Title */}
								<Link
									href={`/upcoming-events/${event.id}`}
									className="text-white text-[20px] lg:text-[25px] font-semibold">
									{event.title}
								</Link>
								{/* Description */}
								<div className="text-white lg:text-[16px] leading-6 text-sm">
									{event.description}
								</div>
							</div>
							{/* Button */}
							<Button className="border-2 lg:w-[40%] hover:bg-white hover:text-black text-lg duration-200 border-white p-3 text-white bg-[#2e4da0] font-semibold">
								JOIN WITH US
							</Button>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Events;
