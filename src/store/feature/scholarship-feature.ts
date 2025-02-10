import { baseApi } from "../baseApi";
interface IGetAllScholarshipRes {
	scholarships: IScholarshipType[];
	message: string;
	success: boolean;
	error: boolean;
	limit: number;
	page: number;
	docCount: number;
	totalPages: number;
	totalCount: number;
}
interface IResponse {
	data: IScholarshipType;
	message: string;
	success: boolean;
	error: boolean;
}
export const scholarshipApi = baseApi
	.enhanceEndpoints({ addTagTypes: ["scholarship", "scholarship-details"] })
	.injectEndpoints({
		endpoints: (builder) => ({
			allScholarships: builder.query<
				IGetAllScholarshipRes,
				{ limit?: number; page?: number; search?: string }
			>({
				query: ({ limit = 10, page = 1, search = "" }) => ({
					url: "/scholarships",
					params: { limit, page, search },
					method: "GET",
					credentials: "include",
				}),
				providesTags: ["scholarship"],
			}),
			scholarships: builder.query<IResponse, string>({
				query: (id) => ({
					url: `/scholarships/${id}`,
					method: "GET",
					credentials: "include",
				}),
				providesTags: ["scholarship-details"],
			}),
		}),
	});

export const { useAllScholarshipsQuery, useScholarshipsQuery } = scholarshipApi;
