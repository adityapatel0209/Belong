import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogs from '../../../data/blogs.json'; // Ensure this path is correct
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../components/ui/tracing-beams";
import { motion } from 'framer-motion';

const BlogPost = () => {
    const { slug } = useParams(); // Get the slug from the URL
    const navigate = useNavigate();

    // Find the blog using the slug
    const blog = blogs.find((blog) => blog.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-screen bg-[#f7fced] flex items-center justify-center px-4">
                <p className="text-xl text-gray-600">Blog not found!</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f7fced] via-[#e8f5d6] to-[#f7fced]">
            {/* Hero Section with Gradient Background */}
            <div className="relative w-full h-[30vh] bg-gradient-to-b from-[#4a7c59]/20 via-[#4a7c59]/10 to-transparent">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#e8f5d6] rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
                </div>
            </div>

            {/* Main Content */}
            <div className="relative -mt-20">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Blog Content */}
                        <div className="lg:w-3/4">
                            <TracingBeam className="w-full">
                                <div className="antialiased pt-4 relative">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-white/20"
                                    >
                                        <div>
                                            {/* Header Section */}
                                            <div className="mb-6">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="bg-[#4a7c59]/80 backdrop-blur-sm text-white rounded-full text-xs px-4 py-1.5 border border-white/20">
                                                        {blog.badge}
                                                    </span>
                                                    <span className="text-gray-500">•</span>
                                                    <span className="text-gray-600 text-sm">5 min read</span>
                                                </div>

                                                <h1 className={twMerge("calsans", "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight")}>
                                                    {blog.title}
                                                </h1>

                                                <p className="text-base text-gray-600">
                                                    {blog.description}
                                                </p>
                                            </div>

                                            {/* Featured Image */}
                                            {blog.image && (
                                                <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-6">
                                                    <img
                                                        src={blog.image}
                                                        alt={blog.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                                </div>
                                            )}

                                            {/* Blog Content */}
                                            <div className="prose prose-base lg:prose-lg dark:prose-invert max-w-none">
                                                {blog.content.map((paragraph, index) => (
                                                    <p key={index} className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                                        {paragraph.paragraph}
                                                    </p>
                                                ))}
                                            </div>

                                            {/* Author Section */}
                                            <div className="mt-6 pt-4 border-t border-white/20">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-[#4a7c59]/80 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-sm border border-white/20">
                                                        AB
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 text-sm">Aditya Belong</h3>
                                                        <p className="text-gray-600 text-xs">Content Writer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </TracingBeam>
                        </div>

                        {/* Related Posts Section */}
                        <div className="lg:w-1/4">
                            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20 sticky top-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">More Articles</h3>
                                <div className="space-y-2">
                                    {blogs
                                        .filter((b) => b.slug !== blog.slug)
                                        .slice(0, 3)
                                        .map((relatedBlog) => (
                                            <motion.div
                                                key={relatedBlog.slug}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                                onClick={() => navigate(`/educate/${relatedBlog.slug}`)}
                                                className="group bg-white/90 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
                                            >
                                                <div className="flex flex-col">
                                                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                                                        <img
                                                            src={relatedBlog.image}
                                                            alt={relatedBlog.title}
                                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                                        <span className="absolute top-2 left-2 bg-[#4a7c59]/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                                                            {relatedBlog.badge}
                                                        </span>
                                                    </div>
                                                    <div className="p-2">
                                                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#4a7c59] transition-colors duration-300">
                                                            {relatedBlog.title}
                                                        </h4>
                                                        <div className="mt-1 flex items-center justify-between">
                                                            <span className="text-xs text-gray-500">2 min read</span>
                                                            <span className="text-xs text-[#4a7c59] font-medium group-hover:translate-x-1 transition-transform duration-300">
                                                                Read More →
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
