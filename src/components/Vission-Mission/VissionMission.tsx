import Image from "next/image";
import AnimatedCounter from "./animated-counter";
import Testimonials from "./testimonials";
import SectionHeader from "../section-header";

const VisionMission: React.FC = () => {
	return (
		<>
			<SectionHeader
				highlightTitle="About"
				normalTitle="Us"
				description="Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need"
			/> 
			{/* About Details */}
			<div className="py-16 w-full flex justify-center flex-col items-center  bg-[#edf1f4] gap-12">
				<div className=" relative  shadow-xl bg-neutral-50  rounded-md lg:w-2/3 w-[90%] xl:h-full lg:h-full md:h-full my-10 2xl:h-full ">
					<div className="absolute rotate-0 right-0 -top-[0.8em] text-5xl sm:text-6xl text-neutral-50">
						2010
					</div>
					<div className="h-2/3 lg:w-1/2 overflow-hidden  lg:absolute rotate-0 -top-[2em] -left-[4em]">
						<Image
							loading="lazy"
							src="https://codeboxr.net/themedemo/unialumni/html/assets/images/about-page/about-img-1.jpg"
							alt="alumni-image"
							width={200}
							height={200}
							className="h-full rounded-md w-full object-cover max-lg:rounded-b-none"
						/>
					</div>
					<div className="p-4  lg:flex  flex-col items-end xl:gap-2 h-fit ">
						<h1 className="lg:text-2xl text-left mb-3 lg:w-[55%] font-semibold md:text-xl">
							ESTD of This Alumni Association
						</h1>
						<p className="md:text-base text-sm lg:w-[55%] mb-4">
							The Alumni association got registration on 22 nd day of April 2010
							from Registrar of Societies West Bengal Act XXVI of 1961 vide
							No:-S/L/70053 of 2010-11 after obtaining permission from Principal
							Dr. Jyotirmoy Jhampati to function from College Administrative
							Building in his letter to Mr.D. Sarkar, thee then President of the
							Alumni Association, dated 07/04/2010.
						</p>
						<p className="text-sm md:text-base">
							To achieve vision &amp; mission, the Alumni Association shall have
							a broad based Executive committee comprising of representing any
							chapter, centre, area, group of member by way of invitation and or
							representation, representatives of teachings, non-teaching,
							students forums of the college, shall have the volume of members
							not exceeding 15(fifteen) and shall recommend, advice, suggest,
							forward its observations and programmes as are felt assessed
							helpful in attainment of objectives of the Association.
						</p>
					</div>
				</div>
				<div className=" relative rounded-md  shadow-xl bg-neutral-50 lg:w-2/3 w-[90%] ">
					<div className="absolute rotate-0 left-0 -top-[0.8em] text-5xl sm:text-6xl text-neutral-50 ">
						2010
					</div>
					<div className="h-[60%] lg:w-1/2 overflow-hidden lg:absolute rotate-0 -top-[2em] -right-[4em]">
						<Image
							loading="lazy"
							src="https://codeboxr.net/themedemo/unialumni/html/assets/images/about-page/about-img-1.jpg"
							alt="alumni image"
							className="h-full w-full rounded-md object-cover max-lg:rounded-b-none"
							width={200}
							height={200}
						/>
					</div>
					<div className="flex p-4 flex-col  gap-2  h-fit ">
						<div className="lg:text-2xl text-left mb-3 lg:w-[55%] font-semibold md:text-xl">
							Our Vision & Mission
						</div>
						<div className=" text-sm px-5 md:text-base lg:w-[55%]">
							<ul className=" list-disc flex flex-col gap-2">
								<li>
									To develop and maintain functional co-ordination between the
									Alumni and the college.
								</li>
								<li>
									To promote close and healthy interaction between members to
									facilitate mutual development.
								</li>
								<li>
									To foster activities conducive towards the cause of overall
									academic elevation of the college.
								</li>
								<li>
									To arrange extension lectures, debates, discussions, seminars,
									workshop, conferences, educational tours, exhibitions, etc. as
									far as practicable.
								</li>
								<li>
									To distribute study materials and extend assistance to poor
									and or needy students as far as permissible.
								</li>
							</ul>
						</div>
						<div className="text-sm px-5 md:text-base">
							<ul className="list-disc flex flex-col gap-2">
								<li>
									To co-ordinate training and placement programmes of the
									college.
								</li>
								<li>
									To promote development of healthy socio-technical interaction
									with the Society by way of conducting awareness and appraisal
									programmes of demanding events such as energy management,
									management of carbon emission, disaster management, domestic
									and industrial discharge management and management of
									Socio-Industrial hazards, management of natural resources like
									water, foresting etc, and such other activities as may deem
									necessary and beneficiary towards the cause of the Association
									in general.
								</li>
								<li>
									To organize, promote or undertaken such other activities, or
									functions as are considered beneficial or conducive towards
									attainment of the objects of the Association.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<AnimatedCounter />
			<div className=" py-16 bg-white w-full flex items-center flex-col px-4  mb-10">
				<div className="flex flex-col items-center w-full mb-10">
					<div className="md:text-4xl sm:text-3xl text-2xl text-center font-medium">
						Our Honorable Committee
					</div>
					<div className="w-[15%] my-2 border-2 rounded-full border-primary"></div>
				</div>
				{/* Member Details */}
				<div className="w-full  flex flex-wrap justify-center gap-x-8 gap-y-20">
					{[1, 2, 3, 4, 5, 6].map((item) => (
						<div key={item} className=" relative group rounded-md  duration-200 h-full max-h-96 w-full max-w-72 ">
							<Image
								loading="lazy"
								src="https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-1.jpg"
								alt="person"
								width={300}
								height={500}
								className="object-cover duration-200  group-hover:brightness-50 rounded-md group-hover:-translate-y-3 h-full max-h-96 w-full  max-w-72"
							/>
							<div className="min-h-12 group-hover:-translate-y-3 duration-200 absolute flex justify-center items-center rotate-0 -bottom-8 w-full ">
								<div className="bg-blue-200 h-full rounded-md w-56 flex items-center justify-center text-neutral-950 font-medium flex-col p-2 gap-1">
									<p>Dr. Jyotirmoy Jhampati</p>
									<p className="text-sm font-medium text-neutral-600">President</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Testimonials />
		</>
	);
};

export default VisionMission;
