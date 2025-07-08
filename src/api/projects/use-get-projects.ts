import { useQuery } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-client';
import QueryKeys from '@/api/query-keys';
import type { ProjectCardProps } from '@/types/project-list-types';

interface IParameters {
	[key: string]: unknown;
}

const url = '/api/v1/projects/projects';

export const getProjects = async (requestParams: IParameters = {}): Promise<ProjectCardProps[]> => {
	try {
		const res = await AuthHTTP.get(url, {
			params: {
				...requestParams,
			},
		});
		return res?.data as ProjectCardProps[];
	} catch (error) {
		return Promise.reject(error);
	}
};

export default function useGetProjects(requestParams: IParameters = {}) {
	return useQuery({
		queryKey: [QueryKeys.GET_PROJECTS, requestParams],
		queryFn: () => getProjects(requestParams),
	});
}
