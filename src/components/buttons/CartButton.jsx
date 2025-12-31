"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const CartButton = ({ product }) => {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();

  const add2cart = () => {
    if (isLogin) {
      alert(product._id);
    } else {
      router.push(`/auth/login?callbackUrl=${path}`);
    }
  };

  return (
    <div>
      <button
        onClick={add2cart}
        className="btn btn-primary mt-6 w-full text-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
