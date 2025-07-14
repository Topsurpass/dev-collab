/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import AuthHTTP from "@/lib/http-client";
import { RequestMethod } from "@/types/enum";

interface IProps {
	requestPayload?: any;
	msgId?: number;
	requestMethod: RequestMethod;
}

const url = `/api/v1/notifications`;


export default function useMarkNotificationRead() {
	const Mutation = useMutation({
		mutationFn: async ({ requestPayload, msgId, requestMethod }: IProps) => {
			try {
				let res: any;
				if (requestMethod === RequestMethod.POST) {
					res = await AuthHTTP.post(url, requestPayload);
				}
				if (requestMethod === RequestMethod.PATCH) {
					res = await AuthHTTP.patch(`${url}/${msgId}/mark-read/`, requestPayload);
				}
				if (requestMethod === RequestMethod.DELETE) {
					res = await AuthHTTP.delete(`${url}/${msgId}/`);
				}
				return res;
			} catch (error) {
				return Promise.reject(error);
			}
		},
	});

	return Mutation;
}