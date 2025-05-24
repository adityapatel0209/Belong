import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { BackgroundBeams } from "../../components/ui/background-beams";
import govResources from "../../data/govresource.json";
import { motion, AnimatePresence } from "framer-motion";

function extractLink(paragraph) {
    const match = paragraph.match(/• [^:]+: ([^\n]+)/);
    if (match) {
        const linkText = match[1].trim();
        const urlMap = {
            "Community Support Fund": "https://www.canada.ca/en/employment-social-development/services/funding/community-support-fund.html",
            "Wellness Together Canada": "https://wellnesstogether.ca/en-CA",
            "Canadian Mental Health Association": "https://cmha.ca/",
            "Language Instruction for Newcomers to Canada (LINC)": "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/improve-english-french/classes.html",
            "Settlement Services": "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/settlement-services.html",
            "Social Development Partnerships Program": "https://www.canada.ca/en/employment-social-development/services/funding/social-development-partnerships.html",
            "Public Health Agency of Canada - Community Health": "https://www.canada.ca/en/public-health/services/health-promotion/community-health.html",
            "Government of Canada - Research Funding": "https://www.canada.ca/en/services/science/researchfunding.html",
            "CMHA Mental Health Week": "https://mentalhealthweek.ca/",
            "Partnership Funding": "https://www.canada.ca/en/employment-social-development/services/funding/partnership-funding.html",
            "Social Inclusion Initiatives - ESDC": "https://www.canada.ca/en/employment-social-development/programs/social-inclusion.html"
        };
        return urlMap[linkText] || null;
    }
    return null;
}

function GovResourcePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentResource = govResources[currentIndex];
    const resourceLink = extractLink(currentResource.content[0].paragraph);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: { 
            opacity: 0, 
            y: -20,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f7fced] to-white">
            <Navbar />
            <BackgroundBeams />
            
            {/* Main Content */}
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Hero Section - Left Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-[#45a049]">
                            Government Resources
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Discover valuable resources and programs offered by the government to support your journey.
                        </p>
                    </motion.div>

                    {/* Navigation Menu - Right Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white shadow-lg rounded-2xl p-6">
                            {/* Mobile Menu Button */}
                            <div className="lg:hidden mb-4">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="w-full flex items-center justify-between px-6 py-3 bg-[#4CAF50] text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <span className="font-medium">Browse Resources</span>
                                    <svg
                                        className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Mobile Menu */}
                            <AnimatePresence>
                                {isMenuOpen && (
                                    <motion.div
                                        variants={menuVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        className="lg:hidden space-y-2"
                                    >
                                        {govResources.map((resource, index) => (
                                            <motion.button
                                                key={index}
                                                variants={itemVariants}
                                                onClick={() => {
                                                    setCurrentIndex(index);
                                                    setIsMenuOpen(false);
                                                }}
                                                className={`w-full text-left px-6 py-3 rounded-xl transition-all duration-300 ${
                                                    index === currentIndex 
                                                        ? "bg-[#4CAF50] text-white shadow-md" 
                                                        : "hover:bg-[#4CAF50]/10 text-gray-700"
                                                }`}
                                            >
                                                {resource.title}
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:block">
                                <div className="grid grid-cols-1 gap-3">
                                    {govResources.map((resource, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`px-6 py-3 rounded-xl transition-all duration-300 text-left ${
                                                index === currentIndex 
                                                    ? "bg-[#4CAF50] text-white shadow-md" 
                                                    : "hover:bg-[#4CAF50]/10 text-gray-700"
                                            }`}
                                        >
                                            {resource.title}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Resource Card Section */}
                <div className="mt-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden"
                        >
                            {resourceLink ? (
                                <motion.a 
                                    href={resourceLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.01 }}
                                    className="block"
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Image Section */}
                                        <div className="lg:w-1/2 relative">
                                            <div className="aspect-w-16 aspect-h-9 h-full">
                                                <img 
                                                    src={currentResource.image} 
                                                    alt={currentResource.title}
                                                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                <span className="text-white text-sm font-medium">Click to learn more</span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                                            <h2 className="text-3xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-[#45a049]">
                                                {currentResource.title}
                                            </h2>
                                            <div className="space-y-4">
                                                {currentResource.content.map((item, index) => (
                                                    <p key={index} className="text-gray-600 text-lg leading-relaxed">
                                                        {item.paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ) : (
                                <div className="flex flex-col lg:flex-row">
                                    {/* Image Section */}
                                    <div className="lg:w-1/2 relative">
                                        <div className="aspect-w-16 aspect-h-9 h-full">
                                            <img 
                                                src={currentResource.image} 
                                                alt={currentResource.title}
                                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                                        <h2 className="text-3xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-[#45a049]">
                                            {currentResource.title}
                                        </h2>
                                        <div className="space-y-4">
                                            {currentResource.content.map((item, index) => (
                                                <p key={index} className="text-gray-600 text-lg leading-relaxed">
                                                    {item.paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default GovResourcePage; 