import React from "react";
import Navbar from "../components/Navbar";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TabsDemo } from "../components/tabss";


function Govsite() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <BackgroundBeams></BackgroundBeams>
                <TabsDemo></TabsDemo>

            </div>
        </>
    );
}

export default Govsite;
