import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import { LandingPageProps } from '@/types';

const LandingPage: React.FC<LandingPageProps> = ({ onEnterPortfolio }) => {
  const [activeDot, setActiveDot] = useState<number>(-1);
  const [isSequenceRunning, setIsSequenceRunning] = useState(false);
  const mountedRef = useRef(false);
  
  const dotControls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation()
  ];

  // Trail controls for each dot (18 trail segments for much longer trails)
  const trailControls = Array.from({ length: 4 }, () => 
    Array.from({ length: 18 }, () => useAnimation())
  );

  const animateTrails = async (dotIndex: number, targetX: number, targetY: number, duration: number) => {
    if (!mountedRef.current) return; // Only animate trails if component is mounted
    
    const trails = trailControls[dotIndex];
    
    // Animate each trail segment with staggered delays for smooth following effect
    for (let i = 0; i < trails.length; i++) {
      if (!mountedRef.current) return;
      try {
        await trails[i].start({
          x: targetX,
          y: targetY,
          transition: {
            duration: duration * 0.8, // Slower trails for longer persistence
            delay: i * 0.04, // Increased delay for longer trail spread
            ease: "easeOut"
          }
        });
      } catch (error) {
        // Silently handle control errors during unmount
        if (mountedRef.current) {
          console.warn('Trail animation error:', error);
        }
        return;
      }
    }
  };

  const createBouncingSequence = async (dotIndex: number) => {
    if (!mountedRef.current) return; // Only animate if component is mounted
    
    const control = dotControls[dotIndex];
    
    // Use much more conservative bounds to ensure dots stay visible
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    
    // Asymmetric bounds - much closer to top than bottom
    const maxX = Math.min(screenWidth * 0.32, 300); // 32% of screen width or 300px max
    const maxYTop = Math.min(screenHeight * 0.45, 320); // Can go very close to top
    const maxYBottom = Math.min(screenHeight * 0.25, 150); // Stay much further from bottom
    
    // Create random bouncing pattern with asymmetric vertical bounds
    const createRandomBouncePoint = () => {
      const edge = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
      
      switch (edge) {
        case 0: // Top edge - can go very close
          return {
            x: (Math.random() - 0.5) * 2 * maxX,
            y: -maxYTop // Much closer to top
          };
        case 1: // Right edge  
          return {
            x: maxX,
            y: (Math.random() - 0.5) * (maxYTop + maxYBottom) // Full vertical range on sides
          };
        case 2: // Bottom edge - stays much further away
          return {
            x: (Math.random() - 0.5) * 2 * maxX,
            y: maxYBottom // Much further from bottom
          };
        case 3: // Left edge
          return {
            x: -maxX,
            y: (Math.random() - 0.5) * (maxYTop + maxYBottom) // Full vertical range on sides
          };
        default:
          return { x: 0, y: 0 };
      }
    };

    // Generate random number of bounces (3-6)
    const numBounces = Math.floor(Math.random() * 4) + 3;
    const bouncePoints: { x: number; y: number }[] = [];
    
    for (let i = 0; i < numBounces; i++) {
      bouncePoints.push(createRandomBouncePoint());
    }
    
    // Always end by returning to center
    bouncePoints.push({ x: 0, y: 0 });

    // Scale up and shoot out - fast
    if (!mountedRef.current) return;
    try {
      await control.start({
        scale: 1.5,
        transition: { 
          duration: 0.25, // Much faster scale up
          type: "spring",
          stiffness: 200,
          damping: 15
        }
      });
    } catch (error) {
      if (mountedRef.current) {
        console.warn('Scale animation error:', error);
      }
      return;
    }

    // Fast bouncing sequence with long trails
    for (let i = 0; i < bouncePoints.length; i++) {
      if (!mountedRef.current) return; // Check mount state in loop
      
      const isLastPoint = i === bouncePoints.length - 1;
      const duration = isLastPoint ? 0.8 : 0.6; // Much faster movement
      
      // Animate trails first for better visibility
      animateTrails(dotIndex, bouncePoints[i].x, bouncePoints[i].y, duration);

      // Then animate main dot with fast, snappy physics
      try {
        await control.start({
          x: bouncePoints[i].x,
          y: bouncePoints[i].y,
          scale: isLastPoint ? 1 : 1.5,
          transition: { 
            duration: duration,
            type: "spring",
            stiffness: 120, // Higher stiffness for faster movement
            damping: 18,    // Lower damping for more responsive feel
            mass: 1         // Lower mass for lighter, faster movement
          }
        });
      } catch (error) {
        if (mountedRef.current) {
          console.warn('Bounce animation error:', error);
        }
        return;
      }
    }

    // Resume normal floating animation
    if (!mountedRef.current) return;
    try {
      control.start({
        y: [0, -12, 0, 12, 0],
        x: [0, Math.sin(dotIndex * Math.PI / 2) * 8, 0],
        transition: {
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }
      });
    } catch (error) {
      if (mountedRef.current) {
        console.warn('Resume animation error:', error);
      }
    }
  };

  const startBouncingSequence = async () => {
    if (isSequenceRunning || !mountedRef.current) return;
    setIsSequenceRunning(true);

    for (let i = 0; i < 4; i++) {
      if (!mountedRef.current) break; // Exit loop if component unmounted
      
      setActiveDot(i);
      await createBouncingSequence(i);
      await new Promise(resolve => setTimeout(resolve, 400)); // Short wait between dots
    }

    if (mountedRef.current) {
      setActiveDot(-1);
      setIsSequenceRunning(false);
    }
  };

  useEffect(() => {
    // Set mounted state
    mountedRef.current = true;

    // Start the sequence after a delay
    const runContinuousSequence = async () => {
      // Wait a bit for initial animations to settle
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      while (mountedRef.current) {
        await startBouncingSequence();
        await new Promise(resolve => setTimeout(resolve, 1200)); // Short pause between sequences
      }
    };

    runContinuousSequence();

    // Cleanup function
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white font-inter flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Dynamic radial gradient for landing page with pulsing effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-800/20 to-transparent animate-pulse-light pointer-events-none"></div>
      


      <div className="text-center max-w-4xl">
        <h1 
          className="text-6xl md:text-8xl font-bold text-white animate-fade-in tracking-tight"
          style={{
            textShadow: `
              0 0 10px rgba(255, 255, 255, 0.3),
              0 0 20px rgba(255, 255, 255, 0.2),
              0 0 30px rgba(255, 255, 255, 0.15),
              0 0 40px rgba(255, 255, 255, 0.08)
            `
          }}
        >
          Justin Im
        </h1>
        
        <motion.div 
          className="flex items-center justify-center space-x-4 mt-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          {/* Trail elements - highly visible */}
          {[
            { color: "blue", delay: 0, angle: 0 },
            { color: "purple", delay: 0.2, angle: 90 },
            { color: "pink", delay: 0.4, angle: 180 },
            { color: "emerald", delay: 0.6, angle: 270 }
          ].map((dot, dotIndex) => (
            <div key={`trails-${dotIndex}`} className="absolute">
              {trailControls[dotIndex].map((trailControl, trailIndex) => (
                <motion.div
                  key={`trail-${dotIndex}-${trailIndex}`}
                  className={`absolute w-4 h-4 bg-${dot.color}-300 rounded-full pointer-events-none`}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={trailControl}
                  style={{
                    opacity: activeDot === dotIndex ? Math.max(1.0 - trailIndex * 0.045, 0.2) : 0,
                    filter: `blur(${trailIndex * 0.15}px)`,
                    transform: `scale(${Math.max(1.1 - trailIndex * 0.04, 0.4)})`
                  }}
                />
              ))}
            </div>
          ))}
          
          {/* Main dots */}
          {[
            { color: "blue", delay: 0, angle: 0 },
            { color: "purple", delay: 0.2, angle: 90 },
            { color: "pink", delay: 0.4, angle: 180 },
            { color: "emerald", delay: 0.6, angle: 270 }
          ].map((dot, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 bg-${dot.color}-500 rounded-full relative ${
                activeDot === index ? 'z-50' : 'z-10'
              }`}

              initial={{ 
                scale: 0,
                rotate: dot.angle,
                opacity: 0,
                x: 0,
                y: 0
              }}
              animate={activeDot === index ? dotControls[index] : {
                scale: 1,
                rotate: [dot.angle, dot.angle + 360, dot.angle + 720],
                y: [0, -12, 0, 12, 0],
                x: [0, Math.sin(index * Math.PI / 2) * 8, 0],
                opacity: 1
              }}
              transition={activeDot === index ? {} : {
                scale: { duration: 0.6, delay: dot.delay, type: "spring", stiffness: 200, damping: 20 },
                rotate: { duration: 4, repeat: Infinity, ease: "linear", delay: dot.delay },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: dot.delay },
                x: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: dot.delay + 0.5 },
                opacity: { duration: 0.4, delay: dot.delay, type: "tween" }
              }}
            >
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Top-Left Option - Blue Theme for WORK EXPERIENCE */}
      <button
        className="absolute top-4 left-4 text-blue-400 hover:text-blue-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-tl transform hover:scale-105 cursor-pointer"
        onClick={() => onEnterPortfolio('blue', 'work_history')}
      >
        WORK EXPERIENCE
      </button>

      {/* Top-Right Option - Purple Theme for ABOUT */}
      <button
        className="absolute top-4 right-4 text-purple-400 hover:text-purple-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-tr transform hover:scale-105 cursor-pointer"
        onClick={() => onEnterPortfolio('purple', 'about')}
      >
        ABOUT
      </button>

      {/* Bottom-Left Option - Pink Theme for PROJECTS */}
      <button
        className="absolute bottom-4 left-4 text-pink-400 hover:text-pink-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-bl transform hover:scale-105 cursor-pointer"
        onClick={() => onEnterPortfolio('pink', 'projects')}
      >
        PROJECTS
      </button>

      {/* Bottom-Right Option - Emerald Theme for CONTACT */}
      <button
        className="absolute bottom-4 right-4 text-emerald-400 hover:text-emerald-300 transition duration-300 text-lg md:text-xl font-medium focus:outline-none animate-slide-in-br transform hover:scale-105 cursor-pointer"
        onClick={() => onEnterPortfolio('emerald', 'contact')}
      >
        CONTACT
      </button>
    </div>
  );
};

export default LandingPage; 