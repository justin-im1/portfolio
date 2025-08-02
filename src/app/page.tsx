'use client';

import React from 'react';
import { getThemedColorHex } from '@/utils/styling';
import GithubSocialIcon from '@/components/icons/GithubSocialIcon';
import LinkedinSocialIcon from '@/components/icons/LinkedinSocialIcon';

const sections = [
  {
    key: 'about',
    title: 'About',
    color: 'blue',
    content: (
      <div className="text-white/90 text-base leading-loose space-y-6">
        <p>
          Hi 👋 I'm a Systems Design Engineering student at the University of Waterloo, specializing in full-stack development, driven by a passion for building impactful software solutions. I'm always striving to improve and committed to continuous learning 🚀. In previous internships at Constant Contact, University Health Network, and Voxer, I've built a wide range of powerful features for users.
        </p>
        
        <p>
          Outside of coding, I'm a die-hard Toronto Maple Leafs 🏒 and Toronto Blue Jays ⚾️ fan. I also love golfing, with Torrey Pines South being my favourite course ⛳️, and experimenting with new recipes from around the world 🍳.
        </p>

        <p>
          I'm currently seeking winter 2026 internship opportunities!
        </p>
      </div>
    )
  },
  {
    key: 'work',
    title: 'Work Experience',
    color: 'purple',
    content: (
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90 text-base">Software Engineer Intern - Constant Contact</div>
            <div className="text-gray-400 text-base mt-1">Empowering small business marketing</div>
          </div>
          <div className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0">
            <span className="text-2xl" role="img" aria-label="marketing">📈</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90 text-base">Software Developer Intern - University Health Network</div>
            <div className="text-gray-400 text-base mt-1">Building research platforms</div>
          </div>
          <div className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0">
            <span className="text-2xl" role="img" aria-label="hospital">🏥</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90 text-base">UI/UX Designer and Developer Intern - Voxer</div>
            <div className="text-gray-400 text-base mt-1">Enhancing the telecom experience</div>
          </div>
          <div className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0">
            <span className="text-2xl" role="img" aria-label="speech bubble">💬</span>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'projects',
    title: 'Projects',
    color: 'emerald',
    content: (
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90 text-base">Golf In One</div>
            <div className="text-gray-400 text-base mt-1">Solution for tracking golf performance</div>
          </div>
          <a href="https://github.com/justin-im1/Golf-In-One" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0 text-white">
            <GithubSocialIcon />
          </a>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90 text-base">SaaS Website Builder</div>
            <div className="text-gray-400 text-base mt-1">SaaS tool for building websites</div>
          </div>
          <a href="https://github.com/justin-im1/SaaS-Website-Builder" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0 text-white">
            <GithubSocialIcon />
          </a>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90 text-base">Portfolio</div>
            <div className="text-gray-400 text-base mt-1">Personal portfolio to learn about me</div>
          </div>
          <a href="https://github.com/justin-im1/portfolio" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0 text-white">
            <GithubSocialIcon />
          </a>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90 text-base">YelpCamp</div>
            <div className="text-gray-400 text-base mt-1">Campground review platform</div>
          </div>
          <a href="https://github.com/justin-im1/YelpCamp" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0 text-white">
            <GithubSocialIcon />
          </a>
        </div>
      </div>
    )
  },
  {
    key: 'skills',
    title: 'Skills',
    color: 'amber',
    content: (
      <div className="space-y-6">
        <div>
          <div className="font-semibold text-white/90 mb-2 text-base">Languages</div>
          <div className="text-gray-400 text-base">
            Python, Java, C++, SQL, JavaScript, TypeScript, HTML/CSS
          </div>
        </div>

        <div>
          <div className="font-semibold text-white/90 mb-2 text-base">Libraries & Frameworks</div>
          <div className="text-gray-400 text-base">
            React.js, React Native, Express.js, Node.js, Bootstrap, Tailwind CSS, Next.js, Expo, Prisma
          </div>
        </div>

        <div>
          <div className="font-semibold text-white/90 mb-2 text-base">Databases</div>
          <div className="text-gray-400 text-base">
            MongoDB, MySQL, MSSQL
          </div>
        </div>

        <div>
          <div className="font-semibold text-white/90 mb-2 text-base">Tools</div>
          <div className="text-gray-400 text-base">
            Git, GitHub, Bitbucket, Docker, AWS, Visual Studio Code, Xcode, Postman, Jenkins, Figma
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'contact',
    title: 'Contact',
    color: 'rose',
    content: (
      <div className="space-y-4">
        <a href="mailto:justin.im@uwaterloo.ca" className="font-semibold block text-base">
          justin.im@uwaterloo.ca
        </a>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://linkedin.com/in/justin-im1" target="_blank" rel="noopener noreferrer" 
             className="text-white hover:scale-110 transition-transform">
            <LinkedinSocialIcon />
          </a>
          <a href="https://github.com/justin-im1" target="_blank" rel="noopener noreferrer" 
             className="text-white hover:scale-110 transition-transform">
            <GithubSocialIcon />
          </a>
        </div>
      </div>
    )
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-prose mx-auto">
        <header className="mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-white mb-2 uppercase text-left text-white/90">Justin Im</h1>
          {/* <div className="text-base md:text-lg text-gray-400 font-light tracking-wide text-left">Systems Design Engineering @ Waterloo</div> */}
        </header>
        <div className="space-y-12">
          {sections.map(section => (
            <section key={section.key}>
              <h2
                className="text-xs md:text-2xl font-bold mb-4 tracking-widest"
                style={{ color: getThemedColorHex(section.color)}}
              >
                {section.title}
              </h2>
              <div className="text-gray-200 text-base md:text-lg leading-relaxed">{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
