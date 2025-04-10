"use client";
import React, { useEffect } from "react";
import { MdCloudUpload } from "react-icons/md";
import { InputField } from "../ui/input";
import { ErrorMessage, Form, Formik } from "formik";
import { Button } from "../ui/button";
import { TextareaField } from "../ui/textarea";
import { SelectField } from "../ui/select";
import { LoginSchema, RegisterSchema } from "@/schemas/AuthSchema";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRegisterMutation } from "@/store/baseApi";
import { useAuth } from "@/store/AuthContext";
import SectionHeader from "../section-header";
import { useAddReceiptMutation } from "@/store/feature/receipt-feature";

const MoneyReceipt: React.FC = () => {
	const [addReceipt, { isError, isLoading, error }] = useAddReceiptMutation();
	const handleSubmit = async (values: any) => {
		console.log(values);
		const response = await addReceipt(values);
		if (response.data?.success) {
			toast.success("Receipt request sent successfully");
		}
	};
	useEffect(() => {
		if (isError) {
			toast.error((error as any)?.data?.message || "Failed to add user");
		}
	}, [isError,error]);
	return (
		<div className="bg-slate-50">
			<SectionHeader
				highlightTitle="Money"
				normalTitle="Receipt"
				description="Fill the form to get your money receipt"
			/>
			<div className="h-full  w-full max-w-screen-lg mx-auto py-16  overflow-hidden flex lg:flex-row flex-col justify-center gap-8 items-center">
				<div className=" w-full bg-white shadow-xl max-lg:max-w-lg lg:w-2/3 lg:border-2  max-lg:mt-4 pt-8  border-neutral-200 p-8">
					<div className="text-xl sm:text-2xl text-center font-medium mb-10">
						Money Receipt Form
					</div>
					<Formik
						initialValues={{
							email: "",
							name: "",
							amount: "",
							passoutYear: "",
							transactionId: "",
							phone: "",
							donationFor: "",
						}}
						// validationSchema={RegisterSchema}
						onSubmit={(values: any) => {
							handleSubmit(values);
						}}>
						{({ handleChange, values, setFieldValue }) => (
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
											name="phone"
											label="Phone No."
											placeholder="Phone No."
											onChange={handleChange}
										/>
										<ErrorMessage
											name="phone"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											name="passoutYear"
											label="Passout Year"
											placeholder="Passout Year"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="passoutYear"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											name="amount"
											label="Amount (in Rupees)"
											placeholder="Amount"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="amount"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<InputField
											name="transactionId"
											label="Transaction ID"
											placeholder="Transaction ID"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="transactionId"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
								</div>
								<div className="py-4">
									<SelectField
										name="donationFor"
										label="Reason for donation"
										defaultValue="Select reason for Donation"
										data={[
											"Building construction",
											"Students scholarship",
											"Events",
											"Students services",
											"Social awareness",
											"Others",
										]}
										onValueChange={(value) =>
											setFieldValue("donationFor", value)
										}
										value={values.donationFor}
									/>
									<ErrorMessage
										name="donationFor"
										component="div"
										className="text-red-500 text-xs"
									/>
								</div>
								{isLoading ? (
									<>
										<Button
											disabled
											className="py-3 text-white hover:scale-100 w-full max-w-lg lg:max-w-xs"
											type="submit">
											<Loader2 className="animate-spin" /> Loading...
										</Button>
									</>
								) : (
									<>
										<Button
											className="py-3 text-white hover:scale-100 w-full max-w-lg lg:max-w-xs"
											type="submit">
											Submit
										</Button>
									</>
								)}
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default MoneyReceipt;
