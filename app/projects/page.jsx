'use client'
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Lyriks website',
    description: 'A website that keeps up to date with current song charts in all categories and gives you a free snippet of the song',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'TurnEround Fitness website',
    description: 'My dream project of owning my own gym one day and this is the website for it',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'fullstack',
    name: 'Sik Wolf website',
    description: 'Website for a friend of mine who is a designer and photographer, this is a website for his designs',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Lyriks website',
    description: 'A website that keeps up to date with current song charts in all categories and gives you a free snippet of the song',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Lyriks website',
    description: 'A website that keeps up to date with current song charts in all categories and gives you a free snippet of the song',
    link: '/',
    github: '/',
  },
];

// remove catergory duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects return all projects else filter by category
    return category === 'all projects' 
    ? project 
    : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] 
  mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>

    </section>
  );
};

export default Projects;