"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Menu from "./utils/Menu";
import gsap from "gsap";

const inter = Inter({ subsets: ["latin"] });

const Topbar = () => {
  const svgRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { rotation: 0 },
      {
        rotation: 360,
        repeat:-1,
        duration: 2,
        ease: "power4.inOut", 
      }
    );
  },[]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="topbar relative z-20 border-b-[1px] grid grid-cols-3 gap-8 bg-[#E5EAEF] dark:border-none dark:bg-[#262626]"
    >
      <div className="max-md:flex hidden pl-6">
        <svg
         ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z"
            fill="#34CAA5"
          />
        </svg>
      </div>
      <div className="max-md:flex hidden pl-10 items-center">
        <p className="text-typography dark:text-[#e5e5e5] tracking-tight leading-[1.75rem] max-sm:text-[1rem] text-[1.25rem] font-semibold">
          Dashboard
        </p>
      </div>
      <div className="pl-[100px] max-md:hidden flex flex-row justify-between items-center">
        <p className="text-typography dark:text-[#e5e5e5] tracking-tight leading-[1.75rem] text-[1.25rem] font-semibold">
          Dashboard
        </p>
      </div>

      <div className="flex flex-row gap-6 items-center justify-between  max-md:pr-6">
        <div className="flex max-md:hidden flex-shrink-0 items-center justify-center relative col-span-2">
          <svg
            className="absolute left-0 my-2 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.68945 0C11.9293 0 15.3781 3.3727 15.3781 7.51907C15.3781 9.47532 14.6104 11.2595 13.3542 12.5986L15.8261 15.0109C16.0574 15.2371 16.0582 15.6031 15.8269 15.8294C15.7116 15.9436 15.5592 16 15.4076 16C15.2568 16 15.1052 15.9436 14.9892 15.8309L12.4874 13.3912C11.1714 14.4219 9.5028 15.0389 7.68945 15.0389C3.44955 15.0389 0 11.6655 0 7.51907C0 3.3727 3.44955 0 7.68945 0ZM7.68945 1.15821C4.10251 1.15821 1.18433 4.01125 1.18433 7.51907C1.18433 11.0269 4.10251 13.8807 7.68945 13.8807C11.2756 13.8807 14.1938 11.0269 14.1938 7.51907C14.1938 4.01125 11.2756 1.15821 7.68945 1.15821Z"
              fill={theme == "dark" ? "#34CAA5" : "#78828A"}
            />
          </svg>{" "}
          <input
            type="text"
            placeholder="Search..."
            className=" flex-shrink-0 url_input"
          />
        </div>{" "}
        <div className="flex flex-row gap-6 items-center">
          <div
            className="hidden xl:flex xl:opacity-100 opacity-0 transition-opacity duration-500 flex-row gap-2 items-center relative cursor-pointer"
            onClick={() => setCalendarVisible(!isCalendarVisible)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2 9.79483C2 6.70067 2 5.15318 2.9376 4.19236C3.8744 3.23071 5.3832 3.23071 8.4 3.23071H11.6C14.6168 3.23071 16.1256 3.23071 17.0624 4.19236C18 5.15318 18 6.70067 18 9.79483V11.4359C18 14.53 18 16.0775 17.0624 17.0383C16.1256 18 14.6168 18 11.6 18H8.4C5.3832 18 3.8744 18 2.9376 17.0383C2 16.0775 2 14.53 2 11.4359V9.79483Z"
                stroke={theme == "dark" ? "#e5e5e5" : "black"}
                strokeWidth="1.37144"
              />
              <path
                d="M5.9999 3.23077V2M13.9999 3.23077V2M2.3999 7.33334H17.5999"
                stroke={theme == "dark" ? "#e5e5e5" : "black"}
                strokeWidth="1.37144"
                strokeLinecap="round"
              />
              <path
                d="M14.8002 13.8974C14.8002 14.115 14.7159 14.3237 14.5659 14.4776C14.4159 14.6314 14.2124 14.7179 14.0002 14.7179C13.788 14.7179 13.5845 14.6314 13.4345 14.4776C13.2845 14.3237 13.2002 14.115 13.2002 13.8974C13.2002 13.6798 13.2845 13.4711 13.4345 13.3172C13.5845 13.1633 13.788 13.0769 14.0002 13.0769C14.2124 13.0769 14.4159 13.1633 14.5659 13.3172C14.7159 13.4711 14.8002 13.6798 14.8002 13.8974ZM14.8002 10.6153C14.8002 10.8329 14.7159 11.0416 14.5659 11.1955C14.4159 11.3494 14.2124 11.4358 14.0002 11.4358C13.788 11.4358 13.5845 11.3494 13.4345 11.1955C13.2845 11.0416 13.2002 10.8329 13.2002 10.6153C13.2002 10.3977 13.2845 10.189 13.4345 10.0351C13.5845 9.88125 13.788 9.7948 14.0002 9.7948C14.2124 9.7948 14.4159 9.88125 14.5659 10.0351C14.7159 10.189 14.8002 10.3977 14.8002 10.6153ZM10.8002 13.8974C10.8002 14.115 10.7159 14.3237 10.5659 14.4776C10.4159 14.6314 10.2124 14.7179 10.0002 14.7179C9.78802 14.7179 9.58454 14.6314 9.43451 14.4776C9.28448 14.3237 9.2002 14.115 9.2002 13.8974C9.2002 13.6798 9.28448 13.4711 9.43451 13.3172C9.58454 13.1633 9.78802 13.0769 10.0002 13.0769C10.2124 13.0769 10.4159 13.1633 10.5659 13.3172C10.7159 13.4711 10.8002 13.6798 10.8002 13.8974ZM10.8002 10.6153C10.8002 10.8329 10.7159 11.0416 10.5659 11.1955C10.4159 11.3494 10.2124 11.4358 10.0002 11.4358C9.78802 11.4358 9.58454 11.3494 9.43451 11.1955C9.28448 11.0416 9.2002 10.8329 9.2002 10.6153C9.2002 10.3977 9.28448 10.189 9.43451 10.0351C9.58454 9.88125 9.78802 9.7948 10.0002 9.7948C10.2124 9.7948 10.4159 9.88125 10.5659 10.0351C10.7159 10.189 10.8002 10.3977 10.8002 10.6153ZM6.8002 13.8974C6.8002 14.115 6.71591 14.3237 6.56588 14.4776C6.41585 14.6314 6.21237 14.7179 6.0002 14.7179C5.78802 14.7179 5.58454 14.6314 5.43451 14.4776C5.28448 14.3237 5.2002 14.115 5.2002 13.8974C5.2002 13.6798 5.28448 13.4711 5.43451 13.3172C5.58454 13.1633 5.78802 13.0769 6.0002 13.0769C6.21237 13.0769 6.41585 13.1633 6.56588 13.3172C6.71591 13.4711 6.8002 13.6798 6.8002 13.8974ZM6.8002 10.6153C6.8002 10.8329 6.71591 11.0416 6.56588 11.1955C6.41585 11.3494 6.21237 11.4358 6.0002 11.4358C5.78802 11.4358 5.58454 11.3494 5.43451 11.1955C5.28448 11.0416 5.2002 10.8329 5.2002 10.6153C5.2002 10.3977 5.28448 10.189 5.43451 10.0351C5.58454 9.88125 5.78802 9.7948 6.0002 9.7948C6.21237 9.7948 6.41585 9.88125 6.56588 10.0351C6.71591 10.189 6.8002 10.3977 6.8002 10.6153Z"
                fill={theme == "dark" ? "#e5e5e5" : "black"}
              />
            </svg>
            <p
              className={`font-medium dark:text-[#e5e5e5] text-[0.875rem] leading-[1.375rem]`}
            >
              November 15, 2023
            </p>
          </div>
          {isCalendarVisible && (
            <input
              type="date"
              className="absolute dark:bg-[#404040] focus:outline-none mb-4 max-xl:hidden rounded-3xl px-2 top-[80%]"
              // Add more styles if needed
            />
          )}
          <div>
            <div className="flex w-[40px] max-md:hidden h-[40px] p-[11px] justify-center items-center gap-[6px] border-[0.769px] dark:border-[#34CAA5] border-[#dadddd] dark:border-[] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z"
                  fill={theme == "dark" ? "#e5e5e5" : "black"}
                />
              </svg>
            </div>
          </div>
          <div
            onClick={() => setMenuVisible(!isMenuVisible)}
            className="flex cursor-pointer px-[8px] max-md:px-[4px] py-[6px] flex-shrink-0 justify-center items-center gap-[6px] border-[1px] rounded-full dark:border-[#34CAA5] border-[#dadddd]"
          >
            <div className="rounded-full">
              <Image
                src={`/assets/aiimg.JPG`}
                width={38}
                className="mx-[0.5rem] flex-shrink-0 rounded-full w-[2.5rem] h-[2.5rem]"
                height={38}
              />
            </div>
            <div className="max-lg:hidden flex items-end flex-col pr-2">
              <div className="text-[16px] flex justify-center items-end">
                Oyeniyi Victor
              </div>{" "}
              <div className="text-[14px] dark:text-[#34CAA5] text-[#787486]">
                iamgojosatoru@icloud.com
              </div>
            </div>
            <div className="xl:hidden">
              {isMenuVisible ? (
                <svg
                  style={{ transform: "rotate(180deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
                    fill={theme == "dark" ? "#e5e5e5" : "#0D062D"}
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
                    fill={theme == "dark" ? "#e5e5e5" : "#0D062D"}
                  />
                </svg>
              )}
            </div>
          </div>
          {isMenuVisible && <Menu isMenuVisible={isMenuVisible} />}
        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;
