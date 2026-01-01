"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthButton = () => {
  const session = useSession();
  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          <button
            className="btn btn-primary btn-outline"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link href={"/auth/login"} className="btn btn-primary btn-outline">
            Log In
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButton;
