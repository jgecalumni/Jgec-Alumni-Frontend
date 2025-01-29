import Link from "next/link";
import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";


const data = [
	{
		post: 'President',
		member: [
			{ name: 'Mr. Bhaskar Dasgupta', timeline: '(1979-1983)' }
		],
	},
	{
		post: 'Vice President',
		member: [
			{ name: 'Mr. Dilip Kumar Roy', timeline: '(1980-1984)' }
		],
	},
	{
		post: 'Secretary',
		member: [
			{ name: 'Mr. Partha Halder', timeline: '(1989-1993)' }
		],
	},
	{
		post: 'Treasurer',
		member: [
			{ name: 'Dr. Mousam Chatterjee', timeline: '(2000-2004)' }
		],
	},
	{
		post: 'Governing Body Member',
		member: [
			{ name: 'Dr. Mala De', timeline: '(1996-2000)' },
			{ name: 'Mr. Tufan Dutta', timeline: '(1996-2000)' },
			{ name: 'Mr. Soumyajit Das', timeline: '(2007-2011)' },
			{ name: 'Ms. Durba Shil', timeline: '(2019-2023)' }
		],
	},
	{
		post: 'Project Director (Kanchenjunga Construction and Operations)',
		member: [
			{ name: 'Mr. Rajib Bhattacharya', timeline: '(1996-2000)' }
		],
	},
	{
		post: 'Internal Auditor',
		member: [
			{ name: 'Mr. Bithin Basu', timeline: '(1989-1993)' }
		],
	}
]

const bottomLinks = [
	{
		name: 'Gallery',
		link: '/gallery'
	},
	{
		name: 'Alumni Fan Club',
		link: '/alumni-fan-club'
	},
	{
		name: 'Constitution',
		link: '/constitution'
	},
	{
		name: 'Alumni Activities',
		link: '/alumni-activities'
	}
]

const notices = [
	{
		title: 'SCHOLARSHIP PROGRAM - 2024',
		subtitle: 'Scholarship Program for the year 2024 has been announced. Click here to know more.',
		link: '/notice-1'
	},
	{
		title: '1) Opening date of application by students of JGEC: 1st June, 2024',
		subtitle: '',
		link: '/notice-2'
	},
	{
		title: 'SCHOLARSHIP PROGRAM - 2024',
		subtitle: 'Scholarship Program for the year 2024 has been announced. Click here to know more.',
		link: '/notice-1'
	},
	{
		title: '1) Opening date of application by students of JGEC: 1st June, 2024',
		subtitle: '',
		link: '/notice-2'
	},
	{
		title: 'SCHOLARSHIP PROGRAM - 2024',
		subtitle: 'Scholarship Program for the year 2024 has been announced. Click here to know more.',
		link: '/notice-1'
	},
	{
		title: '1) Opening date of application by students of JGEC: 1st June, 2024',
		subtitle: '',
		link: '/notice-2'
	},
	{
		title: 'SCHOLARSHIP PROGRAM - 2024',
		subtitle: 'Scholarship Program for the year 2024 has been announced. Click here to know more.',
		link: '/notice-1'
	},
	{
		title: '1) Opening date of application by students of JGEC: 1st June, 2024',
		subtitle: '',
		link: '/notice-2'
	},
]


const GoverningBody = () => {
	return (
		<section className="w-full h-auto px-4 md:px-10 py-8 md:py-16">
			<div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-3 justify-center">
				<div className="w-full lg:w-[90%] bg-[#c4eb80] h-full ">
					<h1 className="text-lg md:text-xl bg-[#91c837] text-neutral-950 p-2.5 font-medium">
						Governing Body
					</h1>
					<div className="grid text-center text-neutral-950 lg:grid-cols-4 grid-cols-2 w-full h-full">
						{
							data.map((item, index) => (
								<div key={index} className="border-r lg:border-b border-b flex justify-center flex-col items-center w-full border-neutral-200  h-auto md:h-72 max-md:py-4 max-md:px-2">
									<h1 className="lg:text-lg text-base font-medium mb-2">{item.post}</h1>
									{
										item.member.map((member, index) => (
											<div key={index} className="text-neutral-800 font-normal mb-2">
												<h1 className="text-sm md:text-base capitalize">{member.name}</h1>
												<h4 className="text-xs md:text-sm">{member.timeline}</h4>
											</div>
										))
									}
								</div>
							))
						}
					</div>
				</div>
				<div className="w-full lg:w-[30%]">
					<div className=" bg-[#7ec9ee]  h-[70vh]">
						<div className="bg-[#3fa3d5] text-lg md:text-xl text-neutral-950 p-2.5 font-medium">
							Upcoming Events
						</div>
						<div className="w-full overflow-hidden h-[calc(70vh-4rem)]">
							<ul className="bottom-top">
								{
									notices.map((item, index) => (
										<li key={index} className="px-4 py-2.5 border-b border-neutral-200 text-neutral-950">
											<Link href={item.link} className="flex flex-col gap-1" >
												<h4 className="text-sm">{item.title}</h4>
												<p className="text-xs">{item.subtitle}</p>
											</Link>
										</li>
									))
								}
							</ul>
						</div>
					</div>
					<ul className="py-6 hidden lg:block">
						{
							bottomLinks.map((item, index) => (
								<li key={index} className="mb-2 text-base">
									<Link
										href={item.link}
										className="flex text-primary font-medium gap-2 items-center"
									>
										<FaCircleChevronRight className="text-red-500" />
										{item.name}
									</Link>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default GoverningBody;
