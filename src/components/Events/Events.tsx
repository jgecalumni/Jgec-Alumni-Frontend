"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import SectionHeader from "../section-header";
import { useAllEventsQuery } from "@/store/feature/event-feature";
import toast from "react-hot-toast";
import Loading from "@/app/Loader";

const Events: React.FC = () => {
	const [page, setPage] = useState<number>(1);

	const { data, error, isError, isLoading } = useAllEventsQuery({
		page: page,
		search: "",
	});
	const [timeRemaining, setTimeRemaining] = useState<Record<number, any>>({});
	const [totalPages, setTotalPages] = useState<number>(1);

	useEffect(() => {
		if (isError) {
			toast.error((error as any)?.data?.message || "Failed to fetch events");
		}
		if (!data?.events) return;

		const updateTimes = () => {
			const updatedTimes: Record<number, any> = {};

			data.events.forEach((event) => {
				const eventDate = new Date(`${event.date}T${event.time}:00`).getTime();
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
		};

		// Run initially and then update every second
		updateTimes();
		const timer = setInterval(updateTimes, 1000);

		return () => clearInterval(timer);
		if (data) {
			setTotalPages(data?.totalPages);
		}
	}, [data, isError, error]); // Runs whenever `data` updates

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<SectionHeader
				highlightTitle="All Events"
				normalTitle="Archive"
				description="Get information about all our upcoming events"
			/>
			{data?.events.length!=0 ? (
				<>
					{data?.events.map((event) => (
						<div
							key={event.id}
							className="my-8 flex flex-col justify-center items-center">
							<div className="bg-primary rounded-md shadow-2xl flex md:flex-row flex-col  gap-4 justify-between md:h-full lg:h-full 2xl:h-[50vh] md:p-6 p-4 w-[90%] lg:w-[70%]">
								<Image
									height={450}
									width={450}
									src={event.event_thumbnail}
									alt={event.name}
									className="rounded-md"
								/>
								<div className="flex flex-col gap-4 justify-evenly md:w-[60%] h-full">
									<div className="flex gap-4 items-center">
										{["Days", "Hr", "Min", "Sec"].map((unit, index) => {
											const values = ["days", "hours", "minutes", "seconds"];
											return (
												<div
													key={unit}
													className="flex flex-col items-center">
													<div className="text-white font-medium">{unit}</div>
													<div className="text-white w-12 h-12 flex justify-center items-center border border-white rounded-md bg-black">
														{timeRemaining[event.id]?.[values[index]] || "00"}
													</div>
												</div>
											);
										})}
									</div>
									<div className="flex flex-col gap-2 lg:gap-1">
										<Link
											href={`/upcoming-events/${event.id}`}
											className="text-white text-[18px] lg:text-[22px] font-semibold">
											{event.name}
										</Link>
										<div className="text-white line-clamp-3 lg:text-[14px] leading-6 text-sm">
											{event.shortDescription}
										</div>
									</div>
									<Button className="border-2 lg:w-[35%] hover:bg-white hover:text-black text-[16px] duration-200 border-white p-3 text-white bg-[#2e4da0] font-semibold">
										JOIN WITH US
									</Button>
								</div>
							</div>
						</div>
					))}
				</>
			) : (
				<><div className="h-full min-h-[70vh] flex justify-center items-center text-primary text-xl font-semibold">No events found</div></>
			)}
		</>
	);
};

export default Events;
