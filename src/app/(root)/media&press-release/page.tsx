"use client";

import React, { useState, useMemo } from "react";
import {
	Play,
	Youtube,
	Search,
	Newspaper,
	Clock,
	ChevronLeft,
	ChevronRight,
	Camera,
} from "lucide-react";

// --- Types ---
type MediaType = "youtube" | "facebook" | "image";

interface NewsItem {
	id: number;
	media: {
    id:number;
		type: MediaType;
		url: string;
    newsId:number;
	}[];
	tag: "Event" | "Notice" | "Achievement" | "Reunion";
	title: string;
	excerpt: string;
	createdAt: string;
	location: string;
}

const EXTENDED_NEWS: NewsItem[] = [
	
	{
		id: 9,
		tag: "Event",
		title: "Empowering the Next Generation: Skill Development Seminar 2026",
		excerpt:
			"Our esteemed alumni returned to campus to host an intensive workshop on emerging industry trends, professional networking, and soft-skill mastery. This seminar bridged the gap between academic theory and real-world application.",
		location: "JGEC Campus",
		createdAt: "2026-02-25T13:55:21.310Z",
		media: [
			{
				id: 32,
				type: "image",
				url: "https://res.cloudinary.com/daanphoru/image/upload/v1772027718/media_press/2026-February/ckfxeoixzq3yu2gy5rvc.jpg",
				newsId: 9,
			},
			{
				id: 33,
				type: "image",
				url: "https://res.cloudinary.com/daanphoru/image/upload/v1772027720/media_press/2026-February/hz4fkecssjytzieay9rw.jpg",
				newsId: 9,
			},
			{
				id: 34,
				type: "facebook",
				url: "https://www.facebook.com/reel/1941734716462410",
				newsId: 9,
			},
			{
				id: 35,
				type: "facebook",
				url: "https://www.facebook.com/reel/3124907687712460",
				newsId: 9,
			},
		],
	},
];

// --- Utilities ---

const getMediaEmbedUrl = (type: MediaType, url: string) => {
	if (type === "youtube") {
		const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
		return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
	}
	if (type === "facebook") {
		return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0&width=560`;
	}
	return url;
};

const getMediaThumbnail = (type: MediaType, url: string): string => {
	if (type === "youtube") {
		const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
		return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
	}
	if (type === "facebook") {
		return "https://graph.facebook.com/3124907687712460/picture?type=large";
	}
	return url;
};

export default function JGECNewspaperFeed() {
	const [activeNews, setActiveNews] = useState<NewsItem>(EXTENDED_NEWS[0]);
	const [activeMediaIndex, setActiveMediaIndex] = useState(0);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState("All");

	const handleNewsChange = (news: NewsItem) => {
		setActiveNews(news);
		setActiveMediaIndex(0);
		// Scroll to top of story on mobile when selecting from list
		if (window.innerWidth < 1024) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const nextMedia = (e: React.MouseEvent) => {
		e.stopPropagation();
		setActiveMediaIndex((prev) => (prev + 1) % activeNews.media.length);
	};

	const prevMedia = (e: React.MouseEvent) => {
		e.stopPropagation();
		setActiveMediaIndex(
			(prev) => (prev - 1 + activeNews.media.length) % activeNews.media.length,
		);
	};

	const filteredNews = useMemo(() => {
		return EXTENDED_NEWS.filter((item) => {
			const matchesSearch = item.title
				.toLowerCase()
				.includes(searchQuery.toLowerCase());
			const matchesFilter = activeFilter === "All" || item.tag === activeFilter;
			return matchesSearch && matchesFilter;
		});
	}, [searchQuery, activeFilter]);

	const currentMedia = activeNews.media[activeMediaIndex];

	return (
		<div className="min-h-screen bg-slate-100 pt-32 md:pt-32 lg:pt-40 pb-6 md:pb-12 px-2 md:px-8 font-serif text-slate-900">
			<div className="max-w-[1440px] w-full mx-auto bg-white border border-slate-300 shadow-xl overflow-hidden">
				<header className="p-4 md:p-8 border-b-4 border-double border-slate-900 text-center">
					<div className="flex justify-between items-center text-[8px] md:text-xs font-sans font-bold border-b border-slate-200 pb-2 mb-4 md:mb-6 uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-500">
						<span>Vol. LXVI ... No. 2026</span>
						<span className="hidden sm:block">
							Jalpaiguri Government Engineering College
						</span>
						<span>Est. 1961</span>
					</div>

					<h1 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 md:mb-4 font-serif non-italic text-slate-900">
						Media & <span className="not-italic text-indigo-700">Press Releases</span>
					</h1>

					<div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-2 mt-2 gap-2 text-[9px] md:text-xs font-sans font-bold uppercase tracking-widest text-slate-500">
						<span className="order-2 md:order-1">
							Last Updated: {activeNews.createdAt}
						</span>
						<span className="flex items-center gap-2 text-emerald-600 order-1 md:order-2">
							<Newspaper
								size={14}
								className="hidden xs:block"
							/>{" "}
							Official Despatches
						</span>
						<span className="hidden lg:block text-blue-900 order-3">
							Member Portal Active
						</span>
					</div>
				</header>

				{/* --- Search & Filters --- */}
				<div className="flex flex-col md:flex-row border-b border-slate-200">
					<div className="flex-1 p-3 md:p-4 border-b md:border-b-0 md:border-r border-slate-200 flex items-center gap-3 bg-slate-50">
						<Search
							size={16}
							className="text-slate-500"
						/>
						<input
							type="text"
							placeholder="Search Public Records..."
							className="bg-transparent outline-none w-full font-sans text-xs md:text-sm italic"
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
					<div className="flex gap-1 p-1 md:p-2 overflow-x-auto no-scrollbar bg-white whitespace-nowrap">
						{["All", "Event", "Notice", "Achievement"].map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveFilter(tab)}
								className={`px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-sans font-black uppercase tracking-widest transition-all
                  ${activeFilter === tab ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"}
                `}>
								{tab}
							</button>
						))}
					</div>
				</div>

				{/* --- Main Body --- */}
				<div className="flex flex-col lg:flex-row">
					{/* LEFT: Lead Story Panel */}
					<div className="lg:w-2/3 p-4 md:p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200">
						<div className="lg:sticky lg:top-10 space-y-6">
							{/* Media Gallery */}
							<div className="relative border-4 md:border-[12px] border-slate-100 shadow-sm group">
								<div className="aspect-video w-full overflow-hidden bg-black relative">
									{currentMedia.type === "image" ? (
										<img
											src={currentMedia.url}
											className="w-full h-full object-cover"
											alt=""
										/>
									) : (
										<iframe
											className="w-full h-full"
											src={getMediaEmbedUrl(
												currentMedia.type,
												currentMedia.url,
											)}
											allowFullScreen
										/>
									)}

									{activeNews.media.length > 1 && (
										<div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 pointer-events-none">
											<button
												onClick={prevMedia}
												className="pointer-events-auto bg-white/90 p-1.5 md:p-2 hover:bg-slate-900 hover:text-white transition-colors shadow-lg">
												<ChevronLeft size={18} />
											</button>
											<button
												onClick={nextMedia}
												className="pointer-events-auto bg-white/90 p-1.5 md:p-2 hover:bg-slate-900 hover:text-white transition-colors shadow-lg">
												<ChevronRight size={18} />
											</button>
										</div>
									)}
								</div>
								<div className="absolute top-2 right-2 md:top-4 md:right-4 bg-purple-700 text-white px-2 py-1 text-[8px] md:text-[10px] font-sans font-bold uppercase tracking-widest shadow-md">
									{currentMedia.type}
								</div>
							</div>

							{/* Story Heading */}
							<div className="space-y-4">
								<div className="flex items-center gap-2 text-[10px] md:text-xs font-sans font-black uppercase tracking-widest text-emerald-600">
									<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
									Lead Story
								</div>
								<h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-black leading-[0.95] tracking-tighter uppercase text-slate-900">
									{activeNews.title}
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-sm md:text-base leading-relaxed text-justify italic border-t border-slate-100 pt-6 text-slate-700">
									<p className="first-letter:text-5xl md:first-letter:text-6xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:text-slate-900 first-letter:not-italic">
										{activeNews.excerpt}
									</p>
									<div className="font-sans font-bold text-[10px] md:text-[11px] not-italic text-blue-900 uppercase tracking-tight bg-slate-50 p-4 border-l-4 border-blue-900">
										Location: {activeNews.location} <br />
										Filing Date: {activeNews.createdAt}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT: Feed Pane */}
					<div className="lg:w-1/3 bg-white">
						<div className="p-3 bg-slate-900 text-white flex justify-between items-center font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-widest">
							<span>Latest Despatches</span>
							<span className="opacity-60 italic">Scroll for more</span>
						</div>

						<div className="max-h-[400px] lg:max-h-[none] lg:h-[calc(100vh-200px)] overflow-y-auto custom-newspaper-scrollbar divide-y divide-slate-100">
							{filteredNews.length > 0 ? (
								filteredNews.map((item) => (
									<div
										key={item.id}
										onClick={() => handleNewsChange(item)}
										className={`group cursor-pointer p-4 transition-all flex gap-4
                      ${activeNews.id === item.id ? "bg-slate-50 border-l-4 border-purple-700" : "hover:bg-slate-50/50"}
                    `}>
										<div className="h-16 w-16 md:h-20 md:w-20 shrink-0 border border-slate-200 p-1 bg-white relative overflow-hidden">
											<img
												src={getMediaThumbnail(
													item.media[0].type,
													item.media[0].url,
												)}
												className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
												alt=""
											/>
											{item.media.length > 1 && (
												<div className="absolute top-0.5 left-0.5 bg-white border border-slate-900 p-0.5 shadow-sm">
													<Camera size={8} />
												</div>
											)}
											{item.media[0].type !== "image" && (
												<div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent">
													<Play
														size={14}
														className="text-white fill-white opacity-80"
													/>
												</div>
											)}
										</div>

										<div className="flex flex-col justify-center min-w-0">
											<div className="flex items-center gap-2 mb-1">
												<span className="text-[8px] font-sans font-black uppercase text-purple-700 border-b border-purple-700">
													{item.tag}
												</span>
												<span className="text-[8px] font-sans text-slate-400 font-bold uppercase flex items-center gap-1">
													<Clock size={8} /> {item.createdAt}
												</span>
											</div>
											<h4
												className={`text-sm md:text-base font-bold leading-tight transition-all
                        ${activeNews.id === item.id ? "text-slate-900 underline" : "text-slate-500 group-hover:text-blue-900"}
                      `}>
												{item.title}
											</h4>
										</div>
									</div>
								))
							) : (
								<div className="py-20 text-center italic font-sans text-slate-400 uppercase tracking-widest text-[10px]">
									No Records Found
								</div>
							)}
						</div>

						{/* Newsletter CTA */}
						<div className="p-4 md:p-6 bg-slate-50 border-t border-slate-200">
							<div className="border border-slate-300 p-4 bg-white text-center">
								<h4 className="font-serif font-black text-lg uppercase text-slate-900">
									Gazette Registry
								</h4>
								<p className="font-sans text-[9px] font-bold text-slate-400 mb-4 tracking-widest uppercase">
									Monthly Correspondence
								</p>
								<div className="flex border border-slate-900 overflow-hidden">
									<input
										type="email"
										placeholder="EMAIL"
										className="flex-1 px-3 py-2 text-[10px] font-sans outline-none bg-transparent min-w-0"
									/>
									<button className="bg-slate-900 text-white px-4 text-[10px] font-black uppercase hover:bg-black">
										Join
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.custom-newspaper-scrollbar::-webkit-scrollbar {
					width: 4px;
				}
				.custom-newspaper-scrollbar::-webkit-scrollbar-track {
					background: transparent;
				}
				.custom-newspaper-scrollbar::-webkit-scrollbar-thumb {
					background: #0f172a;
				}
				.no-scrollbar::-webkit-scrollbar {
					display: none;
				}
				.no-scrollbar {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
			`}</style>
		</div>
	);
}
