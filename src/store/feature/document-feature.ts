import { baseApi } from "../baseApi";

interface IGetAllDocsRes {
	response: any;
	message: string;
	success: boolean;
	error: boolean;
}

export const docsApi = baseApi
	.enhanceEndpoints({
		addTagTypes: [
			"getAllScholarshipsDocs",
			"getAllkanchenjungaDocs",
			"getAllGivingBackDocs",
			"getAllAuditReportDocs",
		],
	})
	.injectEndpoints({
		endpoints: (builder) => ({
			getAllScholDocs: builder.query<IGetAllDocsRes, any>({
				query: () => ({
					url: "/documents/scholarshipDocs",
					method: "GET",
					credentials: "include",
				}),
				providesTags: ["getAllScholarshipsDocs"],
			}),
			getAllKanchenungaDocs: builder.query<IGetAllDocsRes, any>({
				query: () => ({
					url: "/documents/kanchenjungaDocs",
					method: "GET",
					credentials: "include",
				}),
				providesTags: ["getAllkanchenjungaDocs"],
			}),
			getAllGivingBackDocs: builder.query<IGetAllDocsRes, any>({
				query: () => ({
					url: "/documents/givingBackDocs",
					method: "GET",
					credentials: "include",
				}),
				providesTags: ["getAllGivingBackDocs"],
			}),
			getAllAuditReportDocs: builder.query<IGetAllDocsRes, any>({
				query: () => ({
					url: "/documents/auditReportDocs",
					method: "GET",
					credentials: "include",
				}),
				providesTags: ["getAllAuditReportDocs"],
			}),
		}),
	});

export const {
	useGetAllScholDocsQuery,
	useGetAllKanchenungaDocsQuery,
	useGetAllGivingBackDocsQuery,
	useGetAllAuditReportDocsQuery,
} = docsApi;
