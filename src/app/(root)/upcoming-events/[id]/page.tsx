"use client";

import React from "react";
import { EventDetails } from "@/lib/EventDetails";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

interface EventParams {
	params: { id: string };
}

interface Event {
	id: number;
	imageUrl: string;
	title: string;
	details: string;
	schedule: {
		id: number;
		startTime: string;
		endTime: string;
		activity: string;
	}[];
}

const Page: React.FC<EventParams> = ({ params }: EventParams) => {
	const { id } = params;
	const data = EventDetails.filter((event) => event.id === Number(id));

	if (data.length === 0) {
		return (
			<div className="pt-[10em] flex bg-[#edf1f4] justify-center items-center">
				<div className="text-2xl text-red-500 font-semibold">
					Event not found!
				</div>
			</div>
		);
	}

	const event = data[0];

	return (
		<div className="lg:pt-[10em] pt-[4em] flex bg-[#edf1f4] justify-center items-center">
			<div className="lg:px-14 px-4 flex flex-col lg:w-2/3 justify-center gap-8 items-center">
				<div className="relative rounded-md shadow-xl  w-full h-[60vh]">
					<Image
						src={event.imageUrl}
						objectFit="cover"
						layout="fill"
						alt={event.title}
						className="z-10 rounded-md brightness-50"
					/>
					<div className="z-20 bg-[#161616d5] flex gap-2 flex-col w-full absolute bottom-0 p-4">
						<div className="text-white text-lg md:text-xl font-semibold">
							{event.title}
						</div>
						<div className="flex items-center text-yellow-300 text-sm lg:text-lg">
							<FaLocationDot
								color="yellow"
								size={20}
							/>
							Jalpaiguri, West Bengal
						</div>
					</div>
				</div>
				{/* Details of the event */}
				<div className="flex shadow-xl bg-white w-full mb-4 flex-col py-6 rounded-md p-4">
					<div className="flex flex-col">
						<div className="text-black text-2xl md:text-3xl font-bold">
							Details of the Event
						</div>
						<div className="border w-1/2 lg:w-1/4 border-blue-500"></div>
					</div>
					<div className="py-4 md:text-lg text-sm ">{event.details}</div>
				</div>
				{/* Event Schedule */}
				<div className="w-full mb-8 flex flex-col gap-4">
					<div className="bg-primary rounded-md p-4 text-center font-medium text-xl lg:text-2xl text-white">
						EVENT SCHEDULE
					</div>
					<div className="w-full px-2 lg:px-4">
						{event.schedule.map((schedule, index) => (
							<div
								key={index}
								className="rounded-md p-3 flex shadow-xl gap-4 items-center bg-white h-[8vh]">
								<Button className="border bg-primary flex items-center justify-center text-white font-medium px-3 h-full">
									{schedule.startTime}-{schedule.endTime}
								</Button>
								<div className="text-lg font-medium">{schedule.activity}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
