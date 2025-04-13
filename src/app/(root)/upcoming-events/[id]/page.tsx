"use client";

import React, { useEffect } from "react";
import { EventDetails } from "@/lib/EventDetails";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useGetEventByIdQuery } from "@/store/feature/event-feature";
import dynamic from "next/dynamic";
import Loading from "@/app/Loader";
import toast from "react-hot-toast";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
interface EventParams {
	params: { id: string };
}

const Page: React.FC<EventParams> = ({ params }: EventParams) => {
	const { id } = params;
	const { data, isLoading, isError, error } = useGetEventByIdQuery(id);

	useEffect(() => {
		if (isError) {
			toast.error((error as any)?.data?.message || "Failed to fetch event");
		}
	}, [isError, error]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="lg:pt-[10em] pt-[4em] flex bg-[#edf1f4] justify-center items-center">
			<div className="lg:px-14 px-4 flex flex-col lg:w-2/3 justify-center gap-8 items-center">
				<div className="relative rounded-md shadow-xl  w-full h-[50vh] lg:h-[60vh]">
					<Image
						src={data?.data.event_thumbnail || ""}
						objectFit="cover"
						layout="fill"
						alt={data?.data.name || ""}
						className="z-10 rounded-md brightness-50"
					/>
					<div className="z-20 bg-[#161616d5] flex gap-2 flex-col w-full absolute bottom-0 p-4">
						<div className="text-white text-sm md:text-xl font-semibold">
							{data?.data.name} ({data?.data.date})
						</div>
						<div className="flex items-center text-yellow-300 text-xs lg:text-lg">
							<FaLocationDot
								color="yellow"
								size={18}
							/>
							{data?.data.location}
						</div>
					</div>
				</div>
				{/* Details of the event */}
				<div className="flex shadow-xl bg-white w-full mb-4 flex-col py-6 rounded-md p-4">
					<div className="flex gap-0 flex-col">
						<div className="text-black lg:text-2xl  font-bold">
							Details of the Event
						</div>
						<div className="border w-1/2 lg:w-1/4 border-blue-500"></div>
					</div>
					<div className="pt-4 md:text-lg text-sm ">
						<ReactQuill
							theme="bubble"
							value={data?.data.details}
							readOnly={true}
							className="view_editor"
						/>
					</div>
					<div className="flex pt-4 flex-col">
						<div className="text-black lg:text-xl font-bold">Host Details</div>
						<div className="border w-1/4 lg:w-14 border-blue-500"></div>
					</div>

					<div className="lg:text-[16px] text-[14px]  pt-3 font-medium">
						Name : {data?.data.hostName}
					</div>

					<div className=" flex gap-2 pt-2 ">
						<ReactQuill
							theme="bubble"
							value={data?.data.hostDetails}
							readOnly={true}
							className="view_editor"
						/>
					</div>
				</div>
				{/* Event Schedule */}
				<div className="w-full mb-8 flex flex-col gap-4">
					<div className="bg-primary rounded-md p-4 text-center font-medium text-xl lg:text-2xl text-white">
						EVENT SCHEDULE
					</div>
					<div className="w-full px-1 lg:px-4">
						{data?.data.schedule.map((schedule, index) => (
							<div
								key={index}
								className="rounded-md p-3 mb-2 flex shadow-xl gap-4 items-center bg-white lg:h-[8vh]">
								<Button className="border bg-primary lg:text-[16px] text-[12px] flex items-center justify-center text-white font-medium px-3 h-full">
									{schedule.startTime}-{schedule.endTime}
								</Button>
								<div className="lg:text-[16px] text-[12px] font-medium">{schedule.activity}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
