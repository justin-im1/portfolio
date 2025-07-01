import React from 'react';
import { LandingPageProps } from '@/types';

const LandingPage: React.FC<LandingPageProps> = ({ onEnterPortfolio }) => {
  return (
    <div className="relative w-full h-screen bg-black text-white font-inter flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Dynamic radial gradient for landing page with pulsing effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-800/20 to-transparent animate-pulse-light pointer-events-none"></div>
      <div className={`absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none`}></div>

      <div className="text-center max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold text-white animate-fade-in tracking-tight">
          Justin Im
        </h1>
        
        <div className="flex items-center justify-center space-x-4 mt-8 opacity-0 animate-fade-in-delay" style={{animationDelay: '0.4s'}}>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-dot-float-1 shadow-lg shadow-blue-500/50"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-dot-float-2 shadow-lg shadow-purple-500/50"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-dot-float-3 shadow-lg shadow-pink-500/50"></div>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-dot-float-4 shadow-lg shadow-emerald-500/50"></div>
        </div>
      </div>

      {/* Top-Left Option - Blue Theme for WORK EXPERIENCE */}
      <button
        className="absolute top-4 left-4 text-sky-400 hover:text-sky-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-tl transform hover:scale-105 cursor-pointer"
        style={{ textShadow: '0 0 8px rgba(14, 165, 233, 0.6)' }}
        onClick={() => onEnterPortfolio('sky', 'work_history')}
      >
        WORK EXPERIENCE
      </button>

      {/* Top-Right Option - Purple Theme for ABOUT */}
      <button
        className="absolute top-4 right-4 text-purple-400 hover:text-purple-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-tr transform hover:scale-105 cursor-pointer"
        style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.6)' }}
        onClick={() => onEnterPortfolio('purple', 'about')}
      >
        ABOUT
      </button>

      {/* Bottom-Left Option - Rose Theme for PROJECTS */}
      <button
        className="absolute bottom-4 left-4 text-rose-400 hover:text-rose-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-bl transform hover:scale-105 cursor-pointer"
        style={{ textShadow: '0 0 8px rgba(225, 29, 72, 0.6)' }}
        onClick={() => onEnterPortfolio('rose', 'projects')}
      >
        PROJECTS
      </button>

      {/* Bottom-Right Option - Emerald Theme for CONTACT */}
      <button
        className="absolute bottom-4 right-4 text-emerald-400 hover:text-emerald-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-br transform hover:scale-105 cursor-pointer"
        style={{ textShadow: '0 0 8px rgba(16, 185, 129, 0.6)' }}
        onClick={() => onEnterPortfolio('emerald', 'contact')}
      >
        CONTACT
      </button>
    </div>
  );
};

export default LandingPage; 