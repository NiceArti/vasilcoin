"use client";

import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HowToUse } from "@/components/how-to-use-sections";
import { ListingSection } from "@/components/listing-section";
import { PartnersSection } from "@/components/partners-section";
import { TokenomicsSection } from "@/components/tokenomics-section";
import { Toaster } from "@/components/ui/sonner";
import { ValuesSection } from "@/components/values-section";
import Marquee from "react-fast-marquee";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosInformationCircle, IoMdCloseCircle } from "react-icons/io";

export default function Home() {
	return (
		<div className="xl:overflow-x-clip">
			<HeroSection />
			<Marquee
				className="w-full h-full mt-10 md:mt-16 pointer-events-none bg-[#FFB5C0] md:py-8 py-3 border-y-2 md:border-y-4 border-black"
				autoFill
				pauseOnClick
			>
				<div className="mr-4 font-bold text-xl md:text-[52px] md:py-4">$ VASILCOIN</div>
			</Marquee>

			<AboutSection />
			<ValuesSection />
			<ListingSection />
			<HowToUse />
			<TokenomicsSection />
			<PartnersSection />
			<Footer />

			{/* Extensions */}
			<Toaster
				className="rounded-full"
				toastOptions={{
					duration: 3_000,
					className:
						"rounded-full bg-[#FBAC01] text-black border p-0 py-4 text-base overflow-hidden shadow-[3px_3px_0px_black]",
					classNames: {
						icon: "size-auto",
						success: "bg-[#FBAC01] py-3 px-4",
						warning: "bg-[#FBAC01] py-3 px-4",
						error: "bg-[#FBAC01] py-3 px-4",
					},
				}}
				icons={{
					success: (
						<div className="rounded-full p-1 bg-[#D9D9D9]/10 text-black">
							<FaCheckCircle className="text-2xl pl-[1px]" />
						</div>
					),
					warning: (
						<div className="rounded-full p-1 bg-[#D9D9D9]/10 text-black">
							<IoIosInformationCircle className="text-2xl pl-[1px]" />
						</div>
					),
					error: (
						<div className="rounded-full p-1 bg-[#D9D9D9]/10 text-black">
							<IoMdCloseCircle className="text-2xl pl-[1px]" />
						</div>
					),
				}}
			/>
		</div>
	);
}
