"use client";
import React, { useTransition, useState }from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id:"skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>SQL</li>
                <li>Next.js</li>
                <li>Amazon Web Services</li>
                <li>Angular</li>
                <li>Spring Boot</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Node.js</li>
                <li>JSON</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Georgia Southern University, Bachelor's of Science in Information Technology</li>
            </ul>

        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"></div>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    I'm a full stack developer with a passion for creating stylish designs to inspire a seamless user experience.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}
                    > 
                    {" "}
                    Skills{" "} 
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}
                    > 
                    {" "}
                    Education{" "} 
                    </TabButton>
                </div>
                 <div className="mt-8">
                     {TAB_DATA.find((t) => t.id === tab).content}
                </div>     
            </div>
        </section>
    );
};

export default AboutSection;