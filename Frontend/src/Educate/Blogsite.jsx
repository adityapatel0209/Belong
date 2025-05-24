import React from "react";
import Navbar from "../components/Navbar";
import BlogPost from "../components/BlogPost";
import { BackgroundBeams } from "../components/ui/background-beams";


function Blogsite() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />


                {/* Render either BlogList or BlogPost depending on the route */}
                <BackgroundBeams></BackgroundBeams>
                <BlogPost />

            </div>
        </>
    );
}

export default Blogsite;
