import React from "react";
import Navbar from "../components/Navbar";
import BlogList from "../components/BlogList";
import { BackgroundBeams } from "../components/ui/background-beams";

function BlogPage() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <BackgroundBeams />
        {/* Render either BlogList or BlogPost depending on the route */}

        <BlogList />

      </div>
    </>
  );
}

export default BlogPage;
