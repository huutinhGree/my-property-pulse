"use client";
import React from "react";
import Link from "next/link";

const HomePage = () => {
  console.log("Hello");

  return (
    <div>
      <h1 className='text-3xl'>Welcome</h1>
      <Link href={"/properties"}>Go Properties</Link>
    </div>
  );
};

export default HomePage;
