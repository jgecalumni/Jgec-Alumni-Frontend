"use client";
import Loading from "@/app/Loader";
import { useGetCategoryQuery } from "@/store/feature/gallery-feature";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect } from "react";
import toast from "react-hot-toast";

const photos = [
	{
		id: 1,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
	},
	{
		id: 2,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
	},
	{
		id: 3,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
	},
	{
		id: 4,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
	},
	{
		id: 5,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
	},
	{
		id: 6,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
	},
	{
		id: 7,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
	},
	{
		id: 8,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
	},
	{
		id: 9,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
	},
	{
		id: 10,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
	},
	{
		id: 11,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
	},
	{
		id: 12,
		url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
	},
];

const MasonryGallery = () => {
	const { data, isLoading, isError, error } = useGetCategoryQuery({});
	useEffect(() => {
		if (isError) {
			toast.error((error as any)?.data?.message || "Failed to fetch events");
		}
	}, [isError, error]);
	if (isLoading) {
		return <Loading />;
	}
	return (
		<>
			<div className="lg:mt-[8em] mt-[6em] h-[60vh] overflow-hidden">
				<div className="h-full rotate-0 w-full">
					<Image
						layout="fill"
						objectFit="cover"
						src="/assets/membership.jpg"
						alt=""
						className="object-cover brightness-[30%]"
					/>
					<div className="text-white h-full w-full top-0 flex flex-col items-center justify-center gap-2 absolute">
						<div className="md:text-6xl text-5xl text-white font-medium">
							<span className="text-blue-400">Ga</span>llery
						</div>
						<div className="text-sm lg:text-lg text-center">
							Get all the latest images from our gallery.
						</div>
					</div>
				</div>
			</div>
			{data?.data.length === 0 ? (
				<div className="text-center h-[40vh] flex justify-center items-center text-2xl">
					No images found
				</div>
			) : (
				<div className="p-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{data?.data.map((item: any) => (
						<Link
							href={`/gallery/${item.id}`}
							key={item.id}
							className="relative flex items-center justify-center h-[30vh]">
							<Image
								layout="fill"
								objectFit="cover"
								src={item?.images[0]?.image}
								alt=""
								className="object-cover rounded-md brightness-50 rotate-0"
							/>
							<div className="absolute text-center text-white text-xl font-medium">
								{item.name}
							</div>
						</Link>
					))}
				</div>
			)}
		</>
	);
};

export default MasonryGallery;
