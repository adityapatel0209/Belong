import React from "react";
import Navbar from "../components/Navbar";
import BlogList from "../components/BlogList";
import { BackgroundBeams } from "../components/ui/background-beams";
import { EventGrid } from "../components/bento-grid";
import { Hero } from "../components/hero";
import { AnimatedPinDemo } from "../components/3dpin";

function EventPage() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <BackgroundBeams />
                {/* Render either BlogList or BlogPost depending on the route */}
                <Hero></Hero>
                <AnimatedPinDemo></AnimatedPinDemo>
                <EventGrid></EventGrid>

            </div>
        </>
    );
}

export default EventPage;
