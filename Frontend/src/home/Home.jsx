import React from "react";
import Navbar from "../components/Navbar";

"use client";

import { BackgroundBeams } from "../components/ui/background-beams";

import { FeaturesSectionDemo } from "../components/Bento";
import { FlipWordsDemo } from "../components/flipWords";



function Home() {
  return (
    <>

      <Navbar />
      <FlipWordsDemo></FlipWordsDemo>
      <FeaturesSectionDemo></FeaturesSectionDemo>
      <div>
        <BackgroundBeams />
      </div>


    </>
  );
}

export default Home;
