interface IRegisterType {
	email: string;
	password: string;
	name: string;
	studentId: string;
	passingYear: string;
	department: string;
	residentialAddress: string;
	professionalAddress: string;
	photo: null;
	receipt: null;
}
interface ILoginType {
	email: string;
	password: string;
}

interface IEventType {
	id: string;
	name: string;
	shortDescription: string;
	details: string;
	event_thumbnail: string;
	date: string;
	time: string;
	location: string;
	hostName: string;
	hostDetails: string;
	schedule: [
		{
			startTime: string;
			endTime: string;
			activity: string;
		}
	];
	createdAt: string;
	updatedAt: string;
}

interface INoticeType {
	id: string;
	title: string;
	description: string;
	date: string;
	link: string;
	link_public_id: string;
	createdAt: string;
	updatedAt: string;
}

interface IScholarshipType {
	id: string;
	name: string;
	subtitle: string;
	providerId: string;
	provider: [
		{
			name: string;
			photo: string;
			passingYear: number;
			department: string;
		}
	];
	providerDescription: string;
	description: string;
	whoCanApply: string;
	whenToApply: string;
	ageLimit: string;
	amountDetails: string;
	semRequire: string;
	scholarshipApplicants: [
		{
			id: string;
			name: string;
			email: string;
			mobile: string;
			department: string;
			hsPercentage: string;
			btechResults: string;
		}
	];
}
