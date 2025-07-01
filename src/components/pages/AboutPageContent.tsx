import React from 'react';
import { PageContentProps } from '@/types';
import DevIcon from '@/components/icons/DevIcon';
import CodeIcon from '@/components/icons/CodeIcon';
import TerminalIcon from '@/components/icons/TerminalIcon';
import BranchIcon from '@/components/icons/BranchIcon';
import ServerIcon from '@/components/icons/ServerIcon';

const AboutPageContent: React.FC<PageContentProps> = ({ themeColor }) => (
  <>
    <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center font-light">
      I'm Justin Im, pursuing a Bachelor of Applied Science in Systems Design Engineering at the University of Waterloo (Expected Graduation: April 2028, GPA: 3.9/4.0). My relevant coursework includes Data Structures and Algorithms, Digital Systems, and Digital Computation. I also serve as a SYDE Representative in the Waterloo Engineering Endowment Foundation.
    </p>
    <div className="text-center">
      <h3 className="text-xl font-semibold text-gray-300 mb-6">/ core_skills</h3>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 py-8">
        <DevIcon /><CodeIcon /><TerminalIcon /><BranchIcon /><ServerIcon />
      </div>
      <div className="text-sm text-gray-400 leading-relaxed space-y-2 mt-4">
        <p><strong>Languages:</strong> Python, C++, SQL, JavaScript, TypeScript, HTML/CSS</p>
        <p><strong>Libraries/Frameworks:</strong> React.js, React Native, Express.js, Node.js, Bootstrap, Tailwind CSS, Next.js, Expo, Prisma</p>
        <p><strong>Databases:</strong> MongoDB, MySQL, MSSQL</p>
        <p><strong>Developer Tools:</strong> Git, GitHub, Bitbucket, Docker, Visual Studio Code, Xcode, Postman</p>
      </div>
    </div>
  </>
);

export default AboutPageContent; 