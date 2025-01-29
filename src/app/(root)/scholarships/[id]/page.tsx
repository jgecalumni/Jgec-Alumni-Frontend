"use client";

import { Button } from "@/components/ui/button";

import { InputField } from "@/components/ui/input";

import { SelectField } from "@/components/ui/select";
import { TextareaField } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ScholarshipDetails } from "@/lib/ScholarshipsData";
import { ScholarshipSchema } from "@/schemas/ScholarshipSchema";

import { ErrorMessage, Formik, Form } from "formik";

import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
interface EventParams {
	params: { id: string };
}

const Page: React.FC<EventParams> = ({ params }: EventParams) => {
	const [loading, setLoading] = useState(false);

	const { id } = params;
	
	const data = ScholarshipDetails.filter((e) => e._id === (id));
	
	

	const handleFormSubmit = async (values: any) => {
		// console.log(values);

		try {
			setLoading(true);
			await toast.promise(
				fetch("/api/submit", {
					method: "POST",
					body: JSON.stringify(values),
					headers: { "Content-Type": "application/json" },
				}),
				{
					loading: "Submitting your application...",
					success: "Application submitted successfully!",
					error: "Failed to submit the application.",
				}
			);
		} catch (error) {
			console.error("Error:", error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="grid grid-cols-1 ">
			<div className=" flex lg:flex-row flex-col px-4 lg:px-14 justify-center items-center bg-[#edf1f4] gap-4 pt-[6em] lg:pt-[10em]">
				<div className="p-4 px-6 bg-white rounded-md shadow-xl  w-full">
					<div className="bg-[#91c837] p-2 w-1/2 lg:w-1/4 font-medium rounded-md flex items-center justify-center">
						Scholarship
					</div>
					<div className="flex items-center justify-center text-[12px] lg:text-[16px]  gap-2">
						<div className="py-4 flex w-full  flex-col gap-4">
							<div>
								It is the vision of the Jalpaiguri Government Engineering
								College Alumni Association to project JGEC as a successful and a
								leading institution of learning and research. One of the main
								aspects towards fulfilling this goal would be to engage the
								successful professional alumnus of our alma matter in order to
								nurture the young minds of JGEC with positive and inspiring
								tools for their enlightenment to outer world outside campus and
								thus to highlight glory of JGEC to outsiders.
							</div>
							<div>{data[0]?.description}</div>
						</div>
					</div>
				</div>
				<div className="rounded-md h-full  bg-[#c4eb80]  lg:w-1/2">
					<div className="p-4 lg:text-sm text-xs bg-[#91c837] rounded-t-md font-semibold">
						{data[0].title}
					</div>
					<div className="lg:text-sm text-xs space-y-2 p-4">
						<div>
							<span className="font-semibold">Who can apply:</span>{" "}
							{data[0].whocanApply}
						</div>
						<div>
							<span className="font-semibold">Age Criteria:</span>{" "}
							{data[0].AgeCriteria}
						</div>
						<div>
							<span className="font-semibold">Amount of scholarship :</span>{" "}
							{data[0].amountdetails}
						</div>
						<div>
							<span className="font-semibold">When to apply :</span>{" "}
							{data[0].whentoApply}
						</div>
					</div>
				</div>
			</div>

			<div className=" p-4  lg:px-14 flex lg:flex-row flex-col-reverse  bg-[#edf1f4]">
				<div className="h-full bg-white shadow-xl w-full rounded-md p-4">
					<h2 className="lg:text-xl font-semibold">
						STUDENT’S APPLICATION FORM
					</h2>
					<p className="font-medium mb-4 text-xs lg:text-sm">
						(Please read relevant information and rules mentioned in the
						webpage)
					</p>
					<Formik
						initialValues={{
							scholarshipName:data[0].title,
							name: "",
							studentId: "",
							dob: "",
							contactHome: "",
							contact: "",
							email: "",
							numberofdirectfamilyMembers: "",
							fatherOccupation: "",
							totalEarningMembers: "",
							totalFamilyIncome: "",
							eachFamilyIncome: "",
							jgecIntakeYear: "",
							extraCurricularActivities: "",
							percentHigherSecondary: "",
							gradeSemester1: "",
							gradeSemester2: "",
							gradeSemester3: "",
							gradeSemester4: "",
							gradeSemester5: "",
							average: "",
							department: "",
							residentialAddress: "",
							specialAchievement: "",
							jobCampusing: "",
						}}
						onSubmit={(values) => {
							handleFormSubmit(values);
						}}
						validationSchema={ScholarshipSchema}
						>
						{({ handleChange, values, setFieldValue }) => (
							<Form>
								<div className="grid lg:grid-cols-2 grid-col-1 gap-4">
									<div className="flex flex-col gap-1">
										<InputField
											name="name"
											label="Name (in block letter)"
											placeholder="Enter your full name"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="name"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="number"
											name="studentId"
											label="Student ID"
											placeholder="Student ID"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="studentId"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											name="dob"
											label="Date of birth"
											placeholder="01-01-2025"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="dob"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="number"
											name="contactHome"
											label="Contact No. (Home)"
											placeholder="xxxxxxxxxx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="contactHome"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="number"
											name="contact"
											label="Your Mobile No."
											placeholder="xxxxxxxxxx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="contact"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="email"
											name="email"
											label="Email"
											placeholder="Enter your email"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="email"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="text"
											name="fatherOccupation"
											label="Father's Occupation"
											placeholder="Father's Occupation"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="fatherOccupation"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="number"
											name="numberofdirectfamilyMembers"
											label="Number of direct family members"
											placeholder="xx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="numberofdirectfamilyMembers"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="number"
											name="totalEarningMembers"
											label="Total number of earning members (in family)"
											placeholder="xx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="totalEarningMembers"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="number"
											name="totalFamilyIncome"
											label="Total family income (INR)"
											placeholder="xxxxx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="totalFamilyIncome"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="number"
											name="eachFamilyIncome"
											label="Earning per family member "
											placeholder="xxxxx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="eachFamilyIncome"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="text"
											name="jgecIntakeYear"
											label="Jgec intake year "
											placeholder="xxxx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="jgecIntakeYear"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<TextareaField
											name="extraCurricularActivities"
											label="Extra-Curricular Activities"
											placeholder="Extra-Curricular Activities that you regularly perform at campus (Mention any achievement)"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="extraCurricularActivities"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<TextareaField
											name="residentialAddress"
											label="Residential Address"
											placeholder="Enter your residential address"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="residentialAddress"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="text"
											name="percentHigherSecondary"
											label="Percentage obtained in Higher Secondary (+12) "
											placeholder="xx %"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="percentHigherSecondary"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div
										className={`flex ${
											data[0].firstSem ? "block" : "hidden"
										} flex-col gap-1`}>
										<InputField
											type="text"
											name="gradeSemester1"
											label="Grade marks in 1st semester "
											placeholder="x.xx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="gradeSemester1"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className={`flex ${
											data[0].secondSem ? "block" : "hidden"
										} flex-col gap-1`}>
										<InputField
											type="text"
											name="gradeSemester2"
											label="Grade marks in 2nd semester "
											placeholder="x.xx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="gradeSemester2"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className={`flex ${
											data[0].thirdSem ? "block" : "hidden"
										} flex-col gap-1`}>
										<InputField
											type="text"
											name="gradeSemester3"
											label="Grade marks in 3rd semester "
											placeholder="x.xx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="gradeSemester3"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className={`flex ${
											data[0].fourthSem ? "block" : "hidden"
										} flex-col gap-1`}>
										<InputField
											type="text"
											name="gradeSemester4"
											label="Grade marks in 4th semester "
											placeholder="x.xx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="gradeSemester4"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className={`flex ${
											data[0].fifthSem ? "block" : "hidden"
										} flex-col gap-1`}>
										<InputField
											type="text"
											name="gradeSemester5"
											label="Grade marks in 5th semester "
											placeholder="x.xx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="gradeSemester5"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											type="text"
											name="average"
											label="Average marks of first 5 semisters"
											placeholder="x.xx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="average"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div>
										<SelectField
											name="department"
											label="Department"
											placeholder="Select your department"
											data={["CSE", "ECE", "IT", "EE", "ME", "CE"]}
											onValueChange={(value) =>
												setFieldValue("department", value)
											}
											value={values.department}
										/>
										<ErrorMessage
											name="department"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
								</div>
								<div className="grid pt-4 lg:grid-cols-2 grid-col-1 gap-4">
									<div>
										<TextareaField
											name="specialAchievement"
											label="Your Special Achievement"
											placeholder="Tell about your special achievement"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="specialAchievement"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div>
										<TextareaField
											name="jobCampusing"
											label="Have you already secured job at campusing?"
											placeholder="Discuss about your job"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="jobCampusing"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-4 py-6">
									<div className="text-xs sm:text-sm font-medium">
										(The sponsor of the scholarship is entitled to decide
										salient selection criteria, which is confidential. Out of
										the available applications, top ten students will be called
										for interview vide invitation email. Interview date and
										schedule shall be informed through invitation mail. Subject
										of interview can be academic or general, depending on
										decision of interviewers. Interview shall be held at JGEC
										campus. After interview, one/ two (max) successful students
										shall be selected for scholarship. Decision of sponsor, with
										prior information to Alumni Association, is ultimate and
										shall be accepted by all parties involved in this process.
										In case of extra ordinary cases, selection procedure may be
										altered by mutual understanding between sponsor and alumni
										association, without prior information to any other party
										other than sponsor and alumni association. Supporting
										documents of all above data (in original / attested true
										copy format) have to be presented only during interview.
										Candidates need to submit parent’s family income and other
										direct family member’s (real brother / sister only) income
										related reliable supporting documents during face to face
										interview process.)
									</div>
								</div>
								<Button
									className="py-3 hover:scale-100 w-full max-w-xs"
									type="submit">
									Submit
								</Button>
							</Form>
						)}
					</Formik>
				</div>
				<div className="h-full lg:w-1/2 lg:px-4  rounded-md">
					<div className="flex rotate-0 rounded-md overflow-hidden shadow-xl  bg-white h-[40vh] items-center justify-center">
						<Image
							src={data[0].imageUrl}
							alt={data[0].providerName}
							
							layout="fill"
							objectFit="contain"
							className=" rotate-0  rounded-sm"
						/>
					</div>
					<div className="lg:text-sm text-xs my-4 bg-white shadow-xl rounded-md p-4">
						{data[0].providerDetails}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
