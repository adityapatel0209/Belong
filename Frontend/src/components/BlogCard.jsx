import React from 'react';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(blog.slug);
        navigate(`/educate/${blog.slug}`);
    };


    return (
        <CardContainer className="inter-var">
            <CardBody
                className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
            >
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {blog.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {blog.description} {/* Assuming you have a description in your blog object */}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-2">
                    <img
                        src={blog.image} // Use blog.image
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={blog.title} // Use blog.title for alt text
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">

                    <CardItem
                        translateZ={20}
                        as="button"
                        onClick={handleClick} // Add onClick to the button
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Read More
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default BlogCard;
