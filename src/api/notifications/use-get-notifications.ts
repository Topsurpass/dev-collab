import { useQuery } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-client';
import QueryKeys from '@/api/query-keys';

interface IParameters {
	[key: string]: unknown;
}

const url = '/api/v1/notifications';

export const getNotifications = async (requestParams: IParameters = {}) => {
	try {
		const res = await AuthHTTP.get(url, {
			params: {
				...requestParams,
			},
		});
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return res?.data as any;
	} catch (error) {
		return Promise.reject(error);
	}
};

export default function useGetNotifications(requestParams: IParameters = {}) {
	return useQuery({
		queryKey: [QueryKeys.GET_NOTIFICATIONS, requestParams],
		queryFn: () => getNotifications(requestParams),
	});
}
