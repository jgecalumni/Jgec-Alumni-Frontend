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

				<div className="flex items-center mt-4 gap-2">
					<div className="border-2 rounded border-blue-400 h-10"></div>
					<h3 className="text-[#364150] font-semibold uppercase text-[16px] lg:text-[24px]">
						Milestones of Alumni Association Activities at JGEC Campus
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Takeatrip;
