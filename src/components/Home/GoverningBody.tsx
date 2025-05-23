"use client";
import { useGetAllNoticesQuery } from "@/store/feature/notice-feature";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

import { FaChevronCircleRight } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import ReactQuill from "react-quill";

const data = [
	{
		post: "President",
		member: [
			{
				name: "Mr. Bhaskar Dasgupta",
				timeline: "(1979-1983)",
				image: "/assets/Members/BhaskarDasgupta.jpg",
			},
		],
	},
	{
		post: "Vice President",
		member: [
			{
				name: "Mr. Dilip Kumar Roy",
				timeline: "(1980-1984)",
				image: "/assets/Members/DilipKumarRoy.jpg",
			},
		],
	},
	{
		post: "Secretary",
		member: [
			{
				name: "Mr. Partha Halder",
				timeline: "(1989-1993)",
				image: "/assets/Members/person-icon-8.png",
			},
		],
	},
	{
		post: "Treasurer",
		member: [
			{
				name: "Dr. Mousam Chatterjee",
				timeline: "(2000-2004)",
				image: "/assets/Members/MousamChatterjee.jpg",
			},
		],
	},
	{
		post: "Governing Body Member",
		member: [
			{
				name: "Dr. Mala De",
				timeline: "(1996-2000)",
				image: "/assets/Members/MalaDe.jpg",
			},
		],
	},
	{
		post: "Governing Body Member",
		member: [
			{
				name: "Mr. Tufan Dutta",
				timeline: "(1996-2000)",
				image: "/assets/Members/TufanDutta.jpg",
			},
		],
	},
	{
		post: "Governing Body Member",
		member: [
			{
				name: "Mr. Soumyajit Das",
				timeline: "(2007-2011)",
				image: "/assets/Members/SoumyajitDas.jpg",
			},
		],
	},
	{
		post: "Governing Body Member",
		member: [
			{
				name: "Ms. Durba Shil",
				timeline: "(2019-2023)",
				image: "/assets/Members/DurbaShil.jpg",
			},
		],
	},
	{
		post: "Project Director (Kanchenjunga Construction and Operations)",
		member: [
			{
				name: "Mr. Rajib Bhattacharya",
				timeline: "(1996-2000)",
				image: "/assets/Members/RajibBhattacharya.jpg",
			},
		],
	},
	{
		post: "Internal Auditor",
		member: [
			{
				name: "Mr. Bithin Basu",
				timeline: "(1989-1993)",
				image: "/assets/Members/BithinBasu.jpg",
			},
		],
	},
];

const bottomLinks = [
	{
		name: "Gallery",
		link: "/gallery",
	},
	{
		name: "Audit Report",
		link: "/audit-report",
	},
	{
		name: "Constitution",
		link: "/assets/constitution_of_AA.pdf",
	},
	{
		name: "Alumni Activities",
		link: "/alumni-activities",
	},
	{
		name: "Money Receipt",
		link: "/money-receipt",
	},
];

const notices = [
	{
		title: "SCHOLARSHIP PROGRAM - 2024",
		subtitle:
			"Scholarship Program for the year 2024 has been announced. Click here to know more.",
		link: "/notice-1",
	},
	{
		title: "1) Opening date of application by students of JGEC: 1st June, 2024",
		subtitle: "",
		link: "/notice-2",
	},
	{
		title: "SCHOLARSHIP PROGRAM - 2024",
		subtitle:
			"Scholarship Program for the year 2024 has been announced. Click here to know more.",
		link: "/notice-1",
	},
	{
		title: "1) Opening date of application by students of JGEC: 1st June, 2024",
		subtitle: "",
		link: "/notice-2",
	},
	{
		title: "SCHOLARSHIP PROGRAM - 2024",
		subtitle:
			"Scholarship Program for the year 2024 has been announced. Click here to know more.",
		link: "/notice-1",
	},
	{
		title: "1) Opening date of application by students of JGEC: 1st June, 2024",
		subtitle: "",
		link: "/notice-2",
	},
	{
		title: "SCHOLARSHIP PROGRAM - 2024",
		subtitle:
			"Scholarship Program for the year 2024 has been announced. Click here to know more.",
		link: "/notice-1",
	},
	{
		title: "1) Opening date of application by students of JGEC: 1st June, 2024",
		subtitle: "",
		link: "/notice-2",
	},
];

const GoverningBody = () => {
	const {
		data: noticeData,
		isError,
		isLoading,
		error,
	} = useGetAllNoticesQuery({
		limit: 1000,
		page: 1,
	});
	console.log(noticeData?.notices);

	return (
		<section className="w-full px-4 md:px-10 py-8 md:py-16">
			<div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-3 justify-center">
				<div className="w-full lg:w-[90%] bg-[#c4eb80] h-full ">
					<h1 className="text-lg md:text-xl bg-[#91c837] text-neutral-950 p-2.5 font-medium">
						Governing Body
					</h1>
					<div className="grid text-center text-neutral-950 lg:grid-cols-4 grid-cols-2 w-full h-full">
						{data.map((item, index) => (
							<div
								key={index}
								className="border-r lg:border-b border-b flex flex-col items-center justify-evenly w-full border-neutral-200 h-auto md:h-72 max-md:py-4 max-md:px-2 p-4">
								<h1 className="lg:text-[17px] text-base font-medium mb-2">
									{item.post}
								</h1>
								{item.member.map((member, idx) => (
									<div
										key={idx}
										className="text-neutral-800 font-normal mb-4 flex flex-col items-center">
										<Image
											src={member.image}
											alt={member.name}
											width={100}
											height={100}
											className=" object-cover w-[6rem] h-[6rem] overflow-hidden rounded-full border-2 border-gray-300 mb-2"
										/>
										<div className="text-[14px] capitalize">{member.name}</div>
										<h4 className="text-xs md:text-sm">{member.timeline}</h4>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
				<div className="w-full lg:w-[30%]">
					<div className=" bg-[#7ec9ee]  h-[70vh]">
						<div className="bg-[#3fa3d5] text-lg md:text-xl text-neutral-950 p-2.5 font-medium">
							Noticeboard
						</div>
						<div className="w-full overflow-hidden h-[calc(70vh-4rem)]">
							{noticeData?.notices.length === 0 && (
								<div className="flex items-center justify-center h-full">
									<p className="text-neutral-950 text-sm">
										No notices available
									</p>
								</div>
							)}
							<ul className="bottom-top">
								{noticeData?.notices.map((item: INoticeType, index) => (
									<li
										key={index}
										className="px-4 py-2.5 border-b border-neutral-200 text-neutral-950">
										<Link
											href={item.link}
											className="flex flex-col mb-1 gap-1">
											<h4 className="text-sm font-medium">{item.title}</h4>
										</Link>
										<div>
											<ReactQuill
												theme="bubble"
												value={item.description}
												readOnly={true}
												className="view_editor1 text-xs"
											/>
										</div>
										<p className="p-0 text-xs text-right">
											published on {format(item.date, "dd MMM, yyyy")}
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
					<ul className="py-6 ">
						{bottomLinks.map((item, index) => (
							<li
								key={index}
								className="mb-2 text-base">
								<Link
									href={item.link}
									className="flex text-primary font-medium gap-2 items-center">
									<FaCircleChevronRight className="text-red-500" />
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default GoverningBody;
