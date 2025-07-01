import React from 'react';
import { ContentLayoutProps } from '@/types';
import { getThemedTextStyle, getBackgroundRadialGradientStyle } from '@/utils/styling';
import GithubSocialIcon from '@/components/icons/GithubSocialIcon';
import LinkedinSocialIcon from '@/components/icons/LinkedinSocialIcon';

const ContentLayout: React.FC<ContentLayoutProps> = ({ title, children, themeColor, onGoBack }) => (
  <div className="font-inter antialiased text-gray-100 bg-black min-h-screen flex items-start justify-center relative overflow-hidden py-16">
    {/* Subtle radial gradient background effect */}
    <div className="absolute inset-0 pointer-events-none opacity-80"
         style={getBackgroundRadialGradientStyle(themeColor)}></div>
    <div className={`absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none`}></div>

    <div className="max-w-2xl mx-auto px-6 relative z-10 w-full animate-content-fade-in">
      {/* Back to Main Page Button */}
      <button
        onClick={onGoBack}
        className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base font-light flex items-center group cursor-pointer"
        style={getThemedTextStyle(themeColor)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mr-2 transform -translate-x-0 group-hover:-translate-x-1 transition-transform duration-200`}>
          <path d="m15 18-6-6 6-6"/>
        </svg>
        RETURN
      </button>

      {/* Page Title */}
      <h1 className="mt-20 text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8 text-center tracking-tight"
        style={getThemedTextStyle(themeColor)}>
        <span style={getThemedTextStyle(themeColor)}>/</span> {title}
      </h1>

      {children}

      {/* Social Links Footer */}
      <footer className="pt-10 flex justify-center space-x-12 text-gray-500">
        <a href="https://github.com/justin-im1" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white cursor-pointer" style={getThemedTextStyle(themeColor)}>
          <GithubSocialIcon />
        </a>
        <a href="https://linkedin.com/in/justin-im1" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white cursor-pointer" style={getThemedTextStyle(themeColor)}>
          <LinkedinSocialIcon />
        </a>
      </footer>
    </div>
  </div>
);

export default ContentLayout; 