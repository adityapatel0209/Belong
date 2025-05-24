import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs.json'; // Ensure this path is correct
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beams"; // Ensure the import path is correct
import BlogCard from './BlogCard'; // Import BlogCard component


const BlogPost = () => {
    const { slug } = useParams(); // Get the slug from the URL

    // Find the blog using the slug
    const blog = blogs.find((blog) => blog.slug === slug);

    if (!blog) {
        return <p>Blog not found!</p>; // Handle case when the blog is not found
    }

    return (
        <>

            <div className="flex mt-9"> {/* Added margin-top for spacing */}
                <TracingBeam className="px-6 w-2/3"> {/* Adjust width for the blog section */}
                    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                        <div className="mb-10">
                            <h2 className="bg-black text-white rounded-full text-lg w-fit px-4 py-1 mb-4">
                                {blog.badge} {/* Display the badge if exists */}
                            </h2>

                            <p className={twMerge("calsans", "text-3xl mb-4")}>
                                {blog.title} {/* Increased heading size */}
                            </p>

                            {blog.image && (
                                <img
                                    src={blog.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover" />
                            )}

                            <div className="text-lg prose prose-sm dark:prose-invert"> {/* Increased font size for content */}
                                {blog.content.map((paragraph, index) => (
                                    <p key={index} className="mb-6"> {/* Increased spacing between paragraphs */}
                                        {paragraph.paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-4 text-xl italic"> {/* Adjusted font size for description */}
                                {blog.description}
                            </div>
                        </div>
                    </div>
                </TracingBeam>

                <div className="w-1/3 p-6"> {/* Space for loading additional cards on the right */}
                    <h3 className="text-xl font-semibold">Related Posts</h3>
                    <div className="mt-4 space-y-2"> {/* Reduced gap between cards */}
                        {blogs
                            .filter((b) => b.slug !== blog.slug) // Exclude the current blog post
                            .slice(0, 3) // Show up to 3 related posts
                            .map((relatedBlog) => (
                                <BlogCard key={relatedBlog.slug} blog={relatedBlog} /> // Render BlogCard for related posts
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPost;
