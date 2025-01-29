import React from "react";
import SectionHeader from "../section-header";
import Link from "next/link";

const Takeatrip: React.FC = () => {
	return (
		<div>
			<SectionHeader
				highlightTitle="Take a"
				normalTitle="Trip"
				description="Brief introduction about the alumni association of Jalpaiguri Government Engineering College."
			/>
			<div className="lg:px-14 lg:p-8 p-2">
				<div className="flex items-center gap-2">
					<div className="border-2 rounded border-blue-400 h-10"></div>
					<h3 className="text-[#364150] font-semibold uppercase text-[16px] lg:text-[24px]">
						ALUMNI ASSOCIATION ACTIVITIES at JGEC Campus
					</h3>
				</div>
				<div className="p-4 space-y-8">
					<ul className="space-y-4 pl-4 list-disc text-sm">
						<li>
							JGEC Alumni Association started its journey at JGEC campus in the
							year 2010 with registration from Registrar of Societies West
							Bengal Act XXVI of 1961 vide No:-S/L/70053 of 2010-11.
						</li>
						<li>
							The breakthrough was the first National Level Seminar in the year
							2011. It was just a beginning. Since then, regular seminars &
							workshops are organized at JGEC Campus.
						</li>
						<li>
							The year 2012 was special. To Communicate the Alumni Voice, Alumni
							Association started its Official Website.
						</li>
						<li>
							The whole purpose was to Giving Back to Alma Mater! Giving Back to
							Society!
						</li>
						<li>
							To honor this spirit, alumnus & their families came forward to
							initiate Scholarship Programs in the year 2013.
						</li>
						<li>
							In the year 2014, an available private land inside JGEC campus was
							purchased by Alumni Association, to build a three-story convention
							centre, Kanchenjunga!
						</li>
						<li>
							In 2020, the ground floor for Kanchenjunga is ready with enormous
							support from beloved alumnus who took it as an opportunity to
							connect to the root, with a bigger social cause.
						</li>
					</ul>

					<div>
						<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
							Bridging the Gap :
						</h3>
						<p className="text-sm text-black mt-2">
							In a nutshell, we can divide Alumni Association activities in few
							verticals, such as Seminar & Workshops, Scholarship Program,
							Innovation Drive, Project Kanchenjunga, Branding JGEC, Social
							Platform, etc.
						</p>
					</div>

					<div>
						<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
							Seminar & Workshops :
						</h3>
						<p className="text-sm text-black mt-2">
							Regular seminars and workshops are organized at Campus for the
							students of JGEC. Our Respected Alumnus from across the globe
							visit campus to guide students. Also, senior people from industry
							(like President of Indo-American Chamber of Commerce) and academia
							(like Director & Professors of IITs) visit campus.
						</p>
					</div>

					<div>
						<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
							Webinar :
						</h3>
						<p className="text-sm text-black mt-2">
							During Covid, Alumni Association regularly organize online
							Webinar, which is led by Ms. Evelyn Bhunia, 2001 batch. In
							addition to that, Industry Meet 2020 was organized under
							leadership of Ms. Bornali Sarkar, 1999 batch.
						</p>
					</div>

					<div>
						<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
							Scholarship Program :
						</h3>
						<p className="text-sm text-black mt-2">
							Scholarship Program initiated in 2013 with 2 schemes. It is
							growing fast as more alumnus and their families are connecting
							with campus. Through scholarship interview session, students get
							face to face interaction opportunity to leaders from Industry and
							Academia.
						</p>
					</div>

					<div>
						<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
							Important Features of Scholarship Program 2024 :
						</h3>
						<ul className="list-decimal text-black mt-2 pl-4 space-y-2 text-sm">
							<li>Total no. of Scholarship Schemes: 31</li>
							<li>
								No. of students to be benefitted through the Scholarship
								Program: 56
							</li>
							<li>
								Total Scholarship Amount: Approximately Rs.10,00,000/- (Rs Ten
								Lacs only)
							</li>
						</ul>
						<p className="text-sm font-medium text-black mt-2">
							Interested brothers and sisters have applied for the Scholarship
							Schemes for 2024 and the 1:1 interview & processing is underway,
							with active participation of Respected sponsors, beloved JGEC
							students and Respected Professors. (
							<Link
								className="text-red-500 hover:underline"
								href="/scholarships">
								Apply here
							</Link>
							)
						</p>
					</div>

					<div>
						<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
							Intra College Innovation Challenge :
						</h3>
						<p className="text-sm text-black mt-2">
							The program used to organized twice at JGEC Campus to encourage
							innovation and nurture young talents. The program used to
							organized in coordination with Center for Innovation. Students
							participate to showcase their innovative ideas with physical and
							mathematical models. It was started since 2016/17.
						</p>
					</div>

					<div>
						<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
							Kanchenjunga :
						</h3>
						<p className="text-sm text-black mt-2">
							The G+2 State of the Art, Convention Center is under construction.
							Kanchenjunga will be a self sustainable development centre with
							classroom, conference hall, meeting room, mini library cum reading
							room along with 5 guest rooms for accommodation. The aim is to
							create a Hallmark Center for enhancing Brand JGEC.
						</p>
					</div>

					<div>
						<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
							Construction Status of Kanchenjunga as on 23rd March'24 :
						</h3>
						<p className="text-sm text-black mt-2">
							Electrical connection received.
						</p>
						<ul className="list-decimal text-black mt-2 pl-4 space-y-2 text-sm">
							<li>
								Ground floor: construction completed - Inaugurated on Aug'22.
							</li>
							<li>
								First Floor: 90% construction completed- ready with Five Guest
								Room and one Liabary Room.
							</li>
							<li>Second Floor : 50% roof casting completed.</li>
							<li>
								Second Floor: For Balance portion - Brick work upto Lintel
								completed.
							</li>
						</ul>
						<p className="text-sm text-black mt-3">
							Fund drive for remaining construction of first floor is under
							progress.
						</p>
						<p className="text-sm font-medium text-black mt-2">
							KANCHENJUNGA is built by Alumnus of JGEC campus. Alumni
							Association conduct extensive fund drive with a brand name Buy a
							Brick. The fund drive initiative is also an opportunity for
							reconnecting with our beloved campus
						</p>
					</div>

					<div>
						<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
							Brand JGEC :
						</h3>
						<ul className="list-decimal text-black mt-2 pl-4 space-y-3 text-sm">
							<li className="space-y-2">
								<p className="text-[#000000] font-medium">
									Accreditation Process :
								</p>
								<p>
									Alumni Association constantly work with college administration
									to support in various audit and accreditation, like UGC's
									audit for Autonomous, NAAC Accreditation Audit, etc. Alumni
									Association provides all necessary documentation to JGEC
									college authority to satisfy various accreditation clauses.
								</p>
								<p>
									<span className="text-[#000000] font-medium mr-1">
										NAAC Accreditation :
									</span>
									Alumni Association took initiative to support NAAC
									Accreditation process. The activities started in 2019 when
									Alumni Association provided all documentary supports for NAAC
									application. On 10th February 2021, NAAC Auditor's Team
									visited campus. Alumni Association members (from first batch
									to 2020 batch) met the NAAC Auditor's Team at Kanchenjunga and
									shared JGEC values. Alumni Association produced all documents
									that how JGEC Alumni Association contributes in JGEC's various
									processes. NAAC Auditor's Team highly appreciated the Alumni
									Association initiatives and vision of Kanchenjunga. JGEC
									received full number in Alumni activities.
								</p>
							</li>
							<li className="space-y-2">
								<p className="text-[#000000] font-medium">
									Rain Water Harvesting Prototype :
								</p>
								<p>
									Alumni Association supported to build a prototype of Rain
									Water Harvesting. It is a process to create green awareness
									inside JGEC Campus. The prototype build to showcase JGEC's
									Green Campaign during NAAC Accreditation Audit.
								</p>
							</li>
							<li className="space-y-2">
								<p className="text-[#000000] font-medium">
									Media Coverage of JGEC Campus :
								</p>
								<p>
									Various value added programs are captured by electronic and
									print media which is one step towards branding JGEC.
								</p>
							</li>
							<li className="space-y-2">
								<p className="text-[#000000] font-medium">BONDING ALUMNUS :</p>
								<p>
									Regular Alumni Meet at Campus provides alumnus to reconnect
									with JGEC campus.
								</p>
							</li>
							<li className="space-y-2">
								<p className="text-[#000000] font-medium">
									Diamond Jubilee T Shirt :
								</p>
								<p>
									To collaborate the diamond jubilee, Alumni Association
									launched about 250 T-shirts with the JGEC and Alumni
									Association logo. Alumnus took it as an opportunity to use the
									T-shirts to cherish JGEC experience.
								</p>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
							Social Platform For JGEC :
						</h3>
						<p className="text-sm text-black mt-2">
							Alumni Association acts as a social platform for the entire JGEC
							fraternity.
						</p>
						<ul className="list-decimal text-black mt-2 pl-4 space-y-3 text-sm">
							<li className="space-y-2">
								<p className="text-[#000000] font-medium">Covid Response :</p>
								<p>
									Since March 2020 lockdown, Alumnus supported the
									underprivileged families at periphery of campus who support
									students at hostels. Essential goods including blankets for
									winter provided to these families for 14th times using the
									infrastructure created in Kanchenjunga. These casual workers
									live in periphery of campus, they support in hostel activities
									and financed by students when college is on. Alumni
									Association members along with our beloved students visited
									the campus in all the occasions to acknowledge the
									contribution of our hostel casual staffs. It was not mere
									token support, rather continuous support to the
									underprivileged members of JGEC fraternity (total 52 families)
									throughout the lockdown period.
								</p>
							</li>
							<li className="space-y-2">
								<p className="text-[#000000] font-medium">
									Staying with JGECian :
								</p>
								<p>
									Many companies want validation of ex-students from
									institution, especially during job change or career shift.
									Various verification agencies and companies used to send mail
									to college authority for verification. Due to lockdown, many a
									times it was not possible for college authority to respond
									fast as the official verification process needs various steps
									including check with Universities which are also not regular
									during lockdown. Alumni Association used to step in many cases
									where the verification agencies copy to Alumni Association as
									well. Alumni Association used to reply to the verification
									agencies in many cases (with limited capacity) acknowledging
									the Alumnus. The same happened during lockdown period where
									Alumni Association replied to the verification agencies.
								</p>
								<p>
									Alumni Association appealed to JGEC fraternity to stood beside
									the underprivileged Alumnus or Students to support them in
									personal capacities. Alumni Association created platforms,
									WhatsApp groups and Facebook pages helped to provide support
									to our many brothers and sisters. The Alumni Association
									WhatsApp groups provide an opportunity to inform job vacancies
									to our Beloved Students and Respected Alumnus.{" "}
								</p>
								<p>
									Alumni Association members also actively participated in
									creating an official video of JGEC which is posted in JGEC's
									Official YouTube Channel. It's a part of enhancing Brand JGEC.
								</p>
								<p>
									Alumni Association try to rejuvenate vibrant JGEC community
									for connecting with our beloved JGEC Campus. We have world's
									one of the most beautiful campus. Alumni Association is a
									platform to elevate our campus to next level.
								</p>
							</li>
						</ul>
						<div className="text-sm pl-4 mt-8">
							<p>Best Regards from</p>
							<p className="text-primary font-medium">
								THE JGEC ALUMNI ASSOCIATION
							</p>
							<p className="text-xs text-black">
								JGEC Campus, Jalpaiguri, WB, India
							</p>
							<p className="text-primary font-semibold">
								Driven by Gratitude, Bonded with Nostalgia
							</p>
						</div>
					</div>
				</div>
				{/* Milestones of Alumni Association Activities at JGEC Campus */}
				<div>
					<div className="flex items-center mt-4 gap-2">
						<div className="border-2 rounded border-blue-400 h-10"></div>
						<h3 className="text-[#364150] font-semibold uppercase text-[16px] lg:text-[24px]">
							Milestones of Alumni Association Activities at JGEC Campus
						</h3>
					</div>

					<div className="border relative overflow-hidden border-black lg:w-1/2 h-[80vh mt-8">
						<h3 className="text-center font-medium border-b border-b-black p-2">
							Major Milestones of Alumni Association Activities at JGEC Campus
						</h3>
						<div className="border border-black absolute rotate-0 left-[32%] h-full "></div>
						<div className="flex border text-sm border-b-black items-center justify-between p-8">
							<div className="w-1/4 flex items-center justify-center">
								April 2010
							</div>
							<div className="w-2/3 flex items-center justify-center">
								Alumni Association Journey Began At JGEC Campus
							</div>
						</div>
						<div className="flex text-sm border-b-black border items-center justify-between p-8">
							<div className="w-1/4 flex items-center justify-center">
								December 2011
							</div>
							<div className="w-2/3 flex flex-col space-y-2 items-center justify-center">
								<p>
									First National Level Seminar Organized at Campus (at present,
									seminars are organized regularly at JGEC campus, along with
									workshops & alumni-student's knowledge sharing sessions)
								</p>
								<p className="text-[#000000] font-medium">
									Few of the events published in media, portraying positive
									image of our beloved campus, such as:
								</p>
								<ul className="pl-3 space-y-1 list-disc">
									<li>
										<span className="font-medium">December 2011 –</span> Visit
										of Dr.C.V.R Murthy (Professor, IIT, Chennai) and Dr. D.K.Pal
										(Head of Earth Quake Engineering, Roorkey)
									</li>
									<li>
										<span className="font-medium">January 2015 –</span> Visit of
										Mr. Asoke K. Laha (President of Indo-American Chamber of
										Commerce) and Prof. Gautam Biswas (Director, IIT Guwahati)
									</li>
									<li>
										<span className="font-medium">February 2017 –</span> Dr.
										Promode R Bandyopadhyay (Senior Research Scientist and
										Technical Program Manager, Naval Undersea Warfare Center,
										Newport, Rhode Island, USA)
									</li>
								</ul>
							</div>
						</div>
						<div className="flex border text-sm border-b-black items-center justify-between p-8">
							<div className="w-1/4 flex items-center justify-center">
								March 2012
							</div>
							<div className="w-2/3 flex items-center justify-center">
								Inauguration of statue of Prof. N. C. Bose, Respected Founder
								Principal of JGEC
							</div>
						</div>
						<div className="flex border text-sm border-b-black items-center justify-between p-8">
							<div className="w-1/4 flex items-center justify-center">
								August 2013
							</div>
							<div className="w-2/3 flex flex-col gap-2 items-center justify-center">
								<p>
									Launch of Scholarship Program (Every year, during May-June,
									students can apply for scholarship)
								</p>
								<p>
									<span className="font-medium">August 2019 -</span> Number of
									Scholarship was 10 (15 nos. students received scholarship,
									total value of scholarship INR 197,000)
								</p>
							</div>
						</div>
						<div className="flex border text-sm border-b-black items-center justify-between p-8">
							<div className="w-1/4 flex items-center justify-center">
								January 2014
							</div>
							<div className="w-2/3 flex gap-2 flex-col justify-center">
								<p>Land for Kanchenjunga Inaugurated</p>
								<p>
									Alumni Association purchased an available private land inside
									JGEC campus for Kanchenjunga (Convention Centre, Alumni House
									& Students development Centre)
								</p>
							</div>
						</div>
						<div className="flex border text-sm border-b-black items-center justify-between p-8">
							<div className="w-1/4 flex items-center justify-center">
								August 2016
							</div>
							<div className="w-2/3 flex gap-2 flex-col  justify-center">
								<p>
									Inauguration of Annexed Facility of Kanchenjunga & Alumni
									Temporary Office;
								</p>
								<p>
									Celebration of Golden Jubilee of Graduation of 1st Batch of
									JGEC Alumnus
								</p>
							</div>
						</div>
						<div className="flex border text-sm border-b-black items-center justify-between p-8">
							<div className="w-1/4 flex items-center justify-center">
								July 2018
							</div>
							<div className="w-2/3 flex flex-col gap-2 justify-center">
								<p>
									Beginning of Experience Sharing Welcome Sessions with the
									first-year students
								</p>
								<p className="font-medium">
									(Since 2018, Alumni Association participate in this annual
									event)
								</p>
							</div>
						</div>
						<div className="flex border text-sm border-b-black items-center justify-between p-8">
							<div className="w-1/4 flex items-center justify-center">
								December 2020
							</div>
							<div className="w-2/3 flex flex-col gap-2 justify-center">
								<p>Completion of Ground Floor of Kanchenjunga (Phase-I)</p>
								<p className="font-medium">
									(Next Target is to complete next Phases for first & second
									floors, and enhance value added activities at campus with more
									Alumni-Students & Professor’s Engagements)
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Third part */}
				<div>
					<div className="flex items-center mt-8 gap-2">
						<div className="border-2 rounded border-blue-400 h-10"></div>
						<h3 className="text-[#364150] font-semibold uppercase text-[16px] lg:text-[24px]">
							WHERE SHALL I STUDY?
						</h3>
					</div>
					<div className="p-4 space-y-4">
						<div>
							<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
								Am I Taking a Right Decision?
							</h3>
							<p className="text-sm text-black mt-2">
								The most challenging question which confound a student when
								deciding the perfect Institute to suit their needs is "where
								should I study?" Universities, Colleges and Schools have just
								mushroomed all over within the past decades worldwide. Students
								have plenty of choices when choosing the best and most promising
								one. With everyone offering the best of syllabus, faculty and
								infrastructure, Alumni connect have become a strategic asset for
								any kind of higher education institution willing to stand out
								from the domestic and international competition.
							</p>
						</div>
						<div>
							<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
								STRATEGIC ASSET
							</h3>
							<p className="text-sm font-semibold text-black mt-2">
								Alumni Connect is a Strategic Asset. This means that…
							</p>
							<ul className="list-disc pl-6 space-y-3 text-sm">
								<li>
									An institution’s alumni are the reflection of its past,
									representation of its present and a link to its future.
								</li>
								<li>
									Educational institutions are changing the way they see and
									interact with their alumni community.
								</li>
								<li>
									Earlier, alumni and their alma-mater were treated as separate
									entities wherein one’s existence was independent of the other.
								</li>
								<li>
									Local alumni chapters were formed as a means to interact with
									other fellow alumni. However, these associations seldom had
									any interaction with the institution they graduated from.
									That's the reasons institutions globally are focusing for
									centralised campus based Alumni platform.
								</li>
								<li>
									With the advent of Social Media, alumni relationship has taken
									a different flavour altogether. Centralised alumni platform of
									institutions have started to harness the power of alumni
									through various networking platforms and focusing on
									connecting ex-students with campus.
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
								Most Loyal Ambassador
							</h3>
							<p className="text-sm text-black mt-2">
								There are various ways in which alumni association is creating a
								powerful positive impact to campus because alumnus are most
								loyal ambassador of the campus.
							</p>
						</div>
						<div>
							<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
								Support System
							</h3>
							<p className="text-sm text-black mt-2">
								An engaged alumni network allows the University to benefit from
								the skills and experience of our graduates, by offering their
								support to our students, to the institution and to each other.
								If we keep them well informed and engaged, alumni are our most
								loyal supporters and our best ambassadors, offering invaluable
								marketing and promotion across their personal and professional
								networks.
							</p>
						</div>
						<div>
							<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
								Offering Expertise
							</h3>
							<p className="text-sm text-black mt-2">
								Talented alumni will likely have a wealth of experience and
								skills to share with current students via talks and meets. In
								certain cases, this could go even further with alumni offering
								to practically support students in work placements and help them
								launch their careers. JGEC Alumni Association has created an
								engaged alumni network which is beneficial because engaged
								graduates are much more likely to want to “give back” to the
								University.
							</p>
						</div>
						<div>
							<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
								Mentorship
							</h3>
							<p className="text-sm text-black mt-2">
								Alumni can play an active role in voluntary programs like
								mentoring students in their areas of expertise. JGEC Alumni
								Association has created a structured platform where students got
								opportunity, through Bridging the Gap initiative, to interact
								with successful alumnus, professionals, academicians and
								scientists at JGEC campus. Also through Innovation Challenge,
								students can nurture and showcase their talents on a regular
								intervals.
							</p>
						</div>
						<div>
							<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
								Scholarship
							</h3>
							<p className="text-sm text-black mt-2">
								Alumnus also play a significant role in contributing
								scholarships to deserving students. Alumni get in touch with
								students and share their expertise and best practices in a given
								field.
							</p>
						</div>
						<div>
							<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
								Assistance in Employability
							</h3>
							<p className="text-sm text-black mt-2">
								Alumni Association's function is not to create job. But Alumni
								Association helps to connect alumnus with campus and create
								alumni network. Alumni network has a real life benefit for
								current students. Alumni also donate their valuable time to
								offer career support to current students. This enhances the
								students’ experience and give them that competitive edge in
								today’s tough job market. The alumni network of a college is one
								of the biggest sources of placement opportunities to the
								students. Alumni can help students get placed at their
								respective organizations.
							</p>
						</div>
						<div>
							<h3 className="text-primary font-semibold lg:text-[20px] text-[19px]">
								Why Alumnus Like to Connect?
							</h3>
							<p className="text-sm text-black mt-2">
								Leveraging the alumni community through campus based initiatives
								is a win-win for both the institution and the alumni. Many of
								them are willing to ‘Give-Back’ to their alma-mater as a sign of
								their gratitude and affinity towards the institution.
							</p>
							<ul className="text-sm pl-6 mt-2 space-y-1 list-disc">
								<li>
									<span className="font-medium">Reconnect : </span>Find and
									reminisce with fellow graduates; see what everyone’s been up
									to!
								</li>
								<li>
									<span className="font-medium">Advance : </span>Advance your
									career through inside connections who work at top companies.
								</li>
								<li>
									<span className="font-medium">Give back : </span>Make
									meaningful connections, recruit future Wildcats, speak to
									students and advise fellow alumni.
								</li>
								<li>
									<span className="font-medium">Expand : </span>Leverage your
									professional network to get introduced to people you should
									know.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Takeatrip;
