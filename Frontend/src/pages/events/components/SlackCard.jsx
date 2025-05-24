import React from 'react';

export const SlackCard = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/30">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Left side - Content */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <img 
                                    src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
                                    alt="Slack Logo" 
                                    className="w-12 h-12"
                                />
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Join Our Slack Community
                                </h2>
                            </div>
                            <p className="text-gray-600 text-lg">
                                Connect with fellow members, share ideas, and stay updated with our latest events and discussions.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Real-time Communication</h3>
                                    <p className="text-gray-600 text-sm">Instant messaging and collaboration</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Community Network</h3>
                                    <p className="text-gray-600 text-sm">Connect with like-minded individuals</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Event Updates</h3>
                                    <p className="text-gray-600 text-sm">Stay informed about upcoming events</p>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://app.slack.com/client/T07SR8RAXST/C07T64DMSN6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            <img 
                                src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
                                alt="Slack Logo" 
                                className="w-5 h-5 mr-2"
                            />
                            Join Our Slack
                        </a>
                    </div>
                    {/* Right side - Visual */}
                    <div className="hidden md:block relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/20 to-[#45a049]/20 rounded-xl transform rotate-3"></div>
                        <div className="relative h-full bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-xl p-8 flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                                    <img 
                                        src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
                                        alt="Slack Logo" 
                                        className="w-20 h-20"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                                <p className="text-white/80">
                                    Connect, collaborate, and grow together
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 