import React from 'react';
import { CardBody, CardContainer, CardItem } from "../../../components/ui/3d-card";
import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/educate/${blog.slug}`);
    };

    return (
        <CardContainer className="inter-var w-full h-full">
            <CardBody
                className="bg-white/90 backdrop-blur-sm relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/90 dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-2xl p-3 sm:p-4 border flex flex-col hover:shadow-lg transition-all duration-300"
            >
                {/* Image Container */}
                <CardItem translateZ="100" className="w-full">
                    <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
                        <img
                            src={blog.image}
                            className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-300"
                            alt={blog.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    </div>
                </CardItem>

                {/* Content Container */}
                <div className="flex flex-col flex-grow mt-2">
                    <CardItem
                        translateZ="50"
                        className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover/card:text-[#4a7c59] dark:group-hover/card:text-emerald-400 transition-colors duration-300"
                    >
                        {blog.title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3 flex-grow"
                    >
                        {blog.description}
                    </CardItem>

                    {/* Footer with Read More Button */}
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                        <CardItem
                            translateZ={20}
                            as="button"
                            onClick={handleClick}
                            className="px-3 py-1.5 rounded-xl bg-[#4a7c59] hover:bg-[#3a6a49] dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white text-sm font-medium transition-colors duration-300 flex items-center space-x-2"
                        >
                            <span>Read More</span>
                            <svg 
                                className="w-4 h-4 transform group-hover/card:translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </CardItem>
                    </div>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default BlogCard;
