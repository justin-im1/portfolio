'use client';

import React from 'react';
import { getThemedColorHex } from '@/utils/styling';
import GithubSocialIcon from '@/components/icons/GithubSocialIcon';

const sections = [
  {
    key: 'about',
    title: 'About',
    color: 'blue',
    content: (
      <p>
        I'm a Systems Design Engineering student at Waterloo (SYDE '28, GPA 3.9) passionate about building things that make life better. I love full-stack development, UI/UX, and am always learning and iterating. Outside of tech, you’ll find me cheering for the Toronto Maple Leafs, working on my golf swing, or experimenting in the kitchen.
      </p>
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
            <div className="font-semibold text-white/90">Software Engineer Intern - Constant Contact</div>
            <div className="text-gray-400 text-sm mt-1">Empowering small business marketing</div>
          </div>
          <div className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0">
            <span className="text-2xl" role="img" aria-label="marketing">📈</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90">Software Developer Intern - University Health Network</div>
            <div className="text-gray-400 text-sm mt-1">Building research platforms</div>
          </div>
          <div className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0">
            <span className="text-2xl" role="img" aria-label="hospital">🏥</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90">UI/UX Designer and Developer Intern - Voxer</div>
            <div className="text-gray-400 text-sm mt-1">Enhancing the telecom experience</div>
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
            <div className="font-semibold text-white/90">Golf In One</div>
            <div className="text-gray-400 text-sm mt-1">Solution for tracking golf performance</div>
          </div>
          <a href="https://github.com/justin-im1/Golf-In-One" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0 text-white">
            <GithubSocialIcon />
          </a>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90">SaaS Website Builder</div>
            <div className="text-gray-400 text-sm mt-1">SaaS tool for building websites</div>
          </div>
          <a href="https://github.com/justin-im1/SaaS-Website-Builder" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0 text-white">
            <GithubSocialIcon />
          </a>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90">Portfolio</div>
            <div className="text-gray-400 text-sm mt-1">Personal portfolio to learn about me</div>
          </div>
          <a href="https://github.com/justin-im1/portfolio" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 flex items-center justify-center ml-6 flex-shrink-0 text-white">
            <GithubSocialIcon />
          </a>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white/90">YelpCamp</div>
            <div className="text-gray-400 text-sm mt-1">Campground review platform</div>
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
    key: 'contact',
    title: 'Contact',
    color: 'pink',
    content: (
      <div className="space-y-1">
        <div className="text-gray-300">justin.im@uwaterloo.ca</div>
        <div className="text-gray-400 text-sm">647-640-1125</div>
        <div className="text-gray-400 text-sm">linkedin.com/in/justin-im1</div>
        <div className="text-gray-400 text-sm">github.com/justin-im1</div>
      </div>
    )
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-prose mx-auto">
        <header className="mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-white mb-2 uppercase text-left">Justin Im</h1>
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
