import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-semibold text-2xl mb-6">
            Create Account
          </h2>

          <form className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
                required
              />
            </div>

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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Sign Up
              </button>
            </div>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="link link-primary">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
