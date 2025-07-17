import { useMutation } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-client';

type RequestPayload = {
	project: number;
};

export default function useProjectFavorite() {
	return useMutation({
		mutationFn: async (requestPayload: RequestPayload) => {
			try {
				const res = await AuthHTTP.post('/api/v1/projects/favorites/', requestPayload);
				return res;
			} catch (error) {
				return Promise.reject(error);
			}
		},
	});
}
