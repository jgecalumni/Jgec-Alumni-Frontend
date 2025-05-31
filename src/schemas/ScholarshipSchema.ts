import * as Yup from "yup";

export const ScholarshipSchema = Yup.object().shape({
  scholarshipName: Yup.string().required("Scholarship name is required"),
  name: Yup.string().required("Full name is required"),
  studentId: Yup.string().matches(/^\d{11}$/, "Must be 11 digit").required("Student ID is required"),
  dob: Yup.string().required("Date of birth is required"),
  contactHome: Yup.string().matches(/^\d{10}$/, "Enter a valid phone number"),
  contact: Yup.string().matches(/^\d{10}$/, "Enter a valid phone number"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  numberofdirectfamilyMembers: Yup.number().required(),
  fatherOccupation: Yup.string().required("Father's occupation is required"),
  totalEarningMembers: Yup.number().required(),
  totalFamilyIncome: Yup.number().required(),
  eachFamilyIncome: Yup.number().required(),
  jgecIntakeYear: Yup.string().required("Jgec intake year is required"),
  jgecPassingYear: Yup.string().required("Jgec passing year is required"),
  extraCurricularActivities: Yup.string().optional(),
  percentHigherSecondary: Yup.string().required("Enter your +12 percentage"),
  department: Yup.string().required("Department is required"),
  residentialAddress: Yup.string().required("Address is required"),
  specialAchievement: Yup.string().optional(),
  jobCampusing: Yup.string().optional(),
  average: Yup.string().required("Enter your average CGPA"),

  // Dynamically validate semester CGPA fields
  ...Object.fromEntries(
    ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"].map((sem) => [
      `sem_${sem}`,
      Yup.string().matches(/^\d+(\.\d{1,2})?$/, "Enter a valid CGPA").optional(),
    ])
  ),
});
