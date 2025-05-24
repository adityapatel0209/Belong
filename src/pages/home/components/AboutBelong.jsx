import React from 'react';
import { motion } from 'framer-motion';

const AboutBelong = () => {
    return (
        <section id="about-belong" className="py-20 bg-[#f7fced]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-medium text-gray-900 dark:text-white mb-6">
                        About Belong
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                        Belong is more than just a mental health platform - it's a community dedicated to supporting your journey towards better mental well-being.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {/* Mission and Vision Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-gray-800/10 dark:bg-gray-700/50 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                                    Our Mission
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                To create a safe, supportive space where everyone can access mental health resources, connect with others, and find the help they need, when they need it.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-gray-800/10 dark:bg-gray-700/50 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                A world where mental health support is accessible to all, where no one has to face their challenges alone, and where everyone feels they belong.
                            </p>
                        </motion.div>
                    </div>

                    {/* What We Offer Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 rounded-full bg-gray-800/10 dark:bg-gray-700/50 flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                                What We Offer
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Professional mental health resources",
                                "AI-powered support system",
                                "Educational materials and guides",
                                "Community events and workshops"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Join Community Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300 text-center"
                    >
                        <div className="max-w-2xl mx-auto">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-gray-800/10 dark:bg-gray-700/50 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                                    Join Our Community
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                                Be part of a supportive community that understands and cares. Together, we can make mental health support accessible to everyone.
                            </p>
                            <a
                                href="/signup"
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gray-800/90 text-white hover:bg-gray-900/90 transition-all duration-300 text-lg font-medium"
                            >
                                Sign Up Now
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutBelong; 