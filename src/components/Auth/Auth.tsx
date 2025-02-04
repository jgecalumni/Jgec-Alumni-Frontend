"use client";
import React from "react";
import { MdCloudUpload } from "react-icons/md";
import { InputField } from "../ui/input";
import { ErrorMessage, Form, Formik } from "formik";
import { Button } from "../ui/button";
import { TextareaField } from "../ui/textarea";
import { SelectField } from "../ui/select";
import { LoginSchema, RegisterSchema } from "@/schemas/AuthSchema";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const Auth: React.FC = () => {
	const registerUser = async (userData: any, setSubmitting: any) => {
		const formData = new FormData();
		formData.append("name", userData.name);
		formData.append("email", userData.email);
		formData.append("password", userData.password);
		formData.append("photo", userData.photo);
		formData.append("studentId", userData.studentId);
		formData.append("passingYear", userData.passingYear);
		formData.append("department", userData.department);
		formData.append("residentialAddress", userData.residentialAddress);
		formData.append("professionalAddress", userData.professionalAddress);
		formData.append("receipt", userData.receipt);

		try {
			const response = await fetch(
				"http://localhost:8000/v1/api/auth/member/register",
				{
					method: "POST",
					body: formData,
				}
			);

			if (!response.ok) {
				toast.error("Something went wrong");
			} else {
				toast.success("Registration successful");
			}
		} catch (error) {
			console.log(error);
			toast.error("Error occurred during registration");
		} finally {
			setSubmitting(false); 
		}
	};

	const { mutate } = useMutation({
		mutationFn: async ({ values, setSubmitting }: any) => {
			await registerUser(values, setSubmitting);
		},
		onError: (err: any) => {
			console.error("Registration failed:", err);
			toast.error("Registration failed. Please try again.");
		},
	});
	return (
		<section className="bg-white px-4 md:px-10 py-10 md:py-20">
			{/* Authentication Form */}
			<div className="h-full w-full max-w-screen-lg mx-auto  overflow-hidden flex lg:flex-row flex-col justify-center gap-8 items-center">
				{/* Login Form */}
				<div className="w-full max-lg:max-w-lg lg:w-1/3">
					<h2 className="text-xl sm:text-2xl font-medium text-start mb-4 sm:mb-8">
						Already a Member?
					</h2>
					<Formik
						initialValues={{ email: "", password: "" }}
						validationSchema={LoginSchema}
						onSubmit={(values) => {
							console.log(values);
						}}>
						{({ handleChange }) => (
							<Form className="flex flex-col gap-4">
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
										type="password"
										name="password"
										label="Password"
										placeholder="Enter your password"
										onChange={handleChange}
									/>
									<ErrorMessage
										name="password"
										component="div"
										className="text-red-500 text-xs"
									/>
								</div>
								<Button
									className="py-3 hover:scale-100 text-white"
									type="submit">
									Login
								</Button>
							</Form>
						)}
					</Formik>
				</div>
				<div className=" w-full max-lg:max-w-lg lg:w-2/3 max-lg:border-t-2  max-lg:mt-4 pt-8 lg:border-l-2 border-neutral-200 lg:pl-8">
					<div className="text-xl sm:text-2xl font-medium mb-4 sm:mb-8">
						Registration Form
					</div>
					<Formik
						initialValues={{
							email: "",
							password: "",
							name: "",
							studentId: "",
							passingYear: "",
							department: "",
							residentialAddress: "",
							professionalAddress: "",
							photo: null as File | null,
							receipt:  null as File | null,
						}}
						validationSchema={RegisterSchema}
						onSubmit={(values, actions) => {
							mutate({values, setSubmitting: actions.setSubmitting});
						}}>
						{({ handleChange, values, setFieldValue, isSubmitting }) => (
							<Form>
								<div className="grid lg:grid-cols-2 grid-col-1 gap-4">
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
											type="password"
											name="password"
											label="Password"
											placeholder="Enter your password"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="password"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											name="name"
											label="Full Name"
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
											name="passingYear"
											label="Passing Year"
											placeholder="Passing Year"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="passingYear"
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
										<TextareaField
											name="professionalAddress"
											label="Professional Address"
											placeholder="Enter your professional address"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="professionalAddress"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<button className="relative w-full h-12 flex items-center justify-center rounded-md font-medium text-neutral-950 focus-within:outline-none border border-neutral-200 overflow-hidden cursor-pointer">
										<span className="w-full h-full flex justify-center text-sm items-center gap-2 bg-background">
											<MdCloudUpload
												size={18}
												className="min-w-5 w-5"
											/>
											<span className="line-clamp-1">
												{values.photo ? values.photo.name : "Upload your photo"}
											</span>
										</span>
										<input
											id="photo"
											name="photo"
											type="file"
											className="absolute cursor-pointer opacity-0 w-full h-full"
											onChange={(event) => {
												const file = event.currentTarget.files?.[0];
												if (file) {
													setFieldValue("photo", file);
												}
											}}
										/>
									</button>

									<button className="relative w-full h-12 flex items-center justify-center rounded-md font-medium text-neutral-950 focus-within:outline-none border border-neutral-200 overflow-hidden cursor-pointer">
										<span className="w-full h-full flex justify-center text-sm items-center gap-2 bg-background">
											<MdCloudUpload
												size={18}
												className="min-w-5 w-5"
											/>
											<span className="line-clamp-1">
												{values.receipt
													? values.receipt.name
													: "Upload your payment receipt"}
											</span>
										</span>
										<input
											id="receipt"
											name="receipt"
											type="file"
											className="absolute cursor-pointer opacity-0 w-full h-full"
											onChange={(event) => {
												const file = event.currentTarget.files?.[0];
												if (file) {
													setFieldValue("receipt", file);
												}
											}}
										/>
									</button>
								</div>
								<div className="flex flex-col gap-4 py-6">
									<div className="text-xs sm:text-sm font-medium">
										NB : Rs. 100 is mandatory for membership and getting
										permission for using your own email id and password to
										venture into Alumni website. i.e. access to Find Your Pal,
										Finance and Alumni Membership Info
									</div>
									<div className="text-xs sm:text-sm flex flex-col gap-2">
										<p>
											Please deposit your combined membership amount and
											Donation at any of the two S.B.I. Current Account:
										</p>
										<ul className="list-decimal pl-4 text-sm space-y-2">
											<li className="text-xs sm:text-sm">
												SBI C.A No:-31904400275 IFSC-SBIN0007194,
												MICR-735002512, Branch Code-7194-Jointly operated by
												Treasurer &amp; either of President/Secretary.
											</li>
											<li className="text-xs sm:text-sm">
												SBI C.A NO-31232430610- Jointly operated by Chairman-(Ex
												officio )Principal &amp; either of President/Secretary.
											</li>
										</ul>
									</div>
								</div>
								{isSubmitting ? (
									<>
										<Button
											disabled
											className="py-3 text-white hover:scale-100 w-full max-w-lg lg:max-w-xs"
											type="submit">
											<Loader2 className="animate-spin"/> Loading...
										</Button>
									</>
								) : (
									<>
										<Button
											className="py-3 text-white hover:scale-100 w-full max-w-lg lg:max-w-xs"
											type="submit">
											Registration
										</Button>
									</>
								)}
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</section>
	);
};

export default Auth;
