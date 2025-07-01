import React from 'react';
import { PageContentProps } from '@/types';
import { getThemedTextStyle } from '@/utils/styling';
import { experiences } from '@/data/portfolio';

const WorkHistoryPageContent: React.FC<PageContentProps> = ({ themeColor }) => {
  return (
    <>
      <p className="text-lg text-gray-300 leading-relaxed mb-10 text-center font-light">
        My professional journey, highlighting key roles and contributions.
      </p>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col items-start pb-4">
            <h3 className="text-2xl font-medium text-white mb-1" style={getThemedTextStyle(themeColor)}>{exp.title}</h3>
            <p className="text-lg text-gray-400 mb-2">{exp.company} <span className="text-gray-600">//</span> {exp.dates}</p>
            <ul className="list-none ml-4 text-gray-300 space-y-1 pl-4">
              {exp.details.map((detail, dIndex) => (
                <li key={dIndex} className="relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-500 before:-ml-4">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkHistoryPageContent; 