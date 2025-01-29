"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";


import { ScholarshipDetails } from "@/lib/ScholarshipsData";
import SectionHeader from "../section-header";

const Scholarship = () => {
	return (
		<> 
			<SectionHeader
				highlightTitle="Scholarships"
				normalTitle="Programs"
				description="We are committed to helping students achieve their academic goals by providing them with the necessary resources and scholarships."
			/>

			{/* Scholarship Details */}
			<div className="h-screen flex items-center px-3 justify-center">
				<div className="w-full lg:w-[30%]">
					<div className=" bg-[#7ec9ee]  h-[70vh]">
						<div className="bg-[#3fa3d5] text-lg md:text-xl text-neutral-950 p-2.5 font-medium">
							Scholarship Programs
						</div>
						<div className="w-full overflow-hidden h-[calc(70vh-4rem)]">
							<ul className="bottom-top">
								{ScholarshipDetails.map((item, index) => (
									<li
										key={index}
										className="px-4 py-2.5 border-b border-neutral-200 text-neutral-950">
										<Link
											href={`/scholarships/${item._id}`}
											className="flex flex-col gap-2">
											<h4 className="text-sm font-medium">{item.title}</h4>
											<p className="text-xs">{item.subtitle}</p>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Scholarship;
