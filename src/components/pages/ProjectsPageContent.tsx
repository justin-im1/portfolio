import React from 'react';
import { PageContentProps } from '@/types';
import { getThemedTextStyle } from '@/utils/styling';
import { projects } from '@/data/portfolio';
import GithubSocialIcon from '@/components/icons/GithubSocialIcon';

const ProjectsPageContent: React.FC<PageContentProps> = ({ themeColor }) => {
  return (
    <>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-start pb-4">
            <div className="flex items-start justify-between w-full mb-2">
              <div className="flex flex-col">
                <h3 className="text-2xl font-medium text-white mb-1" style={getThemedTextStyle(themeColor)}>{project.name}</h3>
                <p className="text-sm text-gray-500">{project.technologies}</p>
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer mt-1" style={getThemedTextStyle(themeColor)}>
                <GithubSocialIcon />
              </a>
            </div>
            <p className="text-base text-gray-300 leading-relaxed mb-4">{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPageContent; 