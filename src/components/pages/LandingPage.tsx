import React from 'react';
import { LandingPageProps } from '@/types';

const LandingPage: React.FC<LandingPageProps> = ({ onEnterPortfolio }) => {
  return (
    <div className="relative w-full h-screen bg-black text-white font-inter flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Dynamic radial gradient for landing page with pulsing effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-800/20 to-transparent animate-pulse-light pointer-events-none"></div>
      <div className={`absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none`}></div>

      <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-8 animate-fade-in drop-shadow-md tracking-tighter">
        Hello<span className="text-gray-600">.</span>
      </h1>

      {/* Top-Left Option - Blue Theme for WORK EXPERIENCE */}
      <button
        className="absolute top-10 left-10 text-sky-400 hover:text-sky-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-tl transform hover:scale-105 cursor-pointer"
        style={{ textShadow: '0 0 8px rgba(14, 165, 233, 0.6)' }}
        onClick={() => onEnterPortfolio('sky', 'work_history')}
      >
        WORK EXPERIENCE
      </button>

      {/* Top-Right Option - Purple Theme for ABOUT */}
      <button
        className="absolute top-10 right-10 text-purple-400 hover:text-purple-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-tr transform hover:scale-105 cursor-pointer"
        style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.6)' }}
        onClick={() => onEnterPortfolio('purple', 'about')}
      >
        ABOUT
      </button>

      {/* Bottom-Left Option - Rose Theme for PROJECTS */}
      <button
        className="absolute bottom-10 left-10 text-rose-400 hover:text-rose-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-bl transform hover:scale-105 cursor-pointer"
        style={{ textShadow: '0 0 8px rgba(225, 29, 72, 0.6)' }}
        onClick={() => onEnterPortfolio('rose', 'projects')}
      >
        PROJECTS
      </button>

      {/* Bottom-Right Option - Emerald Theme for CONTACT */}
      <button
        className="absolute bottom-10 right-10 text-emerald-400 hover:text-emerald-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-br transform hover:scale-105 cursor-pointer"
        style={{ textShadow: '0 0 8px rgba(16, 185, 129, 0.6)' }}
        onClick={() => onEnterPortfolio('emerald', 'contact')}
      >
        CONTACT
      </button>
    </div>
  );
};

export default LandingPage; 