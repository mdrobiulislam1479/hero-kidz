import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-semibold text-2xl mb-6">
            Forgot Password
          </h2>

          <p className="text-center text-sm text-base-content/70 mb-6">
            Enter your email address and we&apos;ll send you a link to reset
            your password.
          </p>

          <form className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Send Reset Link
              </button>
            </div>

            <div className="text-center text-sm">
              <Link href="/auth/login" className="link link-primary">
                ← Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
