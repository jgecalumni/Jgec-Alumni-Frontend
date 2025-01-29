"use client";
import Image from "next/image";
import React from "react";

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
			<div className="lg:columns-4 rotate-0 columns-2 gap-4 lg:gap-2 lg:p-14 p-4 ">
				{photos.map((photo) => (
					<div
						key={photo.id}
						className=" p-1 pt-2 rotate-0 ">
						<Image
							width={400}
							height={400}
							src={photo.url}
							alt=""
							className=" rounded-lg shadow-md"
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default MasonryGallery;
