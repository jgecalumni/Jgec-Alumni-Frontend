"use client"
import React from "react";
import SectionHeader from "../section-header";
import { Download, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/app/Loader";
import { useGetAllAgmMomDocsQuery } from "@/store/feature/document-feature";

const AgmMom = () => {
	const {
		data: docsData,
		isLoading: docsLoading,
		isError: docsisError,
		error: docsError,
		refetch,
	} = useGetAllAgmMomDocsQuery({});
	if (docsLoading) {
		return <Loading />;
	}

	const handleDownload = async (url: string, filename: string) => {
		try {
			const response = await fetch(url);
			const blob = await response.blob();
			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);
			link.download = filename || "download.pdf"; // Default filename
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Download failed:", error);
		}
	};
	return (
		<div>
			<SectionHeader
				highlightTitle="AGM"
				normalTitle="MOM"
				description="Get all AGM MOM documents here"
			/>
			<div
				className={`${
					docsData?.response.length > 0 ? "h-screen" : " h-[40vh]"
				} flex items-center justify-center`}>
				<div className="my-8 lg:w-[80%] p-3 ">
					{docsData?.response.length > 0 ? (
						<div className=" bg-slate-100 mb-8 rounded overflow-y-auto h-[40vh] lg:h-[80vh]">
							<div className="font-medium rounded bg-slate-200 p-2">
								AGM MOM
							</div>
							<div className="p-4 grid lg:grid-cols-5 lg:gap-3 grid-cols-2 gap-3 ">
								{docsData?.response.map((item: any) => (
									<div
										key={item.title}
										className="group rounded border shadow-lg flex flex-col items-center bg-[#f2f2f2] w-[18vh]  h-[18vh]  lg:w-[30vh] lg:h-[20vh] relative overflow-hidden">
										<div className="mt-7 lg:mt-8">
											<Image
												src="/assets/pdf.png"
												width={40}
												height={40}
												alt=""
											/>
										</div>

										<div className="bg-white absolute bottom-0 w-full p-2 group-hover:p-3 group-hover:h-full transition-all duration-300 h-[26%]">
											<div className="flex gap-1 group-hover:items-start items-center line-clamp-1 text-xs">
												<Image
													src="/assets/pdf.png"
													width={20}
													height={20}
													alt=""
												/>
												<div className=" line-clamp-1 group-hover:line-clamp-2">
													{item.title}
												</div>
											</div>
											<div className="mt-5 flex gap-6 justify-center items-center p-4">
												<Link
													href={item.link}
													target="_blank">
													<Eye
														size={19}
														cursor={"pointer"}
													/>
												</Link>
												<Download
													size={19}
													cursor={"pointer"}
													onClick={() =>
														handleDownload(item.link, `${item.title}.pdf`)
													}
												/>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						<>
							<div className="w-full flex items-center justify-center">
								No documents found
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default AgmMom;
