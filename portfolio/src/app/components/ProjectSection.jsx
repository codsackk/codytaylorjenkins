"use client";
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion, useInView} from 'framer-motion';

const projectsData = [
    {
        id:1,
        title: "Propogate",
        description: "E-commerce web application for house plants.",
        image: "",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id:2,
        title: "Animal Haus",
        description: "UX/UI for a pet services website.",
        image: "",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id:3,
        title: "Trench",
        description: "UX/UI for a construction management system.",
        image: "",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id:4,
        title: "Employee Reimbursement System",
        description: "Web application for a company to record employee's expenses.",
        image: "",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
]
const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1},
    };

    return (
    <section id="projects">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Project
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
            />
            <ProjectTag
                onClick={handleTagChange}
                name="Web"
                isSelected={tag === "Web"}
            />
            <ProjectTag
                onClick={handleTagChange}
                name="Mobile"
                isSelected={tag === "Mobile"}
            />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
            <motion.li
                key={index}
                variants={cardVariants} 
                initial="initial" 
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
            >
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tags={project}
                />
            </motion.li>
            ))}
        </ul> 
    </section>
  );
};

export default ProjectSection;