import * as Yup from "yup";

export const ScholarshipSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(70, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	studentId: Yup.string()
		.min(11, "Must be 11 Digit")
		.max(11, "Must be 11 Digit")
		.required("Required")
		.typeError("Student ID must be a number"),
	dob: Yup.date().required("Required"),
	contactHome: Yup.string().min(10,"Must be 10 digit").max(10,"Must be 10 digit").required("Required").typeError("Must be a number"),
	contact: Yup.string().min(10,"Must be 10 digit").max(10,"Must be 10 digit").required("Required").typeError("Must be a number"),
	numberofdirectfamilyMembers: Yup.number().required("Required"),
	fatherOccupation: Yup.string()
		.min(2, "Too Short!")
		.max(70, "Too Long!")
		.required("Required"),
	totalEarningMembers: Yup.number().required("Required"),
	totalFamilyIncome: Yup.number().required("Required"),
	eachFamilyIncome: Yup.number().required("Required"),
	jgecIntakeYear: Yup.string()
		.min(4, "Must be 4 digits")
		.max(4, "Must be 4 digits")
		.required("Required")
		.typeError("Passing Year must be a number"),
	extraCurricularActivities: Yup.string()
		.min(2, "Too Short!")
		.max(70, "Too Long!")
		.required("Required"),
	percentHigherSecondary: Yup.string().required("Required"),
	gradeSemester1: Yup.string().required("Required"),
	gradeSemester2: Yup.string().required("Required"),
	gradeSemester3: Yup.string().required("Required"),
	gradeSemester4: Yup.string().required("Required"),
	gradeSemester5: Yup.string().required("Required"),
	average: Yup.string().required("Required"),
	department: Yup.string().required("Required"),
	residentialAddress: Yup.string().required("Required"),
	specialAchievement: Yup.string().required("Required"),
	jobCampusing: Yup.string().required("Required"),
});
