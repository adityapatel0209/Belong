import React from "react";
import Navbar from "../../components/Navbar";
import { BackgroundBeams } from "../../components/ui/background-beams";
import Aiui from "./components/aiui";


function Ai() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <BackgroundBeams />
                <Aiui></Aiui>

            </div>
        </>
    );
}

export default Ai;
