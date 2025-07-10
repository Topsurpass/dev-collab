import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import useGetVerifiedEmailById from '@/api/authentication/use-verify-email';

export default function VerifyEmail() {
	const { token } = useParams<{ token?: string }>();
	const navigate = useNavigate();

	const { data, isLoading, isError } = useGetVerifiedEmailById({
		token: token,
	});

	return (
		<div className="relative flex  w-full flex-col">
			<div className="flex min-h-screen-minus-100 items-center justify-center">
				<Card className="w-full max-w-md rounded-xl border p-6 text-center">
					<CardHeader className="flex flex-col items-center space-y-2">
						{/* Loading State */}
						{isLoading && (
							<>
								<Loader2 size={48} className="animate-spin text-blue-500" />
								<CardTitle className="text-xl font-semibold">
									Verifying your email...
								</CardTitle>
								<p className="text-gray-500">Please wait.</p>
							</>
						)}

						{/* Success State */}
						{data && !isLoading && !isError && (
							<>
								<CheckCircle size={48} className="text-green-500" />
								<CardTitle className="text-2xl font-semibold">
									Email Verified!
								</CardTitle>
							</>
						)}

						{/* Error State */}
						{isError && !isLoading && (
							<>
								<XCircle size={48} className="text-red-500" />
								<CardTitle className="text-2xl font-semibold">
									Verification Failed
								</CardTitle>
							</>
						)}
					</CardHeader>

					<CardContent>
						{data && (
							<p className="">
								Your email has been successfully verified. You can now log in and
								start exploring.
							</p>
						)}
						{isError && (
							<p className="">
								Something went wrong. Your verification link might be expired or
								invalid.
							</p>
						)}
					</CardContent>

					<CardFooter className="flex flex-col space-y-4">
						{data && (
							<Button
								className="w-full rounded-full bg-blue-600 font-medium text-white hover:bg-blue-700"
								onClick={() => navigate('/create-profile')}
								label="Continue"
							/>
						)}
						{isError && (
							<p className="text-sm text-gray-500">
								Didn’t receive an email?{' '}
								<Link
									to="/resend-verification"
									className="text-blue-600 hover:underline"
								>
									Resend Verification
								</Link>
							</p>
						)}
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
