import React from "react";
import { FlipWords } from "./ui/flipword";


export function Hero() {
    const words = ["Learn", "Share", "Celeberate", "Grow", "Volunteer", "Work", "Eat"];

    return (
        (<div className="h-[40rem] flex justify-center items-center px-4">
            <div
                className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Together we
                <FlipWords words={words} /> <br />
            </div>
            <h3 className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Discover the latest events happening in our community. From cultural workshops to exciting performances, join us and be a part of the vibrant activities.
            </h3>
        </div>)
    );
}


