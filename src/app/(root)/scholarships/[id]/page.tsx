"use client";

import Loading from "@/app/Loader";
import { Button } from "@/components/ui/button";

import { InputField } from "@/components/ui/input";

import { SelectField } from "@/components/ui/select";
import { TextareaField } from "@/components/ui/textarea";

import { ScholarshipSchema } from "@/schemas/ScholarshipSchema";
import {
	useApplyScholarshipMutation,
	useScholarshipsQuery,
} from "@/store/feature/scholarship-feature";

import { ErrorMessage, Formik, Form } from "formik";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
interface EventParams {
	params: { id: string };
}

const Page: React.FC<EventParams> = ({ params }: EventParams) => {
	const { id } = params;
	const { data, isLoading, isError, error } = useScholarshipsQuery(id);
	const [applyScholarship, { isError: applyError, isLoading: applyLoading }] =
		useApplyScholarshipMutation();
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		if (isError) {
			toast.error(
				(error as any)?.data?.message || "Failed to fetch scholarship"
			);
		}
		if (applyError) {
			toast.error(
				(error as any)?.data?.message || "Failed to apply scholarship"
			);
		}
	}, [isError, error, applyError]);

	if (isLoading) {
		return <Loading />;
	}

	const handleFormSubmit = async (values: any) => {
		console.log(values);

		try {
			setLoading(true);
			// await toast.promise(
			// 	fetch("/api/submit", {
			// 		method: "POST",
			// 		body: JSON.stringify(values),
			// 		headers: { "Content-Type": "application/json" },
			// 	}),
			// 	{
			// 		loading: "Submitting your application...",
			// 		success: "Application submitted successfully!",
			// 		error: "Failed to submit the application.",
			// 	}
			// );
			const res = await applyScholarship({
				...values,
				scholarshipId: id,
			});

		} catch (error) {
			console.error("Error:", error);
		} finally {
			setLoading(false);
		}
	};

	const semArray: any = data?.data.semRequire
		.split(",")
		.map((sem) => sem.trim());

	return (
		<div className="grid text-justify  grid-cols-1 ">
			<div className=" flex lg:flex-row flex-col px-4 lg:px-14 justify-center items-center bg-[#edf1f4] gap-4 pb-4 pt-[6em] lg:pt-[10em]">
				{/* <div className="p-4 px-6 bg-white rounded-md shadow-xl  w-full">
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
							<div>
								<ReactQuill
									theme="bubble"
									value={data?.data.description}
									readOnly={true}
									className="view_editor"
								/>
							</div>
						</div>
					</div>
				</div> */}

				<div className="h-full lg:w-full flex flex-col lg:flex-row gap-4 items-center justify-center lg:px-4  rounded-md">
					<div className=" h-full rotate-0 rounded-md overflow-hidden ">
						<Image
							src={data?.data.providerImage || ""}
							alt={data?.data.providerName || ""}
							width={400}
							height={400}
							className=" rounded-sm"
						/>
					</div>
					<div className="lg:text-sm lg:w-3/4 h-full space-y-2 bg-sky-200 shadow-xl rounded-md p-4 px-8">
						<span className="font-semibold text-lg">About Sponsor </span>
						<ReactQuill
							theme="bubble"
							value={data?.data.providerDescription}
							readOnly={true}
							className="view_editor text-gr"
						/>
					</div>
				</div>
			</div>
			<div className="rounded-md m-4 lg:mx-14  bg-[#c4eb80] ">
				<div className="p-4 lg:text-sm text-xs bg-[#91c837] rounded-t-md font-semibold">
					{data?.data.name}
				</div>
				<div className="lg:text-sm text-xs space-y-2 p-4">
					<div>
						<span className="font-semibold">Who can apply:</span>{" "}
						{data?.data.whoCanApply}
					</div>
					<div>
						<span className="font-semibold">Amount of scholarship :</span>{" "}
						{data?.data.amountDetails}
					</div>
					<div className="pt-4 flex flex-col gap-2">
						<div className="flex gap-2">
							<div className="text-xs sm:text-sm font-medium">
								<span className="font-semibold">About Scholarship: </span>
								<div>
									<ReactQuill
										theme="bubble"
										value={data?.data.description}
										readOnly={true}
										className="view_editor px-2"
									/>
								</div>
							</div>
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
							scholarshipName: data?.data.name || "",
							name: "",
							studentId: "",
							dob: "",
							contactHome: "",
							contact: "",
							email: "",
							numberofdirectfamilyMembers: 1,
							fatherOccupation: "",
							totalEarningMembers: "",
							totalFamilyIncome: "",
							eachFamilyIncome: "",
							jgecIntakeYear: "",
							jgecPassingYear: "",
							extraCurricularActivities: "",
							percentHigherSecondary: "",
							...Object.fromEntries(
								semArray.map((sem: string) => [`sem_${sem.split(" ")[0]}`, ""])
							),
							average: "",
							department: "",
							residentialAddress: "",
							specialAchievement: "",
						}}
						onSubmit={(values) => {
							handleFormSubmit(values);
						}}
						validationSchema={ScholarshipSchema}>
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
											label="Parent's Contact Number"
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
											label="Your Mobile Number."
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
									<div>
										<SelectField
											name="department"
											label="Department"
											defaultValue="Select your department"
											placeholder="Select your department"
											data={
												data?.data.department === "All"
													? ["CSE", "ECE", "IT", "EE", "ME", "CE"]
													: [data?.data.department || ""]
											}
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
										<InputField
											type="text"
											name="jgecPassingYear"
											label="Jgec passing year "
											placeholder="xxxx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="jgecPassingYear"
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
									{semArray.map((sem: string, index: number) => (
										<div
											key={index}
											className="flex flex-col gap-1">
											<InputField
												type="text"
												name={`sem_${sem.split(" ")[0]}`}
												label={`CGPA in ${sem}`}
												placeholder="x.xx"
												onChange={handleChange}
											/>
											<ErrorMessage
												name={sem.replace(/\s/g, "")}
												component="div"
												className="text-red-500 text-xs"
											/>
										</div>
									))}
									<div className="flex flex-col gap-1">
										<InputField
											type="text"
											name="average"
											label="Average semester marks till date"
											placeholder="x.xx"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="average"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
								</div>
								<div className="grid pt-4  grid-col-1 gap-4">
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
									{/* <div>
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
									</div> */}
								</div>

								<Button
									className="py-3 mt-3 hover:scale-100 w-full max-w-xs"
									type="submit">
									Submit
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Page;
