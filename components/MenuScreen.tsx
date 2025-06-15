"use client";

import React from "react";
import { hover, motion } from "framer-motion";

const MenuScreen = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-9 h-screen w-screen gap-3 lg:p-6 p-2">
      {/* Framework - Top Left (Dark Blue) */}
      <motion.div
        className="col-span-6 row-span-2 lg:col-span-3 lg:row-span-5 bg-[#283750] hover:bg-black text-[#b4c8e1] hover:text-white flex flex-col items-start justify-between border rounded-tl-lg w-full h-full overflow-hidden"
        initial="initial"
        whileHover="hover"
        role="img"
        aria-label="Framework Animation"
      >
        <span className="text-xl lg:text-4xl font-bold p-4 sm:p-6">
          Framework
        </span>
        {/* Static SVG icon */}
        <motion.div className="flex w-full items-center justify-center h-full md:items-start sm:items-start lg:items-end">
          <motion.svg
            className="z-10 w-[50%] sm:h-[80%] md:w-[55%] md:h-[70%] lg:w-[90%] max-w-[300px] h-auto"
            viewBox="0 0 400 300"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <motion.rect
              x="0"
              y="0"
              width="20"
              height="20"
              rx="3"
              ry="3"
              fill="currentColor"
              strokeWidth={2}
              stroke="currentColor"
              variants={{
                initial: {
                  fill: "#B4C8E1",
                  stroke: "#B4C8E1",
                },
                hover: {
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 3,
                },
              }}
            />
            <motion.rect
              x="379"
              y="100"
              width="20"
              height="20"
              rx="3"
              ry="3"
              fill="currentColor"
              strokeWidth={2}
              stroke="currentColor"
              variants={{
                initial: {
                  fill: "#B4C8E1",
                  stroke: "#B4C8E1",
                },
                hover: {
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 3,
                },
              }}
            />
            <motion.rect
              x="0"
              y="200"
              width="20"
              height="20"
              rx="3"
              ry="3"
              fill="currentColor"
              strokeWidth={2}
              stroke="currentColor"
              variants={{
                initial: {
                  fill: "#B4C8E1",
                  stroke: "#B4C8E1",
                },
                hover: {
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 3,
                },
              }}
            />
            <motion.path
              d="M 20 10 L 380 105"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              variants={{
                initial: {
                  d: "M 20 10 L 380 105",
                  stroke: "#682760",
                },
                hover: {
                  d: "M 40 10 Q 300 5 240 45 Q 190 25 270 25 Q 400 35 390 85 M 390 85 L 370 70 M 390 85 L 410 60",
                  stroke: "white",
                },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <motion.path
              d="M 20 210 L 380 115"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              variants={{
                initial: {
                  d: "M 20 210 L 380 115",
                  stroke: "#682760",
                },
                hover: {
                  d: "M 40 210 L 60 190 M 40 210 L 60 220  M 40 210 L 360 125",
                  stroke: "white",
                },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Voice & Tone - Top Middle (Yellow) */}
      <motion.div
        className="row-span-2 col-span-7 lg:col-start-4 lg:col-span-4 lg:row-span-4 bg-[#fad24b] text-[#684505] hover:text-white hover:bg-black flex flex-col items-start justify-between border rounded-tr-lg lg:rounded-none overflow-hidden w-full h-full"
        initial="initial"
        whileHover="hover"
        role="img"
        aria-label="Voice and Tone Animation"
      >
        <span className="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold p-2 sm:p-6">
          Voice & Tone
        </span>
        <motion.div className="flex w-full h-full items-start p-3">
          <motion.div className="flex w-full h-full items-start justify-start">
            <motion.svg
              className="w-[60%] h-[60%] sm:w-[50%] sm:h-[50%] md:w-[30%] md:h-[40%] lg:h-[40%]"
              width="204"
              height="163"
              viewBox="0 0 210 163"
              fill="none"
              variants={{
                initial: { x: 0 },
                hover: {
                  x: 50,
                  transition: { duration: 0.8, ease: "easeInOut" },
                },
              }}
            >
              <motion.path
                fill="currentColor"
                strokeWidth={4}
                stroke="currentColor"
                variants={{
                  initial: {
                    fill: "#684505",
                    stroke: "#684505",
                    strokeWidth: 4,
                  },
                  hover: {
                    fill: "#000",
                    stroke: "white",
                    strokeWidth: 4,
                  },
                }}
                d="M8.16 50.9646C2.72 65.2502 0 82.2384 0 101.929C0 116.987 1.36 128.763 4.08 137.257C7.18857 145.751 12.0457 151.929 18.6514 155.79C25.2571 159.264 34 161.002 44.88 161.002C54.9829 161.002 63.1429 159.651 69.36 156.948C75.5771 154.245 80.0457 149.805 82.7657 143.628C85.8743 137.45 87.4286 129.149 87.4286 118.724C87.4286 107.528 86.0686 99.2266 83.3486 93.8213C81.0171 88.0298 77.1314 84.1689 71.6914 82.2384C66.2514 79.9218 59.0629 78.7635 50.1257 78.7635C47.4878 78.7635 44.9198 78.9721 42.4217 79.3891C43.1347 71.3966 44.537 64.4314 46.6286 58.4935C49.7371 50.7716 54.2057 44.594 60.0343 39.9609C65.8629 35.3277 72.8571 32.6251 81.0172 31.8529L75.7714 0C58.6743 2.31657 44.4914 7.91495 33.2229 16.7951C21.9543 25.2893 13.6 36.6791 8.16 50.9646Z"
              ></motion.path>
              <motion.path
                fill="currentColor"
                strokeWidth={2}
                stroke="currentColor"
                variants={{
                  initial: {
                    fill: "#684505",
                    stroke: "#684505",
                    strokeWidth: 3,
                  },
                  hover: {
                    fill: "#000",
                    stroke: "white",
                    strokeWidth: 3,
                  },
                }}
                d="M124.731 50.9646C119.291 65.2502 116.571 82.2384 116.571 101.929C116.571 116.987 117.931 128.763 120.651 137.257C123.76 145.751 128.617 151.929 135.223 155.79C141.829 159.264 150.571 161.002 161.451 161.002C171.554 161.002 179.714 159.651 185.931 156.948C192.149 154.245 196.617 149.805 199.337 143.628C202.446 137.45 204 129.149 204 118.724C204 107.528 202.64 99.2266 199.92 93.8213C197.589 88.0298 193.703 84.1689 188.263 82.2384C182.823 79.9218 175.634 78.7635 166.697 78.7635C164.059 78.7635 161.491 78.9721 158.993 79.3891C159.706 71.3966 161.108 64.4314 163.2 58.4935C166.309 50.7716 170.777 44.594 176.606 39.9609C182.434 35.3277 189.429 32.6251 197.589 31.8529L192.343 0C175.246 2.31657 161.063 7.91495 149.794 16.7951C138.526 25.2893 130.171 36.6791 124.731 50.9646Z"
              ></motion.path>
            </motion.svg>
          </motion.div>
          <motion.div className="flex justify-end items-end w-full h-full">
            <motion.svg
              className="w-[60%] h-[60%] sm:w-[50%] sm:h-[50%] md:w-[30%] md:h-[40%] lg:h-[40%]"
              width="204"
              height="163"
              viewBox="0 0 204 163"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              variants={{
                initial: { x: 0 },
                hover: {
                  x: -50,
                  transition: { duration: 0.8, ease: "easeInOut" },
                },
              }}
            >
              <motion.path
                fill="currentColor"
                strokeWidth={2}
                stroke="currentColor"
                variants={{
                  initial: {
                    fill: "#684505",
                    stroke: "#684505",
                    strokeWidth: 3,
                  },
                  hover: {
                    fill: "#000",
                    stroke: "white",
                    strokeWidth: 3,
                  },
                }}
                d="M195.84 112.0354C201.28 97.7498 204 80.7616 204 61.071C204 46.013 202.64 34.237 199.92 25.743C196.811 17.249 191.954 11.071 185.349 7.21C178.743 3.736 170 2 159.12 2C149.017 2 140.857 3.351 134.64 6.054C128.423 8.757 123.954 13.197 121.234 19.374C118.126 25.55 116.571 33.851 116.571 44.276C116.571 55.472 117.931 63.7734 120.651 69.1787C122.983 74.9702 126.869 78.8311 132.309 80.7616C137.749 83.0782 144.937 84.2365 153.874 84.2365C156.512 84.2365 159.08 84.0279 161.578 83.6109C160.865 91.6034 159.463 98.5686 157.371 104.5065C154.263 112.2284 149.794 118.406 143.966 123.0391C138.137 127.6723 131.143 130.3749 122.983 131.1471L128.229 163C145.326 160.68343 159.509 155.08505 170.777 146.2049C182.046 137.7107 190.4 126.3209 195.84 112.0354Z"
              />
              <motion.path
                fill="currentColor"
                strokeWidth={2}
                stroke="currentColor"
                variants={{
                  initial: {
                    fill: "#684505",
                    stroke: "#684505",
                    strokeWidth: 3,
                  },
                  hover: {
                    fill: "#000",
                    stroke: "white",
                    strokeWidth: 3,
                  },
                }}
                d="M79.269 112.0354C84.709 97.7498 87.429 80.7616 87.429 61.071C87.429 46.013 86.069 34.237 83.349 25.743C80.24 17.249 75.383 11.071 68.777 7.21C62.171 3.736 53.429 2 42.549 2C32.446 2 24.286 3.351 18.069 6.054C11.851 8.757 7.383 13.197 4.663 19.374C1.554 25.55 0 33.851 0 44.276C0 55.472 1.36 63.7734 4.08 69.1787C6.411 74.9702 10.297 78.8311 15.737 80.7616C21.177 83.0782 28.366 84.2365 37.303 84.2365C39.941 84.2365 42.509 84.0279 45.007 83.6109C44.294 91.6034 42.892 98.5686 40.8 104.5065C37.691 112.2284 33.223 118.406 27.394 123.0391C21.566 127.6723 14.571 130.3749 6.411 131.1471L11.657 163C28.754 160.68343 42.937 155.08505 54.206 146.2049C65.474 137.7107 73.829 126.3209 79.269 112.0354Z"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Logo - Top Right (Light Blue) */}
      <motion.div
        className="col-span-7 row-span-2 lg:col-start-8 lg:row-span-5 lg:col-span-3 bg-[#3DD3EE] hover:bg-black flex flex-col text-[#283750] hover:text-white items-start justify-start w-full h-full overflow-hidden"
        initial="initial"
        whileHover="hover"
        role="img"
        aria-label="Logo Animation"
      >
        <span className="text-xl lg:text-4xl font-bold p-6">Logo</span>
        <motion.div className="flex w-full h-full justify-end items-end">
          <motion.svg
            viewBox="120 120 1462 1462"
            fill="currentColor"
            className="w-28 lg:w-48 h-auto"
            role="img"
            aria-label="Dropbox Logo"
          >
            <motion.path
              fill="currentColor"
              strokeWidth={4}
              stroke="currentColor"
              variants={{
                initial: {
                  fill: "#055463",
                  stroke: "#055463",
                  strokeWidth: 4,
                  d: "M663.477 555.977L850.079 673.172L663.477 790.366L476.906 673.172L663.477 555.977ZM663.477 791.542L850.079 908.739L663.477 1025.93L476.906 908.739L663.477 791.542ZM851.951 908.739L1038.52 791.542L1225.09 908.739L1038.52 1025.93L851.951 908.739ZM1225.09 673.172L1038.52 790.366L851.951 673.172L1038.52 555.977L1225.09 673.172ZM1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z",
                },
                hover: {
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 4,
                  d: "M1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z", // Stack into fifth path
                  transition: { duration: 0.2, ease: "easeInOut", delay: 0.1 },
                },
              }}
            />
            <motion.path
              fill="currentColor"
              strokeWidth={4}
              stroke="currentColor"
              variants={{
                initial: {
                  fill: "#055463",
                  stroke: "#055463",
                  strokeWidth: 4,
                  d: "M1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z", // Stack into fifth path
                },
                hover: {
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 4,
                  d: "M663.477 555.977L850.079 673.172L663.477 790.366L476.906 673.172L663.477 555.977Z", // Original position
                  transition: { duration: 0.2, ease: "easeInOut", delay: 0.1 },
                },
              }}
            />
            <motion.path
              fill="currentColor"
              strokeWidth={4}
              stroke="currentColor"
              variants={{
                initial: {
                  fill: "#055463",
                  stroke: "#055463",
                  strokeWidth: 4,
                  d: "M1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z", // Stack into fifth path
                },
                hover: {
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 4,
                  d: "M663.477 791.542L850.079 908.739L663.477 1025.93L476.906 908.739L663.477 791.542Z", // Original position
                  transition: { duration: 0.2, ease: "easeInOut", delay: 0.2 },
                },
              }}
            />
            <motion.path
              fill="currentColor"
              strokeWidth={4}
              stroke="currentColor"
              variants={{
                initial: {
                  fill: "#055463",
                  stroke: "#055463",
                  strokeWidth: 4,
                  d: "M1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z", // Stack into fifth path
                },
                hover: {
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 4,
                  d: "M851.951 908.739L1038.52 791.542L1225.09 908.739L1038.52 1025.93L851.951 908.739Z", // Original position
                  transition: { duration: 0.2, ease: "easeInOut", delay: 0.3 },
                },
              }}
            />
            <motion.path
              fill="currentColor"
              strokeWidth={4}
              stroke="currentColor"
              variants={{
                initial: {
                  fill: "#055463",
                  stroke: "#055463",
                  strokeWidth: 4,
                  d: "M1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z", // Stack into fifth path
                },
                hover: {
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 4,
                  d: "M1225.09 673.172L1038.52 790.366L851.951 673.172L1038.52 555.977L1225.09 673.172Z", // Original position
                  transition: { duration: 0.2, ease: "easeInOut", delay: 0.4 },
                },
              }}
            />
            <motion.path
              fill="currentColor"
              strokeWidth={4}
              stroke="currentColor"
              variants={{
                initial: {
                  fill: "#055463",
                  stroke: "#055463",
                  strokeWidth: 4,
                  d: "M1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z", // Bottom rhombus (unchanged)
                },
                hover: {
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 4,
                  d: "M1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z", // Bottom rhombus (unchanged)
                  transition: { duration: 0.2, ease: "easeInOut", delay: 0 },
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Typography - Top Far Right (Orange) */}
      <div className="col-span-6 row-span-3 lg:col-span-3 lg:row-span-4 lg:col-start-11 bg-[#fa551e] hover:bg-black text-[#4e0119] hover:text-white flex flex-col items-start justify-start p-6 border rounded-none lg:rounded-tr-lg ">
        <span className="text-xl lg:text-4xl font-bold ">Typography</span>
        <div className="flex flex-1 flex-col items-stretch relative">
          <div className="absolute flex items-start w-full max-w-full h-full max-h-[15vh]">
            <div className="h-full w-full">
              <svg
                className="h-full w-full"
                width="600"
                height="400"
                viewBox="0 0 600 400"
                fill="white"
                stroke="#175641"
                strokeWidth="4"
              >
                <path
                  d="M150 350 L300 50 L450 350 M200 250 H400"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Dropbox Logo Square - Center (Blue) */}
      <div className="row-start-5 col-start-7 lg:col-start-7 lg:row-start-5 bg-[#0061fe] flex items-center">
        <svg
          viewBox="120 120 1462 1462"
          fill="currentColor"
          className={`w-52 h-52 text-white`}
          role="img"
          aria-label="Dropbox Logo"
        >
          <path d="M663.477 555.977L850.079 673.172L663.477 790.366L476.906 673.172L663.477 555.977ZM663.477 791.542L850.079 908.739L663.477 1025.93L476.906 908.739L663.477 791.542ZM851.951 908.739L1038.52 791.542L1225.09 908.739L1038.52 1025.93L851.951 908.739ZM1225.09 673.172L1038.52 790.366L851.951 673.172L1038.52 555.977L1225.09 673.172ZM1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z" />
        </svg>
      </div>

      {/* Iconography - Bottom Left (Green) */}
      <motion.div
        className="col-span-6 row-span-3 lg:row-start-6 lg:row-span-4 lg:col-span-3  bg-[#b4dc19] hover:bg-black text-[#175641] hover:text-white flex flex-col items-start justify-start rounded-none md:rounded-bl-lg overflow-hidden h-full w-full p-3"
        initial="initial"
        whileHover="hover"
        role="img"
        aria-label="Iconography Animation"
      >
        <span className="text-xl lg:text-4xl font-bold">Iconography</span>
        <motion.div className="w-full h-full flex items-end justify-start">
          <motion.svg fill="#175641" stroke="#175641" strokeWidth="4">
            <motion.path
              d="M102.06 64.3331C102.06 53.0489 96.3443 47.3331 85.06 47.3331H35.4991V39.2695C35.4991 28.1505 39.5638 24.2089 51.03 24.2089C62.4962 24.2089 66.5609 28.1505 66.5609 39.2695V47.3331H79.873V39.2695C79.873 26.511 74.8677 11.2998 51.03 11.2998C27.1923 11.2998 22.187 26.511 22.187 39.2695V47.3331H17C5.71573 47.3331 0 53.0489 0 64.3331V111.03C0.00939465 121.445 3.05122 128.554 8.45831 133.798C13.8654 139.041 21.1963 141.991 31.843 142H70.2169C80.8637 141.991 88.1946 139.041 93.6017 133.798C99.0088 128.554 102.051 121.445 102.06 111.03V64.3331ZM88.7478 112.03C88.7478 119.024 87.1115 121.855 84.1989 124.68C81.2863 127.504 78.336 129.091 71.2169 129.091H30.843C23.724 129.091 20.7737 127.504 17.8611 124.68C14.9485 121.855 13.3122 119.024 13.3122 112.03V64.2422C13.3122 61.5854 14.6553 60.2422 17.3122 60.2422H84.7478C87.4047 60.2422 88.7478 61.5854 88.7478 64.2422V112.03Z"
              variants={{
                initial: {
                  d: "M102.06 64.3331C102.06 53.0489 96.3443 47.3331 85.06 47.3331H35.4991V39.2695C35.4991 28.1505 39.5638 24.2089 51.03 24.2089C62.4962 24.2089 66.5609 28.1505 66.5609 39.2695V47.3331H79.873V39.2695C79.873 26.511 74.8677 11.2998 51.03 11.2998C27.1923 11.2998 22.187 26.511 22.187 39.2695V47.3331H17C5.71573 47.3331 0 53.0489 0 64.3331V111.03C0.00939465 121.445 3.05122 128.554 8.45831 133.798C13.8654 139.041 21.1963 141.991 31.843 142H70.2169C80.8637 141.991 88.1946 139.041 93.6017 133.798C99.0088 128.554 102.051 121.445 102.06 111.03V64.3331ZM88.7478 112.03C88.7478 119.024 87.1115 121.855 84.1989 124.68C81.2863 127.504 78.336 129.091 71.2169 129.091H30.843C23.724 129.091 20.7737 127.504 17.8611 124.68C14.9485 121.855 13.3122 119.024 13.3122 112.03V64.2422C13.3122 61.5854 14.6553 60.2422 17.3122 60.2422H84.7478C87.4047 60.2422 88.7478 61.5854 88.7478 64.2422V112.03Z",
                  stroke: "#175641",
                  fill: "#175641",
                },
                hover: {
                  d: "M102.06 64.3331C102.06 53.0489 96.3443 47.3331 85.06 47.3331H36.4991V39.2695C35.4991 28.1505 39.5638 24.2089 51.03 24.2089C62.4962 24.2089 66.5609 28.1505 66.5609 39.2695V47.3331H79.873V39.2695C79.873 26.511 74.8677 11.2998 51.03 11.2998C27.1923 11.2998 22.187 26.511 22.187 39.2695V47.3331H17C5.71573 47.3331 0 53.0489 0 64.3331V111.03C0.00939465 121.445 3.05122 128.554 8.45831 133.798C13.8654 139.041 21.1963 141.991 31.843 142H70.2169C80.8637 141.991 88.1946 139.041 93.6017 133.798C99.0088 128.554 102.051 121.445 102.06 111.03V64.3331ZM88.7478 112.03C88.7478 119.024 87.1115 121.855 84.1989 124.68C81.2863 127.504 78.336 129.091 71.2169 129.091H30.843C23.724 129.091 20.7737 127.504 17.8611 124.68C14.9485 121.855 13.3122 119.024 13.3122 112.03V64.2422C13.3122 61.5854 14.6553 60.2422 17.3122 60.2422H84.7478C87.4047 60.2422 88.7478 61.5854 88.7478 64.2422V112.03Z",
                  stroke: "white",
                  fill: "#000",
                },
              }}
            />
            <motion.path
              d="M44.3743 116.181L57.6864 116.181V102.115C60.501 101.018 62.8802 99.0769 64.4768 96.5757C66.0734 94.0745 66.71 91.1539 66.71 88.2117C66.71 85.9998 66.4417 84.1626 65.7204 82.2617C64.9991 80.3608 63.8606 78.6345 62.3836 77.2022C60.9067 75.77 59.1265 74.6659 57.1662 73.9665C55.2059 73.267 53.1143 72.9998 51.0303 72.9998C48.942 72.9998 46.8548 73.267 44.8945 73.9665C42.9342 74.6659 41.154 75.77 39.6771 77.2022C38.2001 78.6345 37.0616 80.3608 36.3403 82.2617C35.619 84.1626 35.35 85.9998 35.35 88.2117C35.35 91.1539 35.9873 94.0745 37.5839 96.5757C39.1804 99.0769 41.5597 101.018 44.3743 102.115V116.181Z"
              variants={{
                initial: {
                  stroke: "#175641",
                  fill: "#175641",
                },
                hover: {
                  stroke: "white",
                  fill: "#000",
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Color - Bottom Center (Orange) */}
      <motion.div
        className="col-span-7 row-span-2 col-start-7 lg:col-span-3 lg:row-span-5 lg:col-start-4  bg-[#f9a34b] hover:bg-black text-[#6d2e09] hover:text-white flex flex-col items-start justify-between overflow-hidden w-full h-full"
        initial="initial"
        whileHover="hover"
        role="img"
        aria-label="Color Animation"
      >
        <span className="text-xl lg:text-4xl font-bold p-3">Color</span>
        <motion.div className="flex w-full h-full justify-end items-end p-1">
          <motion.svg
            className="w-[90%] sm:w-[80%] md:w-[50%] lg:w-full lg:pt-40 h-full"
            viewBox="0 0 600 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.rect
              x="360"
              y="0"
              width="120"
              height="120"
              fill="currentColor"
              animate={{
                x: 0,
                fill: "#be4b0a",
              }}
              variants={{
                initial: { x: 0, fill: "#be4b0a", stroke: "#be4b0a" },
                hover: {
                  x: 120,
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 2,
                },
              }}
            />
            <motion.circle
              cx="420"
              cy="60"
              r="30"
              fill="#6d2e09"
              stroke="#6d2e09"
              strokeWidth="2"
              variants={{
                initial: {
                  cx: 420,
                  cy: 60,
                  stroke: "#6d2e09",
                  fill: "#6d2e09",
                },
                hover: {
                  cx: 540,
                  stroke: "white",
                  fill: "#000",
                },
              }}
            />

            <motion.rect
              x="480"
              y="120"
              // y="310"
              width="120"
              height="120"
              fill="currentColor"
              animate={{
                x: 0,
                fill: "#6d2e09",
              }}
              variants={{
                initial: {
                  x: 0,
                  fill: "#6d2e09",
                  stroke: "#6d2e09",
                  strokeWidth: 2,
                },
                hover: {
                  x: -120,
                  fill: "#000",
                  stroke: "white",
                  strokeWidth: 2,
                },
              }}
            />
            <motion.circle
              cx="540"
              cy="180"
              r="30"
              fill="#be4b0a"
              stroke="#be4b0a"
              strokeWidth="2"
              variants={{
                initial: {
                  cx: 540,
                  cy: 180,
                  stroke: "#be4b0a",
                  fill: "#be4b0a",
                },
                hover: {
                  cx: 420,
                  stroke: "white",
                  fill: "#000",
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Imagery - Bottom Right (Black) */}
      <motion.div
        className="col-span-6 row-span-2 lg:col-start-7 lg:row-start-6 lg:col-span-4 lg:row-span-4 bg-[#892055] hover:bg-black hover:text-white text-[#ffafa5] flex flex-col items-start justify-start p-6 rounded-bl-lg  lg:rounded-none"
        initial="initial"
        whileHover="hover"
        role="img"
        aria-label="Imagery Animation"
      >
        <span className="text-xl lg:text-4xl font-bold ">Imagery</span>
        <div className="w-full">
          <motion.svg
            className="mt-10 z-10 mr-10"
            width="600"
            height="700"
            viewBox="0 0 600 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              x="230"
              y="100"
              width="300"
              height="200"
              rx="2"
              ry="2"
              fill="none"
              stroke=""
            />
            <motion.path
              d="M230 100 L230 200 C 400 250, 450 50, 530 190 L530 100 Z"
              fill="#ffafa5"
              stroke="#ffafa5"
              strokeWidth="2"
              variants={{
                initial: {
                  stroke: "#ffafa5",
                  fill: "#ffafa5",
                },
                hover: {
                  stroke: "white",
                  fill: "#000",
                },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <motion.circle
              cx="300"
              cy="150"
              r="20"
              fill="#cd2f7b"
              stroke="#cd2f7b"
              strokeWidth="2"
              variants={{
                initial: {
                  cx: 300,
                  cy: 150,
                  stroke: "#cd2f7b",
                  fill: "#cd2f7b",
                },
                hover: {
                  cx: [300, 320, 350, 370, 400],
                  cy: [150, 160, 175, 190, 200],
                  stroke: "white",
                  fill: "#000",
                },
              }}
              animate={{
                cx: 300,
                fill: "#cd2f7b",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <motion.path
              d="M280 320 A 20 20 0 1 0 320 320 L 280 320 Z"
              stroke="white"
              strokeWidth="2"
              variants={{
                initial: {
                  opacity: 0,
                  translateY: 100,
                },
                hover: {
                  opacity: 1,
                  translateY: -170,
                },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <motion.path
              d="M230 300 L230 200 C 400 250, 450 50, 530 190 L530 300 Z"
              fill="#cd2f7b"
              stroke="#cd2f7b"
              strokeWidth="2"
              variants={{
                initial: {
                  stroke: "#cd2f7b",
                  fill: "#cd2f7b",
                },
                hover: {
                  stroke: "white",
                  fill: "#000",
                },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      </motion.div>

      {/* Motion - Bottom Far Right (Purple) */}

      <motion.div
        className=" col-span-7 row-span-2 lg:col-start-11 lg:row-start-5 lg:col-span-3 lg:row-span-5 bg-[#c8aff0] hover:bg-black text-[#682760] hover:text-white flex flex-col items-start justify-start p-6 border rounded-br-lg"
        initial="initial"
        whileHover="hover"
        role="img"
        aria-label="Motion Animation"
      >
        <span className="text-xl lg:text-4xl font-bold ">Motion</span>
        <div className="mt-10 w-[300px] h-[700px]">
          <motion.svg
            width="300"
            height="700"
            viewBox="0 0 300 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              x="140"
              y="0"
              width="20"
              height="20"
              rx="3"
              fill="currentColor"
              animate={{
                x: 0,
                fill: "#682760",
              }}
              variants={{
                initial: { x: 0, fill: "#682760", stroke: "#682760" },
                hover: {
                  x: -50,
                  fill: "white",
                  stroke: "white",
                  strokeWidth: 2,
                },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.rect
              x="200"
              y="0"
              width="20"
              height="20"
              rx="3"
              fill="currentColor"
              variants={{
                initial: {
                  x: 0,
                  fill: "#682760",
                  stroke: "#682760",
                  strokeWidth: 2,
                },
                hover: {
                  fill: "white",
                  stroke: "white",
                  strokeWidth: 2,
                },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <motion.rect
              x="0"
              y="350"
              width="20"
              height="20"
              rx="3"
              fill="currentColor"
              variants={{
                initial: {
                  fill: "#682760",
                  stroke: "#682760",
                  strokeWidth: 2,
                },
                hover: {
                  fill: "white",
                  stroke: "white",
                  strokeWidth: 2,
                },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <motion.rect
              x="60"
              y="350"
              width="20"
              height="20"
              rx="3"
              fill="currentColor"
              animate={{
                x: 0,
                fill: "#682760",
              }}
              variants={{
                initial: {
                  x: 0,
                  fill: "#682760",
                  stroke: "#682760",
                  strokeWidth: 2,
                },
                hover: {
                  x: 50,
                  fill: "white",
                  stroke: "white",
                  strokeWidth: 2,
                },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <motion.line
              x1="140"
              y1="10"
              x2="200"
              y2="10"
              stroke="currentColor"
              strokeWidth="2"
              variants={{
                initial: {
                  x1: 140,
                  y1: 10,
                  x2: 200,
                  y2: 10,
                  stroke: "#682760",
                },
                hover: {
                  x1: 110,
                  y1: 10,
                  x2: 200,
                  y2: 10,
                  stroke: "white",
                },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <motion.line
              x1="0"
              y1="360"
              x2="70"
              y2="360"
              stroke="currentColor"
              strokeWidth="2"
              variants={{
                initial: {
                  x1: 0,
                  x2: 70,
                  y1: 360,
                  y2: 360,
                  stroke: "#682760",
                },
                hover: {
                  x1: 20,
                  x2: 110,
                  y1: 360,
                  y2: 360,
                  stroke: "white",
                },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M 210 10 C 100 20, 100 350, 20 360"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              variants={{
                initial: {
                  d: "M 210 10 C 100 20, 100 350, 20 360",
                  stroke: "#682760",
                },
                hover: {
                  d: "M 200 10 C 60 20, 150 350, 20 360",
                  stroke: "white",
                },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuScreen;
