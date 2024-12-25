import React from "react";
import { FlipWords } from "./ui/flipword";

export function FlipWordsDemo() {
    const words = ["supported", "stable", "connected", "good", "grateful"];

    return (
        (<div className="h-[40rem] flex justify-center items-center px-4">
            <div
                className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Feel
                <FlipWords words={words} /> <br />
                with Belong.
            </div>
        </div>)
    );
}
