"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";

export function AnimatedPinDemo() {
    const gap = 'px-10'; // Adjustable gap

    return (
        <div className={`h-[30rem] w-full flex items-center justify-center p-4 ${gap}`}>
            <div className="flex flex-col items-start justify-center w-1/2 h-full p-4 text-slate-900 dark:text-slate-100">
                <h2 className="text-2xl font-bold mb-4">Connect with Us on Slack</h2>
                <p className="text-lg mb-2">
                    Join our Slack community to communicate with fellow members. Share ideas, discuss events, and connect on various topics.
                </p>
                <p className="text-lg">
                    Participate in different groups and discussions, from event planning to casual conversations. Stay connected and engaged!
                </p>
            </div>
            <div className="flex items-center justify-center w-1/2 h-full">
                <PinContainer title="/Slack.com" href="https://app.slack.com/client/T07SR8RAXST/C07T64DMSN6">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[28rem] h-[16rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                            Slack
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500">
                                Stay connected and engaged
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
            </div>
        </div>
    );
}
