import React from "react";
import Navbar from "../components/Navbar";
import { BentoGridDemo } from "../components/bento-grid";

import { FlipWordsDemo } from "../components/flipWords";
import { BackgroundBeams } from "../components/ui/background-beams";


function BentoGrid() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <BackgroundBeams></BackgroundBeams>
                <FlipWordsDemo></FlipWordsDemo>
                <BentoGridDemo />



            </div>
        </>
    );
}

export default BentoGrid;
