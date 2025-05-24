import React from "react";
import Navbar from "../../components/Navbar";
import { FlipWordsDemo } from "./components/flipWords";
import FeaturesOverview from "./components/FeaturesOverview";
import AboutBelong from "./components/AboutBelong";
import Footer from "./components/Footer";

"use client";

function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FlipWordsDemo />
        <FeaturesOverview />
        <AboutBelong />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
