"use client";
import Image from "next/image";
import errorImg from "@/public/img/error-img.png";
import Link from "next/link";

const error = async () => {
  return (
    <div
      className="py-[30px] lg:py-[60px] bg-[var(--bg-2)]"
      style={{ height: "100vh" }}>
      <div className="container">
        <div className="flex justify-center">
          <div className="col-span-10 lg:col-span-6">
            <div className="text-center pb-10">
              <Image src={errorImg} alt="image" className="mx-auto w-full" />
              <h2 className="mt-10 mb-5 h2"> Oops! Page Not Found </h2>
              <p className="mb-8">
                The page you are looking for has been moved to another place, kindly check other place
              </p>
              <Link href="/" className="btn-primary font-semibold">
                <span className="inline-block"> Back To Home </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default error;
