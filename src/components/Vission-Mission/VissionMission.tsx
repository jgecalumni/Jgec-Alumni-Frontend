import Image from "next/image";
import AnimatedCounter from "./animated-counter";
import Testimonials from "./testimonials";
import SectionHeader from "../section-header";

const VisionMission: React.FC = () => {
	return (
		<>
			<SectionHeader
				highlightTitle="Vission "
				normalTitle="& Mission"
				description="Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need"
			/>
			{/* About Details */}
			<div className="flex lg:p-14 p-4 gap-10 flex-col items-center justify-normal">
				<div className="flex flex-col-reverse items-center justify-center">
					<div className="">
						<div className="flex items-center gap-2">
							<div className="border-2 rounded border-blue-400 h-10"></div>
							<h3 className="text-[#364150] font-semibold uppercase text-[20px] lg:text-[24px]">
								Vission
							</h3>
						</div>
						<ul className="text-[14px] text-justify mt-4 list-disc px-4 lg:px-10  max-w-fit w-[95%] lg:text-[16px] space-y-4">
							<li>
								To emerge as a strong co-ordination and healthy interaction
								between the college and its Alumni.
							</li>
							<li>
								To promote development of healthy socio-technical interaction
								with ethical values for creative engineering solutions
								commensurate with global challenges
							</li>
						</ul>
					</div>
					<Image
						src="/assets/JGEC-Logo.jpg"
						alt=""
						height={250}
						width={250}
						className="lg:w-[40%] mb-4 pr-8 lg:pt-8"
					/>
				</div>

				<div className="flex flex-col items-center justify-center">
					<Image
						src="/assets/JGECAA.jpg"
						alt=""
						height={250}
						width={250}
						className="lg:w-[40%] pr-8 lg:pt-8"
					/>
					<div className="">
						<div className="flex items-center gap-2">
							<div className="border-2 rounded border-blue-400 h-10"></div>
							<h3 className="text-[#364150] font-semibold uppercase text-[20px] lg:text-[24px]">
								Mission
							</h3>
						</div>
						<ul className="text-[14px] text-justify mt-4 text-clip list-disc lg:px-10 px-4 max-w-fit  lg:text-[16px] space-y-4">
							<li>
								Fostering an inspiring and conductive learning environment to
								prepare skilled and competent engineers and entrepreneurs for
								sustainable development of the society.
							</li>
							<li>
								Imparting innovative educational process through Bridging the
								Gap program for meeting the growing challenges of between
								Academia and Industry.
							</li>
							<li>
								Creating a knowledge centre of advanced technologies committed
								to societal growth using environment-friendly technologies as
								far as practicable.
							</li>
							<li>
								Distributing study materials and extending assistances to poor
								and or needy students as far as permissible.
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/*  */}
		</>
	);
};

export default VisionMission;
