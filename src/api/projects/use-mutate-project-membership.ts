import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import AuthHTTP from "@/lib/http-client";

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

export default function useProjectMembership() {
	return useMutation({
		mutationFn: async (requestPayload: RequestPayload) => {
			try {
				const res = await AuthHTTP.post(
					"/api/v1/projects/memberships/",
					requestPayload
				);
				return res;
			} catch (error) {
				return Promise.reject(error);
			}
		},
		onSuccess: (res) => {
			const resData = res.data as any;
			toast.success("Membership Request sent successfully!", {
				description: resData.message,
			});
		},
		onError: (err: any) => {
			toast.error("Failed", {
				description: err?.response?.data?.errors?.email,
			});
		},
	});
}
