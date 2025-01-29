import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/topbar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Toaster} from "react-hot-toast"

const inter = Inter({
	subsets: ["latin"],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	// metadataBase: new URL(""),
	title: "Jalpaiguri Government Engineering College Alumni Association.",
	description: "The alumni association of Jalpaiguri Government Engineering College.",
	keywords: "Jalpaiguri Government Engineering College, JGEC, Alumni Association, JGEC Alumni Association, Jalpaiguri",
	openGraph: {
		title: "Jalpaiguri Government Engineering College.",
		description:
			"The alumini association of Jalpaiguri Government Engineering College.",
		// url: 'https://cfi-jgec-new.vercel.app',
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="poppins-regular">
				<Topbar />
				<Navbar />
				<Toaster/>
				{children}
				<Footer />
			</body>
		</html>
	);
}
