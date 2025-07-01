import React from 'react';
import { PageContentProps } from '@/types';
import { getThemedTextStyle } from '@/utils/styling';

const ContactPageContent: React.FC<PageContentProps> = ({ themeColor }) => {
  return (
    <>
      <p className="text-lg text-gray-300 leading-relaxed mb-10 text-center font-light">
        Let's connect and build something amazing together.
      </p>
      <div className="flex flex-col items-center space-y-6">
        <a href="mailto:justin.im@uwaterloo.ca"
           className={`text-xl font-medium hover:underline transition-colors duration-300 hover:text-white cursor-pointer`}
           style={getThemedTextStyle(themeColor)}>
          justin.im@uwaterloo.ca
        </a>
        {/* <a href="https://docs.google.com/document/d/1B6m2K8tWl4F5x8x8X9r0z9c6b7s5j7f8/export?format=pdf" target="_blank" rel="noopener noreferrer"
           className={`text-xl font-medium hover:underline transition-colors duration-300 text-gray-400 hover:text-white cursor-pointer`}
           style={getThemedTextStyle(themeColor)}>
          Download Resume (PDF)
        </a> */}
        <p className="text-base text-gray-500">Phone: 647-640-1125</p>
      </div>
    </>
  );
};

export default ContactPageContent; 