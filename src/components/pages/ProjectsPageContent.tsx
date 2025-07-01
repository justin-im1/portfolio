import React from 'react';
import { PageContentProps } from '@/types';
import { getThemedTextStyle } from '@/utils/styling';
import { projects } from '@/data/portfolio';

const ProjectsPageContent: React.FC<PageContentProps> = ({ themeColor }) => {
  return (
    <>
      <p className="text-lg text-gray-300 leading-relaxed mb-10 text-center font-light">
        A selection of projects demonstrating my skills and passion for building.
      </p>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-start pb-4">
            <h3 className="text-2xl font-medium text-white mb-1" style={getThemedTextStyle(themeColor)}>{project.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{project.technologies}</p>
            <p className="text-base text-gray-300 leading-relaxed mb-4">{project.description}</p>
            <div className="flex space-x-4 mt-2">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" style={getThemedTextStyle(themeColor)}>
                GitHub
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" style={getThemedTextStyle(themeColor)}>
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPageContent; 