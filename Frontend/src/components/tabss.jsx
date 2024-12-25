"use client";

import { Tabs } from "../components/ui/tabs"; // Adjust the import path as needed

export function TabsDemo() {
    // Define your tab data directly here
    const tabs = [
        {
            title: "Community-Based Programs",
            value: "community-based-programs",
            content: (
                <a
                    href="https://www.sac-isc.gc.ca/eng/1585189335380/1585189357198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"
                >
                    <p className="mb-4 text-left">Community-Based Programs</p>
                    <img
                        src="https://usaprojects.org/wp-content/uploads/2021/12/images2247-61af6d7c9b6af.jpg"
                        alt="Community-Based Programs"
                        height="500" // Adjusted height
                        width="500"  // Adjusted width
                        className="rounded-lg mb-10 object-cover" // Maintains fixed size and style
                    />
                    <div className="text-lg prose prose-sm dark:prose-invert">
                        <p className="mb-6">
                            Community Support Fund: The Community Support Fund focuses on providing financial support to non-profits and organizations that offer essential services, particularly to marginalized communities like seniors, newcomers, and Indigenous groups. The goal is to build stronger social networks and reduce isolation by funding programs that connect individuals and offer opportunities for engagement. • Learn more: Community Support Fund
                        </p>
                        <p className="mb-6">
                            New Horizons for Seniors Program (NHSP): The NHSP is a federal grant and contribution program that provides funding to organizations that engage seniors in their communities through social participation and volunteerism. The program promotes the inclusion of seniors by supporting projects that enable them to stay active, share their knowledge, and connect with peers.
                        </p>
                    </div>
                </a>
            ),
        },
        {
            title: "Mental Health Support",
            value: "mental-health-support",
            content: (
                <a
                    href="https://cmha-yr.on.ca/get-support/osp/?gad_source=1&gclid=EAIaIQobChMI9vfD9LGliQMVGwqtBh1U-xa3EAAYASAAEgJi3fD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"
                >
                    <p className="mb-4 text-left">Mental Health Support</p>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1691801608112-a1be702a11cf?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Mental Health Support"
                        height="500" // Adjusted height
                        width="500"  // Adjusted width
                        className="rounded-lg mb-10 object-cover" // Maintains fixed size and style
                    />
                    <div className="text-lg prose prose-sm dark:prose-invert">
                        <p className="mb-6">
                            Launched in response to the COVID-19 pandemic, Wellness Together Canada provides free mental health and substance use support for all Canadians. The platform offers a variety of services, from self-guided learning modules to virtual group therapy and one-on-one counseling with licensed professionals. It is designed to help individuals facing mental health challenges, including those stemming from social isolation. • Access Wellness Together Canada: Wellness Together Canada
                        </p>
                        <p className="mb-6">
                            Canadian Mental Health Association (CMHA): The CMHA offers various programs and resources to support mental health across Canada, including crisis lines, peer support networks, and community services. The CMHA aims to provide social connections and a sense of belonging, which are crucial for individuals struggling with isolation. • Visit CMHA: Canadian Mental Health Association
                        </p>
                    </div>
                </a>
            ),
        },
        {
            title: "Language and Integration Programs",
            value: "language-and-integration-programs",
            content: (
                <a
                    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/improve-english-french/classes.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"
                >
                    <p className="mb-4 text-left">Language and Integration Programs</p>
                    <img
                        src="https://plus.unsplash.com/premium_vector-1698192041909-3a5a4a6ee089?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVkdWNhdGlvbiUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
                        alt="Language and Integration Programs"
                        height="500" // Adjusted height
                        width="500"  // Adjusted width
                        className="rounded-lg mb-10 object-cover" // Maintains fixed size and style
                    />
                    <div className="text-lg prose prose-sm dark:prose-invert">
                        <p className="mb-6">
                            Language Instruction for Newcomers to Canada (LINC): LINC offers free English or French language training for adult immigrants to Canada. The program helps newcomers improve their language skills, which is essential for their social and economic integration. By enhancing communication abilities, LINC reduces social isolation and helps newcomers feel more connected to their new communities. • Learn more about LINC: Language Instruction for Newcomers to Canada (LINC)
                        </p>
                        <p className="mb-6">
                            Settlement Services: Funded by the Canadian government, settlement services assist newcomers by offering information, language training, job search support, and cultural orientation. These services aim to ease the transition for immigrants, helping them establish social connections and become active members of Canadian society. • More about settlement services: Settlement Services
                        </p>
                    </div>
                </a>
            ),
        },
        {
            title: "Social Connection Initiatives",
            value: "social-connection-initiatives",
            content: (
                <a
                    href="https://www.canada.ca/en/employment-social-development/programs/social-development-partnerships.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"
                >
                    <p className="mb-4 text-left">Social Connection Initiatives</p>
                    <img
                        src="https://plus.unsplash.com/premium_vector-1724599098664-cdcee208a206?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvY2lhbCUyMGNvbm5lY3Rpb258ZW58MHx8MHx8fDA%3D"
                        alt="Social Connection Initiatives"
                        height="500" // Adjusted height
                        width="500"  // Adjusted width
                        className="rounded-lg mb-10 object-cover" // Maintains fixed size and style
                    />
                    <div className="text-lg prose prose-sm dark:prose-invert">
                        <p className="mb-6">
                            Social Development Partnerships Program (SDPP): The SDPP provides funding for initiatives that promote social inclusion and well-being among vulnerable populations. The program supports activities that foster social connections, reduce isolation, and strengthen communities, particularly for individuals facing barriers like disability, poverty, or social marginalization. • More on SDPP: Social Development Partnerships Program
                        </p>
                        <p className="mb-6">
                            Together Project: A charitable organization that connects refugees with community volunteers to facilitate social connections and support integration. Through one-on-one partnerships, Together Project reduces feelings of isolation among newcomers while promoting understanding and friendship between diverse communities. • Learn more about Together Project: Together Project
                        </p>
                    </div>
                </a>
            ),
        },
    ];


    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}
