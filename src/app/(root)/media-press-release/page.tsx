"use client";

import React, { useState, useMemo } from "react";
import {
  Play,
  Calendar,
  Youtube,
  Facebook,
  Search,
  Newspaper,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";

// --- Types ---
type MediaType = "youtube" | "facebook" | "image";

interface NewsItem {
  id: number;
  media: {
    type: MediaType;
    url: string;
  }[];
  tag: "Event" | "Notice" | "Achievement" | "Reunion";
  title: string;
  excerpt: string;
  date: string;
  location: string;
}

const EXTENDED_NEWS: NewsItem[] = [
  {
    id: 1,
    tag: "Event",
    title: "JECLAT 2k26: The Mahabharat Theme Reveal",
    excerpt: "The official trailer for our annual cultural extravaganza. A deep dive into the epic narrative that will define this year's campus festivities.",
    date: "Feb 24, 2026",
    location: "Main Auditorium",
    media: [
      { type: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { type: "image", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200" }
    ],
  },
  {
    id: 2,
    tag: "Reunion",
    title: "Class of 1976 Golden Jubilee Meet",
    excerpt: "A historic gathering of our veterans at the new IoT lab. Stories were shared, and a legacy was reaffirmed.",
    date: "Feb 20, 2026",
    location: "JGEC Campus",
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800" },
      { type: "image", url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800" }
    ],
  },
  {
    id: 3,
    tag: "Notice",
    title: "Industry Trends: VLSI Seminar",
    excerpt: "Alumni from Intel and NVIDIA shared insights with students regarding the future of semiconductor manufacturing.",
    date: "Feb 15, 2026",
    location: "Virtual",
    media: [
      { type: "facebook", url: "https://www.facebook.com/reel/3124907687712460" }
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

/**
 * Fetches YouTube thumbnails automatically. 
 * Uses a stylized fallback for Facebook videos.
 */
const getMediaThumbnail = (type: MediaType, url: string): string => {
  if (type === "youtube") {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
  }
  if (type === "facebook") {
    // Static brand-matched placeholder for FB videos
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
  };

  const nextMedia = () => setActiveMediaIndex((prev) => (prev + 1) % activeNews.media.length);
  const prevMedia = () => setActiveMediaIndex((prev) => (prev - 1 + activeNews.media.length) % activeNews.media.length);

  const filteredNews = useMemo(() => {
    return EXTENDED_NEWS.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === "All" || item.tag === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const currentMedia = activeNews.media[activeMediaIndex];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-12 px-4 md:px-8 font-serif text-[#1e293b]">
      <div className="max-w-[1920px] w-full mx-auto bg-white border border-slate-200 shadow-2xl overflow-hidden">
        
       

        <header className="p-8 border-b-4 border-double border-[#1a1c3d] text-center">
          <div className="flex justify-between items-center text-[10px] md:text-xs font-sans font-bold border-b border-slate-200 pb-2 mb-6 uppercase tracking-[0.2em] text-slate-400">
            <span>Vol. LXVI ... No. 2026</span>
            <span className="hidden md:block">Jalpaiguri Government Engineering College</span>
            <span>Est. 1961</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 font-serif italic text-[#1a1c3d]">
            Alumni <span className="not-italic text-[#506ab7]">Gazette</span>
          </h1>
          <div className="flex justify-between items-center border-t border-slate-200 pt-2 mt-2 text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-slate-500">
            <span>Last Updated: {activeNews.date}</span>
            <span className="flex items-center gap-2 text-[#10b981]"><Newspaper size={14} /> Official Despatches</span>
            <span className="hidden md:block text-[#1e3a8a]">Member Portal Active</span>
          </div>
        </header>

        {/* --- Search Bar --- */}
        <div className="flex flex-col md:flex-row border-b border-slate-200">
          <div className="flex-1 p-4 border-r border-slate-200 flex items-center gap-4 bg-slate-50">
            <Search size={18} className="text-[#1e3a8a]" />
            <input
              type="text"
              placeholder="Search Public Records..."
              className="bg-transparent outline-none w-full font-sans text-sm italic"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-1 p-2 overflow-x-auto bg-white">
            {["All", "Event", "Notice", "Achievement"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 text-[10px] font-sans font-black uppercase tracking-widest transition-all
                  ${activeFilter === tab ? "bg-[#1a1c3d] text-white shadow-lg shadow-blue-900/20" : "text-slate-500 hover:bg-slate-100"}
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- Main Content --- */}
        <div className="flex flex-col lg:flex-row min-h-[850px]">
          
          {/* LEFT: Lead Story Panel */}
          <div className="lg:w-7/12 p-8 lg:border-r border-slate-200">
            <div className="sticky top-44 space-y-8">
              
              {/* Media Gallery Wrapper */}
              <div className="relative border-[12px] border-slate-50 shadow-inner group overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-slate-900 ring-1 ring-slate-200 relative">
                  {currentMedia.type === "image" ? (
                    <img src={currentMedia.url} className="w-full h-full object-cover block" alt="" />
                  ) : (
                    <iframe
                      className="w-full h-full block"
                      src={getMediaEmbedUrl(currentMedia.type, currentMedia.url)}
                      allowFullScreen
                      scrolling="no"
                    />
                  )}

                  {/* Navigation for Multi-Media */}
                  {activeNews.media.length > 1 && (
                    <>
                      <button onClick={prevMedia} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 hover:bg-[#1a1c3d] hover:text-white transition-all shadow-xl"><ChevronLeft size={20} /></button>
                      <button onClick={nextMedia} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 hover:bg-[#1a1c3d] hover:text-white transition-all shadow-xl"><ChevronRight size={20} /></button>
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 text-[10px] font-sans font-bold">
                        {activeMediaIndex + 1} / {activeNews.media.length}
                      </div>
                    </>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-[#6b21a8] text-white px-3 py-1 text-[9px] font-sans font-bold uppercase tracking-widest shadow-lg">
                  {currentMedia.type} / Archive
                </div>
              </div>

              {/* Story Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-xs font-sans font-black uppercase tracking-widest text-[#10b981]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" /> Lead Story
                </div>
                <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase text-[#1a1c3d]">
                  {activeNews.title}
                </h2>
                <div className="columns-1 md:columns-2 gap-10 text-base leading-relaxed text-justify italic border-t border-slate-100 pt-6 text-slate-600">
                  <p className="first-letter:text-6xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-[#1a1c3d] first-letter:not-italic">
                    {activeNews.excerpt}
                  </p>
                  <div className="mt-6 md:mt-0 font-sans font-bold text-[11px] not-italic text-[#1e3a8a] uppercase tracking-tighter bg-blue-50 p-4 border-l-4 border-[#1e3a8a]">
                    Location: {activeNews.location} <br />
                    Filing Date: {activeNews.date}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Recent Despatches Feed */}
          <div className="lg:w-5/12 bg-white">
            <div className="p-4 bg-[#1a1c3d] text-white flex justify-between items-center font-sans font-bold text-[10px] uppercase tracking-widest">
              <span>Latest Despatches</span>
              <span className="opacity-60 italic">Scroll for more</span>
            </div>

            <div className="h-[850px] overflow-y-auto custom-newspaper-scrollbar divide-y divide-slate-100">
              {filteredNews.length > 0 ? (
                filteredNews.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleNewsChange(item)}
                    className={`group cursor-pointer p-6 transition-all flex gap-6
                      ${activeNews.id === item.id ? "bg-slate-50 border-l-4 border-[#6b21a8]" : "hover:bg-slate-50/50"}
                    `}
                  >
                    <div className="h-24 w-24 shrink-0 border border-slate-200 p-1 bg-white shadow-sm relative overflow-hidden transition-all group-hover:shadow-md">
                      <img 
                        src={getMediaThumbnail(item.media[0].type, item.media[0].url)} 
                        className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all`} 
                        alt="" 
                      />
                      {item.media.length > 1 && (
                        <div className="absolute top-1 left-1 bg-white border border-black p-0.5 shadow-sm"><Camera size={10} /></div>
                      )}
                      {item.media[0].type !== "image" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent">
                          <Play size={16} className="text-white fill-white opacity-80" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-sans font-black uppercase tracking-tighter text-[#6b21a8] border-b border-black">
                          {item.tag}
                        </span>
                        <span className="text-[10px] font-sans text-slate-400 font-bold uppercase">
                          <Clock size={10} /> {item.date}
                        </span>
                      </div>
                      <h4 className={`text-xl font-bold leading-tight transition-all
                        ${activeNews.id === item.id ? "text-[#1a1c3d] underline decoration-1" : "text-slate-500 group-hover:text-[#1e3a8a]"}
                      `}>
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-32 text-center italic font-sans text-slate-400 uppercase tracking-widest text-xs">No Records Found</div>
              )}
            </div>

            {/* Newsletter CTA */}
            <div className="p-8 border-t border-slate-100 bg-slate-50">
              <div className="border border-slate-200 p-6 bg-white text-center">
                <h4 className="font-serif font-black text-xl uppercase text-[#1a1c3d] mb-1">Gazette Registry</h4>
                <p className="font-sans text-[10px] font-bold text-slate-400 mb-6 tracking-widest uppercase">The Alumni Monthly Correspondence</p>
                <div className="flex border border-black overflow-hidden">
                  <input type="email" placeholder="EMAIL ADDRESS" className="flex-1 px-4 py-3 text-[10px] font-sans outline-none bg-transparent" />
                  <button className="bg-[#1a1c3d] text-white px-6 text-[10px] font-black uppercase hover:bg-black">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-newspaper-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-newspaper-scrollbar::-webkit-scrollbar-track { background: #ffffff; }
        .custom-newspaper-scrollbar::-webkit-scrollbar-thumb { background: #1a1c3d; }
      `}</style>
    </div>
  );
}