import React from 'react';
import { PageContentProps } from '@/types';
import { getThemedTextStyle } from '@/utils/styling';
import { experiences } from '@/data/portfolio';

const WorkHistoryPageContent: React.FC<PageContentProps> = ({ themeColor }) => {
  return (
    <>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="space-y-4">
            {/* Header Section */}
            <div className="space-y-1">
              <h3 
                className="text-2xl font-semibold text-white" 
                style={getThemedTextStyle(themeColor)}
              >
                {exp.title}
              </h3>
              <p className="text-xl text-gray-300 font-medium">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 font-mono tracking-wide">
                {exp.dates} • {exp.location}
              </p>
            </div>
            
            {/* Experience Details */}
            <div className="space-y-2 pt-2">
              {exp.details.map((detail, dIndex) => (
                <div key={dIndex} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 bg-gray-500" />
                  <p className="text-gray-300 leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkHistoryPageContent; 