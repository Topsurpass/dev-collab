import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import AuthHTTP from '@/lib/http-client';

type RequestPayload = {
	title: string;
	description: string;
	staus?: string;
	roles: {
		role_input: string;
		number_required: number;
		skills_input: number[];
	}[];
};

export default function useProject() {
	const navigate = useNavigate();
	return useMutation({
		mutationFn: async (requestPayload: RequestPayload) => {
			try {
				const res = await AuthHTTP.post('/api/v1/projects/projects/', requestPayload);
				return res;
			} catch (error) {
				return Promise.reject(error);
			}
		},
		onSuccess: () => {
			toast.success('Project added successfully', {
				description: 'Your project is live and ready for collaborations!',
			});
			navigate('/');
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (err: any) => {
			toast.error('Failed', {
				description: err?.response?.data?.errors?.email,
			});
		},
	});
}
