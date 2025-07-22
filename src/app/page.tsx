'use client';

import React from 'react';
import { getThemedColorHex } from '@/utils/styling';

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
    title: 'Work',
    color: 'purple',
    content: (
      <div>
        <div className="font-semibold">Software Developer Intern</div>
        <div className="text-xs text-gray-400 mb-2">University Health Network · Toronto, ON · Sept-Dec 2024</div>
        <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
          <li>Developed a dynamic web platform using React.js, enhancing accessibility for researchers by 30%</li>
          <li>Optimized API endpoints for MSSQL queries, reducing response times by 15%</li>
          <li>Implemented new features and managed data integration using dotCMS</li>
        </ul>
        <div className="font-semibold">UI/UX Designer and Developer Intern</div>
        <div className="text-xs text-gray-400 mb-2">Voxer · San Francisco, CA · Jan-Apr 2024</div>
        <ul className="list-disc list-inside text-gray-400 text-sm">
          <li>Redesigned UI/UX for all platforms, boosting weekly active users by 5%</li>
          <li>Integrated key features into Voxer Pro using React Native</li>
          <li>Developed a UI for the Business Portal, increasing user satisfaction</li>
        </ul>
      </div>
    )
  },
  {
    key: 'projects',
    title: 'Projects',
    color: 'emerald',
    content: (
      <div>
        <div className="font-semibold">Golf In One</div>
        <div className="text-xs text-gray-400 mb-1">MongoDB, Express.js, React.js, Node.js, Tailwind CSS</div>
        <div className="text-gray-400 text-sm mb-3">Full-stack web app for golf stats and course discovery.</div>
        <div className="font-semibold">SaaS Website Builder</div>
        <div className="text-xs text-gray-400 mb-1">MySQL, Node.js, React.js, Next.js, TypeScript</div>
        <div className="text-gray-400 text-sm mb-3">Scalable SaaS builder with authentication and Stripe payments.</div>
        <div className="font-semibold">YelpCamp</div>
        <div className="text-xs text-gray-400 mb-1">JavaScript, Express.js, Node.js, MongoDB, HTML/CSS</div>
        <div className="text-gray-400 text-sm">Campground review app with a responsive UI and RESTful backend.</div>
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
          <h1 className="text-4xl md:text-5xl font-light tracking-widest text-white mb-2 uppercase text-left">Justin Im</h1>
          <div className="text-base md:text-lg text-gray-400 font-light tracking-wide text-left">Systems Design Engineering @ Waterloo</div>
        </header>
        <div className="space-y-20">
          {sections.map(section => (
            <section key={section.key}>
              <h2
                className="text-xs md:text-xl font-bold mb-6 tracking-widest uppercase"
                style={{ color: getThemedColorHex(section.color), letterSpacing: '0.2em' }}
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
