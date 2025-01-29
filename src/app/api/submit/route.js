import { google } from "googleapis"; // Import the Google API Client Library
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const body = await req.json();
		
		
		const {
			scholarshipName,
			name,
			studentId,
			dob,
			contactHome,
			contact,
			email,
			numberofdirectfamilymembers,
			fatherOccupation,
			totalEarningMembers,
			totalFamilyIncome,
			eachFamilyIncome,
			jgecIntakeYear,
			extraCurricularActivities,
			percentHigherSecondary,
			gradeSemester1,
			gradeSemester2,
			gradeSemester3,
			gradeSemester4,
			gradeSemester5,
			average,
			department,
			residentialAddress,
			specialAchievement,
			jobCampusing,
		} = body;

		console.log(scholarshipName);
		

		// Authenticate with Google Sheets API
		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: process.env.CLIENT_EMAIL,
				client_id: process.env.CLIENT_ID,
				private_key: process.env.PRIVATE_KEY,
			},
			scopes: [
				"https://www.googleapis.com/auth/drive",
				"https://www.googleapis.com/auth/drive.file",
				"https://www.googleapis.com/auth/spreadsheets",
			],
		});

		const sheets = google.sheets({ auth, version: "v4" });

		// Append data to the spreadsheet
		const response = await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.SPREADSHEET_ID, // Make sure this is correctly set in your .env file
			range:`${scholarshipName}!A1`,// Replace with the correct sheet name and range
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [
					[
						name,
						studentId,
						dob,
						contactHome,
						contact,
						email,
						numberofdirectfamilymembers,
						fatherOccupation,
						totalEarningMembers,
						totalFamilyIncome,
						eachFamilyIncome,
						jgecIntakeYear,
						extraCurricularActivities,
						percentHigherSecondary,
						gradeSemester1,
						gradeSemester2,
						gradeSemester3,
						gradeSemester4,
						gradeSemester5,
						average,
						department,
						residentialAddress,
						specialAchievement,
						jobCampusing,
					],
				],
			},
		});

		return NextResponse.json(
			{ message: "Data added to Google Sheets successfully!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error occurred:", error);
		return NextResponse.json(
			{ error: "Failed to add data to Google Sheets." },
			{ status: 500 }
		);
	}
}
