"use client";
import React from "react";
import Hero from "@/components/Hero";
import InforBoxes from "@/components/InforBoxes";
import HomeProperties from "@/components/HomeProperties";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <InforBoxes />
      <HomeProperties />
    </div>
  );
};

export default HomePage;
