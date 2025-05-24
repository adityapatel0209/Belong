import React from "react";
import Navbar from "../../components/Navbar";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { SlackCard } from "./components/SlackCard";
import { EventGrid } from "./components/EventGrid";

function EventPage() {
    return (
        <>
            <div className="min-h-screen bg-[#f7fced]">
                <Navbar />
                <BackgroundBeams />
                
                {/* Hero Section */}
                <div className="relative pt-32 pb-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                                Discover & Connect
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Join our vibrant community events and connect with like-minded individuals. 
                                From workshops to networking sessions, there's something for everyone.
                            </p>
                            <div className="flex justify-center">
                                <button className="px-8 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors duration-200 shadow-lg hover:shadow-xl">
                                    Browse Events
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slack Section */}
                <div className="py-16 bg-white/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <SlackCard />
                    </div>
                </div>

                {/* Events Section */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Upcoming Events
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Explore our curated selection of upcoming events and join the conversation
                            </p>
                        </div>
                        <EventGrid />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventPage;
