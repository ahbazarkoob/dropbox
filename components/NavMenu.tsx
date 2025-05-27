"use client";
import React from 'react';
import { useEffect, useState } from 'react';

export default function NavMenu() {
  const [buttonSize, setButtonSize] = useState(0);

  // Calculate button size based on viewport dimensions
  useEffect(() => {
    const updateButtonSize = () => {
      const minDimension = Math.min(window.innerWidth, window.innerHeight) - 64;
      const size = Math.min(500, minDimension);
      setButtonSize(size);
    };

    updateButtonSize();
    window.addEventListener('resize', updateButtonSize);
    return () => window.removeEventListener('resize', updateButtonSize);
  }, []);

  // Assume --button-size is a fixed value for now, e.g., 48px
  const buttonSizeVar = 48;
  const tileSize = buttonSize - buttonSizeVar;

  return (
    <div className="nav-wrapper relative opacity-0 transition-opacity duration-300">
      {/* Menu Button */}
      <div className="menu">
        <div
        
          className="tile-menu-tile nav-button nav-button-gridline relative overflow-hidden"
          style={{
            width: tileSize,
            height: tileSize,
            transition: 'initial',
          }}
        >
          {/* Animated Lines for Menu Button */}
          <div
            className="tile-line nav-l absolute top-1/2 left-0 w-px h-full bg-blue-500"
            style={{
              transform: 'translate(0, -50%)',
              transition: 'transform 3s cubic-bezier(0.5, 0, 0, 1), background-color 1.5s ease-in-out 0.75s',
            }}
          />
          <div
            className="tile-line nav-r absolute top-1/2 right-0 w-px h-full bg-blue-500"
            style={{
              transform: 'translate(0, -50%)',
              transition: 'transform 3s cubic-bezier(0.5, 0, 0, 1), background-color 1.5s ease-in-out 0.75s',
            }}
          />
          <div
            className="tile-line nav-t absolute top-0 left-1/2 w-full h-px bg-blue-500"
            style={{
              transform: 'translate(50%, 0)',
              transition: 'transform 3s cubic-bezier(0.5, 0, 0, 1), background-color 1.5s ease-in-out 0.75s',
            }}
          />
          <div
            className="tile-line nav-b absolute bottom-0 left-1/2 w-full h-px bg-blue-500"
            style={{
              transform: 'translate(50%, 0)',
              transition: 'transform 3s cubic-bezier(0.5, 0, 0, 1), background-color 1.5s ease-in-out 0.75s',
            }}
          />
        </div>
      </div>

      {/* Navigation Tiles (1 to 8) */}
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`nav-tile nav-tile-${index + 1} nav-tile-gridlines absolute`}
          style={{
            transform: 'scale(1) translate(0px, 0px)',
            pointerEvents: 'auto',
          }}
        >
          <div className="tile-line-wrapper relative w-24 h-24">
            <div
              className="tile-line nav-l absolute top-1/2 left-0 w-px h-full bg-blue-500 opacity-100"
              style={{
                transform: 'translateY(-50%) scaleX(1)',
                transition: 'opacity 1.5s ease-in-out 1.25s',
              }}
            />
            <div
              className="tile-line nav-r absolute top-1/2 right-0 w-px h-full bg-blue-500 opacity-100"
              style={{
                transform: 'translateY(-50%) scaleX(1)',
                transition: 'opacity 1.5s ease-in-out 1.25s',
              }}
            />
            <div
              className="tile-line nav-t absolute top-0 left-1/2 w-full h-px bg-blue-500 opacity-100"
              style={{
                transform: 'translateX(50%) scaleY(1)',
                transition: 'opacity 1.5s ease-in-out 1.25s',
              }}
            />
            <div
              className="tile-line nav-b absolute bottom-0 left-1/2 w-full h-px bg-blue-500 opacity-100"
              style={{
                transform: 'translateX(50%) scaleY(1)',
                transition: 'opacity 1.5s ease-in-out 1.25s',
              }}
            />
          </div>




          <main className="p-4">
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-screen font-sans">
          {/* Framework - Top Left (Dark Blue) */}
          <div className="bg-[#283750] text-white flex flex-col items-start justify-start p-6 rounded-lg">
            <span className="text-2xl font-bold">Framework</span>
            <svg
              className="mt-6"
              width="60"
              height="60"
              viewBox="0 0 100 100"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="20" cy="20" r="4" />
              <circle cx="80" cy="80" r="4" />
              <line x1="20" y1="20" x2="80" y2="80" />
            </svg>
          </div>

          {/* Voice & Tone - Top Middle (Yellow) */}
          <div className="col-start-2 bg-[#fad24b] flex flex-col items-center justify-center col-span-1 row-span-1 rounded-lg">
            <span className="text-2xl font-bold text-[#684505]">
              Voice & Tone
            </span>
            <svg
              className="mt-6"
              width="60"
              height="60"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M30 20 C30 10, 70 10, 70 20"
                stroke="#684505"
                strokeWidth="8"
              />
              <path
                d="M30 80 C30 90, 70 90, 70 80"
                stroke="#684505"
                strokeWidth="8"
              />
            </svg>
          </div>

          {/* Logo - Top Right (Light Blue) */}
          <div className="col-start-3 bg-[#b4c8e1] flex flex-col items-start justify-start p-6 col-span-1 row-span-1 rounded-lg">
            <span className="text-2xl font-bold text-[#283750]">Logo</span>
            <svg
              className="mt-6"
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="#283750"
            >
              <path d="M20 20 L50 20 L70 50 L50 80 L20 80 L40 50 Z" />
              <path d="M50 20 L80 20 L60 50 L80 80 L50 80 L70 50 Z" />
            </svg>
          </div>

          {/* Typography - Top Far Right (Orange) */}
          <div className="col-start-4 bg-[#fa551e] flex flex-col items-start justify-start p-6 col-span-1 row-span-1 rounded-lg">
            <span className="text-2xl font-bold text-[#4e0119]">
              Typography
            </span>
            <div className="text-5xl text-[#4e0119] mt-6">Aa</div>
          </div>

          {/* Dropbox Logo Square - Center (Blue) */}
          <div className="col-start-2 row-start-2 bg-[#0061fe] flex items-center justify-center col-span-1 row-span-1 rounded-lg">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="white">
              <path d="M20 20 L50 40 L20 60 L50 40 Z" />
              <path d="M50 40 L80 20 L50 40 L80 60 Z" />
              <path d="M20 60 L50 80 L80 60 L50 40 Z" />
            </svg>
          </div>

          {/* Iconography - Bottom Left (Green) */}
          <div className="row-start-3 bg-[#b4dc19] flex flex-col items-start justify-start p-6 col-span-1 row-span-1 rounded-lg">
            <span className="text-2xl font-bold text-[#175641]">
              Iconography
            </span>
            <svg
              className="mt-6"
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              stroke="#175641"
              strokeWidth="4"
            >
              <rect x="30" y="20" width="40" height="60" rx="5" />
              <path d="M40 50 H60 M40 60 H60" />
            </svg>
          </div>

          {/* Color - Bottom Center (Orange) */}
          <div className="col-start-2 row-start-3 bg-[#f9a34b] flex flex-col items-start justify-start p-6 col-span-1 row-span-1 rounded-lg">
            <span className="text-2xl font-bold text-[#6d2e09]">Color</span>
            <div className="mt-6 flex space-x-4">
              <div className="w-10 h-10 bg-[#6d2e09] rounded-full"></div>
              <div className="w-10 h-10 bg-[#6d2e09] rounded"></div>
            </div>
          </div>

          {/* Imagery - Bottom Right (Black) */}
          <div className="col-start-3 row-start-3 bg-black flex flex-col items-start justify-start p-6 col-span-1 row-span-1 rounded-lg">
            <span className="text-2xl font-bold text-white">Imagery</span>
            <svg className="mt-6 w-full h-24" viewBox="0 0 200 80" fill="none">
              <rect x="10" y="50" width="10" height="20" fill="#175641" />
              <path d="M15 50 Q20 30, 25 50 T35 50" fill="#175641" />
              <rect x="40" y="40" width="10" height="30" fill="#175641" />
              <path d="M45 40 Q50 20, 55 40 T65 40" fill="#175641" />
              <rect x="70" y="60" width="10" height="10" fill="#175641" />
              <path d="M75 60 Q80 40, 85 60 T95 60" fill="#175641" />
            </svg>
          </div>

          {/* Motion - Bottom Far Right (Purple) */}
          <div className="col-start-4 row-start-3 bg-[#c8aff0] flex flex-col items-start justify-start p-6 col-span-1 row-span-1 rounded-lg">
            <span className="text-2xl font-bold text-[#682760]">Motion</span>
            <svg
              className="mt-6"
              width="60"
              height="60"
              viewBox="0 0 100 100"
              fill="none"
              stroke="#682760"
              strokeWidth="2"
            >
              <circle cx="20" cy="80" r="4" />
              <circle cx="80" cy="80" r="4" />
              <path d="M20 80 Q50 20, 80 80" />
            </svg>
          </div>
        </div>
      </main>
        </div>
      ))}
    </div>
  );
}