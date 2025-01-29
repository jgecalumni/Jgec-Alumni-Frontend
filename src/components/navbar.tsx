"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Button } from "./ui/button";
import { Drawer,DrawerContent } from "./ui/drawer";

const Links = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Vision & Mission",
		link: "/vision-mission",
	},
	{
		name: "Giving Back",
		link: "/giving-back",
	},
	{
		name: "Kanchenjunga",
		link: "/kanchenjunga",
	},
	{
		name: "Take a trip",
		link: "/take-a-trip",
	},
];

const moreLinks = [
	{
		name: "Research & Internship",
		link: "/research-internship",
	},
	{
		name: "Contact",
		link: "/contact",
	},
	{
		name: "Digital Database",
		link: "/digital-database",
	},
	{
		name: "Rooms",
		link: "/rooms",
	},
	{
		name: "Alumni-Fun-Club",
		link: "/alumni-fun-club",
	},
	{
		name: "Upcoming Events",
		link: "/upcoming-events",
	},
	{
		name: "Scholarships",
		link: "/scholarships",
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [openNav, setOpenNav] = useState(false);
	const pathname = usePathname();

	return (
		<>
			<nav className="h-24 w-full z-50 lg:top-9  top-0 bg-white fixed shadow-lg px-4 md:px-10">
				<div className="w-full h-full max-w-screen-xl  mx-auto flex items-center justify-between">
					<div className="flex items-center justify-between w-fit ">
						<div className="">
							<Image
								src="/Logo.webp"
								height={120}
								width={120}
								alt="Alumni Logo"
								className="w-24 h-24 object-contain"
							/>
						</div>
						<div className="flex w-full flex-col ms-3">
							<h1 className="text-neutral-950 font-semibold lg:text-xl">
								Alumni Association
							</h1>
							<p className="lg:text-sm line-clamp-1 text-xs font-normal">
								Jalpaiguri Government Engineering College
							</p>
						</div>
					</div>
					<div
						onClick={() => setOpenNav(!openNav)}
						className="text-3xl lg:hidden px-4">
						<RxHamburgerMenu />
					</div>

					<div className="lg:flex hidden h-full  lg:text-[0.6em] 2xl:text-[0.88rem] xl:text-sm items-center duration-200  justify-between font-medium w-full max-w-2xl">
						{Links.map((link) => (
							<Link
								key={link.name}
								href={link.link}
								className={` items-center hover:text-blue-500 duration-200 flex px-4 h-full ${pathname == link.link
									? "bg-[#dae5f2] border-b-4 border-b-[#3a60c8] text-blue-500"
									: "text-black"
									}`}>
								{link.name}
							</Link>
						))}
						{/* More links */}
						<div
							className="flex cursor-pointer  items-center gap-1 duration-200"
							onClick={() => setOpen(!open)}>
							<div
								className={`hover:text-blue-600 ${open ? "text-blue-600" : ""
									} duration-200`}>
								More
							</div>
							<div className={`${open ? "rotate-180" : "rotate-0"} duration-200`}>
								{" "}
								<IoIosArrowDown />
							</div>
							<div
								className={`${open
									? "block absolute  w-[15%] right-[4em] bg-[#ffffff] rounded-sm shadow-lg top-[7em]"
									: "hidden pointer-events-none"
									}`}>
								<div className="flex flex-col justify-center">
									{moreLinks.map((links, i) => (
										<Link
											key={links.name}
											href={links.link}
											className={`border-b hover:text-blue-600 border-b-[#ebeaea] ${pathname == links.link
												? "bg-[#dae5f2] border-b-4 border-b-[#3a60c8] text-blue-500"
												: ""
												} text-black ${i === (moreLinks.length - 1) && "border-b-0"}`
											}
										>
											<div className="p-3">{links.name}</div>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<Drawer open={openNav} onClose={() => setOpenNav(false)} direction="left" >
				<DrawerContent className="overflow-hidden block lg:hidden">
					<div className="w-full h-full py-4 overflow-y-auto flex flex-col  items-center">
						<div className="flex flex-col justify-center items-center">
							<Image
								height={120}
								width={120}
								src="/Logo.webp"
								alt="Alumni Logo"
								className="w-24 h-24 object-contain"
							/>
							<div className="flex items-center w-full flex-col">
								<h1 className="text-primary font-semibold text-xl mb-1">
									Alumni Association
								</h1>
								<p className="text-sm font-medium">
									Jalpaiguri Government Engineering College
								</p>
							</div>
							<div
								onClick={() => setOpenNav(!openNav)}
								className="text-3xl absolute top-1 right-1 p-1 rounded-b-sm">
								<RxCross2 />
							</div>
						</div>
						<div className="flex text-white mt-4 gap-6">
							<Link href="/login">
								<Button onClick={() => setOpenNav(false)} >
									LOGIN
								</Button>
							</Link>
							<Link href="/login">
								<Button className="bg-[#1cad6c]" onClick={() => setOpenNav(false)} >
									SIGN UP
								</Button>
							</Link>
							<Link href="https://jgec.ac.in/" target="_blank" onClick={() => setOpenNav(false)} >
								<Button className="bg-[#663298] ">
									VISIT
								</Button>
							</Link>
						</div>
						<hr className="mt-6 border border-[#e8e8e8] w-full" />
						<div className="flex text-sm font-medium flex-col justify-center w-full">
							{[...Links, ...moreLinks].map((link, i,arr) => (
								<Link
									key={link.name}
									href={link.link}
									onClick={() => setOpenNav(false)}
									className={` items-center flex px-6 min-[350px]:px-8 py-3 text-sm h-full ${pathname == link.link
										? "bg-[#dae5f2] border-l-4  border-l-[#3a60c8] text-blue-500"
										: "text-black"
										}  ${i === (arr.length - 1) ? "border-b-0" : "border-b"}`
									}
								>
									{link.name}
								</Link>
							))}
							{/* <div
								className="cursor-pointer   w-full  items-center  duration-200"
								onClick={() => setOpen(!open)}>
								<div
									className={`flex ${open ? "bg-[#dae5f2]" : ""} items-center `}>
									<div
										className={`hover:text-blue-600 ${open ? "text-blue-600" : ""
											} duration-200 p-3 pl-4`}>
										More
									</div>
									<div
										className={`${open ? "rotate-180" : "rotate-0"
											} duration-200`}>
										{" "}
										<IoIosArrowDown />
									</div>
								</div>
								<div
									className={`${open
										? "h-full pl-4    right-[4em] bg-[#ffffff] rounded-sm shadow-lg "
										: "h-0 overflow-hidden pointer-events-none"
										} duration-200`}>
									<div className="flex flex-col justify-center">
										{moreLinks.map((links) => (
											<Link
												key={links.name}
												href={links.link}
												onClick={() => setOpenNav(false)}
												className={`border-b hover:text-blue-600 border-b-[#ebeaea] ${pathname == links.link
													? "bg-[#dae5f2] border-l-4 border-l-[#3a60c8] text-blue-500"
													: ""
													} text-black `}>
												<div className="p-3">{links.name}</div>
											</Link>
										))}
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Navbar;
