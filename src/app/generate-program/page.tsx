"use client";

import dynamic from "next/dynamic";
import React from "react";

const GenerateProgram = dynamic(
  () => import("./GenerateProgram"),
  { ssr: false }
);

const GenerateProgramPage = () => {
  return <GenerateProgram />;
};

export default GenerateProgramPage; 