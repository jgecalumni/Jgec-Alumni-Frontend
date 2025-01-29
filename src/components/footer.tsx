import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const socialIcons = [
	{
		icon: <FaFacebookF />,
		link: 'https://www.facebook.com/groups/communicationcell.jgec/'
	},
	{
		icon: <FaLinkedinIn />,
		link: 'https://www.linkedin.com/company/jgecaa/',
	},
	{
		icon: <FaYoutube />,
		link: ''
	},
	{
		icon: <FaInstagram />,
		link: ''
	},
	{
		icon: <FaWhatsapp />,
		link: ''
	}
]

const Footer: React.FC = () => {
	return (
		<footer className="w-full h-auto bg-[#161f37] pt-8">
			<div className="w-full pb-8 max-w-screen-xl px-4 md:px-10 xl:px-0 mx-auto text-white flex flex-wrap max-sm:flex-col gap-8  justify-between ">
				<div className="flex flex-col w-full max-w-[15rem] gap-2">
					<Image
						src="/Logo.webp"
						width={150}
						height={150}
						alt="logo"
					/>
					<div className=" mt-2 text-sm lg:text-base text-white">
						THE JALPAIGURI
						<div>GOVT.ENGG.COLLEGE ALUMNI</div>
						<div>ASSOCIATION, JALPAIGURI.</div>
					</div>
				</div>
				<div className="flex flex-col lg:p-4">
					<h1 className="text-xl font-medium text-white">Useful Links</h1>
					<div className="flex flex-col mt-2 sm:mt-4  gap-2">
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Home
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Official's Desk
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Constitution
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Take a Trip
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Upcoming Events
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Contact us
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:p-4">
					<h1 className="text-xl font-medium text-white">Policies</h1>
					<div className="flex flex-col mt-2 sm:mt-4 gap-2 transition-all ease-linear">
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Privacy Policy
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Refund Policy
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Terms & Conditions
						</div>
					</div>
				</div>
				<div className=" flex flex-col gap-2 py-3  lg:p-4 w-full max-w-xs">
					<h1 className="text-xl font-medium text-white">Get In Touch</h1>
					<div className="text-sm mt-1 sm:mt-3">
						Address:{" "}
						<span className="text-gray-100 ">
							Jalpaiguri Government Engineering College Campus, P.O.: Denguajhar
							Dist.: Jalpaiguri West Bengal - 735102, India.
						</span>
					</div>
					<div className="text-sm">
						<div>Phone : +91 7439428480</div>
						<div>Email : jgecalum@gmail.com</div>
					</div>
					<div className="flex mt-4 gap-4">
						{
							socialIcons.map((ele, i) => (
								<Link key={i} href={ele.link} target="_blank" className="h-10 w-10  rounded-md hover:opacity-90 duration-200 bg-primary flex justify-center items-center text-lg ">
									{ele.icon}
								</Link>
							))
						}
					</div>
				</div>
			</div>
			<div className="flex gap-2 text-xs lg:text-sm  text-white p-4 items-center justify-center bg-primary">
				<FaRegCopyright />
				JGEC Alumini Association. All Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;
