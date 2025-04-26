"use client";
import Loading from "@/app/Loader";
import { useGetCategoryByIdQuery } from "@/store/feature/gallery-feature";
import Image from "next/image";
import React from "react";
interface EventParams {
	params: { id: string };
}
const Page: React.FC<EventParams> = ({ params }: EventParams) => {
	const { id } = params;
	const { data, isLoading, isError, error } = useGetCategoryByIdQuery(id);
	if (isLoading) {
		return <Loading />;
	}

	const handleImageClick = (image: string) => {
        const modal = document.createElement("div");
        modal.className =
            "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 opacity-0 scale-95 transition-all duration-300";
    
        // Click outside closes modal
        modal.onclick = () => {
            document.body.removeChild(modal);
        };
    
        const img = document.createElement("img");
        img.src = image;
        img.className = "max-w-full max-h-full rounded shadow-lg";
    
        // Prevent closing when clicking on the image
        img.onclick = (e) => {
            e.stopPropagation();
        };
        modal.appendChild(img);
        document.body.appendChild(modal);
    
        // Animate after append
        setTimeout(() => {
            modal.classList.remove("opacity-0", "scale-95");
            modal.classList.add("opacity-100", "scale-100");
        }, 10);
    };
    
	return (
		<div>
			<div className="lg:mt-[8em] mt-[6em] h-[60vh] overflow-hidden">
				<div className="h-full rotate-0 w-full">
					<Image
						layout="fill"
						objectFit="cover"
						src={data.data.images[0].image}
						alt=""
						className="object-cover brightness-[30%]"
					/>
					<div className="text-white h-full w-full top-0 flex flex-col items-center justify-center gap-2 absolute">
						<div className="md:text-5xl text-5xl text-white font-medium">
							<span className="text-blue-400">{data.data.name}</span>
						</div>
						<div className="text-sm lg:text-sm text-center">
							Get all the latest images from our gallery.
						</div>
					</div>
				</div>
			</div>
			{data?.data.images.length === 0 && (
				<div className="text-center h-screen flex justify-center items-center text-2xl">
					No images found
				</div>
			)}
			<div className="p-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{data?.data.images.map((item: any) => (
					<div
						onClick={() => handleImageClick(item.image)}
						key={item.id}
						className=" rotate-0 hover:scale-105 duration-200 cursor-pointer flex items-center justify-center h-[30vh]">
						<Image
							layout="fill"
							objectFit="cover"
							src={item.image}
							alt=""
							className="object-cover rounded-md  rotate-0"
						/>
					</div>
				))}
			</div>
		</div>
	);
};



export default Page;
