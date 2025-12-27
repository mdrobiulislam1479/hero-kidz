import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/assets/logo.png"
        alt="Hero Kidz Logo"
        width={50}
        height={40}
      />
      <p className="text-2xl font-bold">Hero <span className="text-primary">Kidz</span></p>
    </div>
  );
};

export default Logo;
