// pages/BlogList.jsx
import BlogCard from './BlogCard';
import blogs from '../data/blogs.json';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";



const BlogList = () => {

    return (

        <div className="container mx-auto p-4 mt-20"> {/* Increased margin-top to mt-20 */}

            <CardContainer className="inter-var">
                <CardBody
                    className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[50rem] h-auto rounded-xl p-10 border" // Increased width and padding
                >
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        <h2 className="text-4xl font-bold mb-10"> {/* Increased mb to 10 for more gap */}
                            Welcome to Belong: Your Resource for Tackling Isolation in Canada
                        </h2>
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-lg mt-6 dark:text-neutral-300" // Increased max-width to make it wider
                    >
                        <TextGenerateEffect words="In today’s fast-paced world, many individuals in inclusive communities face feelings of isolation and disconnection. Whether you're new to Canada, feeling distant from loved ones, or just searching for a sense of belonging, we’re here to help." />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    </div>
                </CardBody>
            </CardContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
                {blogs.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                ))}
            </div>

        </div>
    );
};


export default BlogList;

