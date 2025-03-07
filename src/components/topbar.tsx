"use client";
import { useAuth } from "@/store/AuthContext";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

const Topbar = () => {
	const { token, handleLogout, user } = useAuth();
	console.log(token);
	
	return (
		<nav className="text-white fixed top-0 z-[200] w-full   bg-[#161f37]">
			<div className="w-full max-w-screen-xl mx-auto lg:flex hidden justify-between items-center">
				<div className="flex xl:w-[45%] lg:w-2/3 w-full items-center  text-sm xl:text-sm lg:text-sm gap-4">
					<div className="font-medium line-clamp-1 py-1">
						Reg.No:-S/1L/No-70053 of 2010-2011.
					</div>
					<div>
						<Link
							href="https://jgec.ac.in/"
							className="bg-[#663298] p-2 px-4 font-medium ">
							JGEC OFFICIAL WEBSITE
						</Link>
					</div>
				</div>
				<div className="flex xl:text-sm lg:text-sm  gap-6">
					{!!token ? (
						<>
							{/* <Link href={`/profile/${user?.userId}`}>
								<Image
									src={user?.userPhoto || ""}
									width={40}
									height={40}
									className="rounded-full"
									alt=""
								/>
							</Link> */}
							<div className="rotate-0  w-10 h-10">
							<Link href={`/profile/${user?.userId}`}>
								<Image
									src={user?.userPhoto || ""}
									layout="fill"
									objectFit="cover"
									className="rounded-full"
									alt=""
								/>
							</Link>
							</div>
							<button
								onClick={handleLogout}
								className="bg-red-500 px-4 font-medium ">
								<LogOutIcon size={18} />
							</button>
						</>
					) : (
						<>
							<Link href="/login">
								<button className="bg-primary p-2 px-4 font-medium ">
									LOGIN
								</button>
							</Link>
							<Link href="/login">
								<button className="bg-[#1cad6c] p-2 px-4 font-medium ">
									SIGN UP
								</button>
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Topbar;
