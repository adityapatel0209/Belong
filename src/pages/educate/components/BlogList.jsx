// pages/BlogList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import blogs from '../../../data/blogs.json';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const BlogList = () => {
    return (
        <div className="min-h-screen bg-[#f7fced]">
            {/* Hero Section with Background */}
            <div className="relative w-full h-[40vh] bg-gradient-to-b from-[#4a7c59]/10 to-transparent">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e8f5d6] rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 30, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4e9c5] rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                        animate={{
                            scale: [1, 1.1, 1],
                            x: [0, -30, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative -mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center mb-16"
                    >
                        <motion.h1 
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
                        >
                            Knowledge & Support
                        </motion.h1>
                        <motion.p 
                            variants={itemVariants}
                            className="text-xl text-[#4a7c59] font-medium mb-4"
                        >
                            Stories, Resources, and Insights for Your Mental Wellbeing
                        </motion.p>
                        <motion.p 
                            variants={itemVariants}
                            className="text-lg text-gray-600 max-w-3xl mx-auto"
                        >
                            Discover articles, personal experiences, and expert advice to help you navigate feelings of isolation and build meaningful connections.
                        </motion.p>
                    </motion.div>

                    {/* Feature Cards */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                    >
                        <motion.div 
                            variants={itemVariants}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#4a7c59]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#4a7c59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Expert Insights</h3>
                                    <p className="text-gray-600 text-sm">Professional advice and research-backed articles</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            variants={itemVariants}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#4a7c59]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#4a7c59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Community Stories</h3>
                                    <p className="text-gray-600 text-sm">Real experiences and shared journeys</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            variants={itemVariants}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#4a7c59]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#4a7c59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Practical Tips</h3>
                                    <p className="text-gray-600 text-sm">Actionable strategies for daily wellbeing</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Blog Grid Section */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {blogs.map((blog) => (
                            <motion.div
                                key={blog.slug}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                className="h-full"
                            >
                                <div className="h-full">
                                    <BlogCard blog={blog} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BlogList;

