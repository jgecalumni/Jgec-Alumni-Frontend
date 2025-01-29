"use client";

import Link from "next/link";
import React from "react";

const Topbar = () => {
	return (
		<nav className="text-white fixed top-0 z-50 w-full  bg-[#161f37]">
			<div className="w-full max-w-screen-xl mx-auto lg:flex hidden justify-between items-center" >
				<div className="flex xl:w-[45%] lg:w-2/3 w-full items-center  text-sm xl:text-sm lg:text-sm gap-4">
					<div className="font-medium line-clamp-1 py-1">
						Reg.No:-S/1L/No-70053 of 2010-2011.
					</div>
					<div>
						<Link
							href="https://jgec.ac.in/"
							className="bg-[#663298] p-2.5 px-4 font-medium ">
							JGEC OFFICIAL WEBSITE
						</Link>
					</div>
				</div>
				<div className="flex xl:text-sm lg:text-sm  gap-6">
					<Link href="/login">
						<button className="bg-primary p-2 px-4 font-medium ">LOGIN</button>
					</Link>
					<Link href="/login">
						<button className="bg-[#1cad6c] p-2 px-4 font-medium ">
							SIGN UP
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Topbar;
