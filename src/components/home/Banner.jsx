import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
      <div className="xl:flex-1 space-y-3 md:space-y-5">
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-12 md:leading-20">
          আপনার শিশুকে দিন একটি{" "}
          <span className="text-primary">সুন্দর ভবিষ্যৎ</span>
        </h2>
        <p className="md:text-2xl">Buy every toy with up to 15% discount.</p>
        <Link href={"/products"} className="btn btn-primary btn-outline">
          Explore Products
        </Link>
      </div>
      <Image
        src="/assets/hero.png"
        alt="Banner Image"
        width={600}
        height={500}
        className="xl:flex-1"
      />
    </div>
  );
};

export default Banner;
