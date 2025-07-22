import React from 'react';
import { PageContentProps } from '@/types';
import { getThemedTextStyle } from '@/utils/styling';

const AboutPageContent: React.FC<PageContentProps> = ({ themeColor }) => (
  <>
    <div className="space-y-10">
      {/* Who I Am */}
      <div className="space-y-4">
        <h3 
          className="text-2xl font-semibold text-white mb-4" 
          style={getThemedTextStyle(themeColor)}
        >
          Who I Am
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a Systems Design Engineering student at the University of Waterloo (graduating April 2028, GPA: 3.9/4.0), 
          passionate about creating technology that makes a real difference. Through my coursework in Data Structures and Algorithms, 
          Digital Systems, and Digital Computation, I've developed a strong foundation in both theoretical concepts and practical applications. 
          Beyond academics, I serve as a SYDE Representative in the Waterloo Engineering Endowment Foundation, where I help shape 
          the future of engineering education.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          My experience spans full-stack development, UI/UX design, and research platform development. I'm driven by the challenge 
          of building accessible, efficient solutions that enhance user experiences and solve real-world problems.
        </p>
      </div>

      {/* What I Love */}
      <div className="space-y-4">
        <h3 
          className="text-2xl font-semibold text-white mb-4" 
          style={getThemedTextStyle(themeColor)}
        >
          What I Love
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          When I'm not coding, you'll find me cheering for the <strong>Toronto Maple Leafs</strong> (yes, even through the tough seasons), 
          perfecting my swing on the <strong>golf course</strong>, or experimenting with new recipes in the kitchen. 
          <strong>Cooking</strong> has taught me that great results come from patience, precision, and a willingness to iterate – 
          lessons that carry over surprisingly well to software development.
        </p>
      </div>

      {/* What I Build With */}
      <div className="space-y-4">
        <h3 
          className="text-2xl font-semibold text-white mb-4" 
          style={getThemedTextStyle(themeColor)}
        >
          What I Build With
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-200 mb-2">Frontend</h4>
            <p className="text-gray-300 leading-relaxed">React.js, React Native, Next.js, TypeScript, JavaScript, HTML/CSS, Tailwind CSS, Bootstrap</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-200 mb-2">Backend</h4>
            <p className="text-gray-300 leading-relaxed">Node.js, Express.js, Python, C++, RESTful APIs, Prisma</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-200 mb-2">Databases</h4>
            <p className="text-gray-300 leading-relaxed">MongoDB, MySQL, MSSQL</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-200 mb-2">Tools</h4>
            <p className="text-gray-300 leading-relaxed">Git, GitHub, Bitbucket, Docker, VS Code, Xcode, Postman, Expo</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutPageContent; 