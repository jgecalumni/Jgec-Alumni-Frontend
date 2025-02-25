import { baseApi } from "../baseApi";

interface IGetAllDocsRes {
	response: any;
	message: string;
	success: boolean;
	error: boolean;
}



export const docsApi = baseApi
	.enhanceEndpoints({
		addTagTypes: ["getAllScholarshipsDocs"],
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
		}),
	});

export const { useGetAllScholDocsQuery } = docsApi;
