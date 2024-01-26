"use client";
import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useInView } from "react-intersection-observer";
import {
  BarElement,
  Title,
  Tooltip,
  CategoryScale,
  Chart,
  LinearScale,
} from "chart.js";
import { tableData } from "./components/constants";
import Image from "next/image";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement, Title, Tooltip);

const Home = () => {
  const pathRef1 = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const { theme, setTheme } = useTheme();
  const variants = {
    visible: {
      width: "60%",
      transition: { ease: "easeOut", duration: 2 },
    },
    hidden: {
      width: 0,
    },
    delay: 0.5,
  };
  const variants2 = {
    visible: {
      width: "45%",
      transition: { ease: "easeOut", duration: 2 },
    },
    hidden: {
      width: 0,
    },
    delay: 0.5,
  };
  const variants3 = {
    visible: {
      width: "30%",
      transition: { ease: "easeOut", duration: 2 },
    },
    hidden: {
      width: 0,
    },
    delay: 0.5,
  };
  const variants4 = {
    visible: {
      width: "30%",
      transition: { ease: "easeOut", duration: 2 },
    },
    hidden: {
      width: 0,
    },
    delay: 0.5,
  };
  Chart.defaults.font.family = "Plus Jakarta Sans";
  Chart.defaults.font.size = 12;
  Chart.defaults.font.weight = 600;
  Chart.defaults.font.lineHeight = "16px";

  const options = {
    defaultFontFamily: "Plus Jakarta Sans",
    responsive: true,
    aspectRatio: false,
    showTooltips: true,
    plugins: {
      tooltip: {
        position: "average",
        mode: "index",
        caretPadding: 20,
        displayColors: false,
        backgroundColor: "#090c2c",
        callbacks: {
          label: function (context) {
            const value = context.parsed.y;
            const formattedValue = new Intl.NumberFormat().format(value); // Format with commas
            return "$ " + formattedValue;
          },
          title: function () {
            return ""; // Hide the title (month label)
          },
        },
      },
      legend: {
        position: "top",
        display: true,
        labels: {
          color: "#E5E5E5",
          font: {
            family: "Plus Jakarta Sans",
            color: "#E5E5E5",
          },
        },
      },

      title: {
        display: true,
        text: "",
      },
    },
    scales: {
      y: {
        align: "start",
        beginAtZero: true,
        stepSize: 10000,
        border: {
          display: false,
          dash: [6, 6],
        },
        grid: {
          display: true,
          dash: [5, 5],
          drawBorder: false,
        },
        ticks: {
          stepSize: 10000,
          crossAlign: "center",
          display: true,
          padding: 10,
        },
      },
      x: {
        type: "category",
        border: {
          display: false,
          dash: [5, 5],
        },
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          display: false,
        },
      },
    },
    elements: {
      bars: {
        backgroundColor: {
          type: "color",
          duration: 200,
        },
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: labels.map(() => faker.number.int({ min: 0, max: 50000 })),
        backgroundColor: "rgba(52, 202, 165, 0.10)",
        hoverBackgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "#34CAA5");
          gradient.addColorStop(1, "rgba(52, 202, 165, 0.00)");
          return gradient;
        },
        barPercentage: 0.6,
        categoryPercentage: 0.8,
        borderRadius: 200,
      },
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-white z-10 grid grid-cols-3 h-full max-xl:grid-cols-1 gap-4 bg-transparent p-4"
    >
      <div className="col-span-2 dark:bg-[#262626] dark:border-none h-[31.25rem] bg-white border-[1px] border-[#EDF2F7] rounded-[0.875rem]">
        <div className="pl-[1rem]  w-full pt-[1.25rem] pr-[1rem] flex justify-between items-center">
          <p className="font-semibold dark:text-[#E5E5E5] text-typography text-[1.125rem] leading-[1.625rem]">
            Sales Trend
          </p>
          <div className="flex flex-row justify-center items-center gap-4">
            <p className="text-[#3A3F51]  dark:text-[#E5E5E5] font-medium leading-[1.375rem]">
              Sort by:
            </p>
            <div className="text-[#3a3f51] h-[2rem] dark:border-[#34CAA5] border-[1px] px-[0.75rem] flex justify-center items-center flex-row gap-2 rounded-full">
              <p className="text-[0.75rem] max-md:hidden dark:text-[#e5e5e5]">
                Weekly
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  ref={pathRef1}
                  d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z"
                  fill={theme == "dark" ? "#e5e5e5" : "black"}
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full pt-4 h-[80%] flex px-[0.5rem] justify-center items-center">
          <Bar data={data} className="" options={options} />
        </div>
      </div>
      <div className="bg-transparent h-[31.25rem]  max-md:h-fit lg:grid-cols-2 xl:grid-cols-2 max-sm:grid-cols-1 grid grid-cols-2 gap-4 max-md:col-span-2">
        <div className="bg-white dark:bg-[#262626] dark:border-none transform transition-transform hover:scale-110 border-[1px] border-[#EDF2F7] min-w-fit rounded-[0.875rem]">
          <div className="p-[1rem] h-full justify-between flex flex-col">
            <div className="flex flex-row justify-between w-full h-fit">
              <div className="rounded-full p-2 border-[1px] dark:border-[#34CAA5] border-[#e6e6e6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M19.3499 5.65995L13.0599 2.27C12.3999 1.91 11.5999 1.91 10.9299 2.27L4.63992 5.65995C4.17992 5.90995 3.8999 6.39998 3.8999 6.93998C3.8999 7.47998 4.17992 7.96995 4.63992 8.21995L10.9299 11.61C11.2599 11.79 11.6299 11.88 11.9899 11.88C12.3499 11.88 12.7199 11.79 13.0499 11.61L19.3399 8.21995C19.7999 7.96995 20.0799 7.47998 20.0799 6.93998C20.0999 6.39998 19.8099 5.90995 19.3499 5.65995Z"
                    fill="#34CAA5"
                  />
                  <path
                    opacity="0.4"
                    d="M9.90021 12.79L4.0502 9.86001C3.6002 9.63001 3.08021 9.66001 2.65021 9.92001C2.22021 10.18 1.97021 10.64 1.97021 11.14V16.67C1.97021 17.63 2.5002 18.49 3.3602 18.92L9.21021 21.8401C9.4102 21.9401 9.63022 21.99 9.85022 21.99C10.1102 21.99 10.3702 21.92 10.6002 21.77C11.0302 21.51 11.2802 21.05 11.2802 20.55V15.02C11.2902 14.08 10.7602 13.22 9.90021 12.79Z"
                    fill="#34CAA5"
                  />
                  <path
                    opacity="0.4"
                    d="M22.03 11.15V15.74C22.02 15.73 22.01 15.71 22 15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.82 21.11 15.03 21.37 15.26 21.61L14.79 21.85C14.59 21.95 14.37 22 14.15 22C13.89 22 13.63 21.93 13.39 21.78C12.97 21.52 12.71 21.06 12.71 20.56V15.04C12.71 14.08 13.24 13.22 14.1 12.79L19.95 9.87C20.4 9.64 20.92 9.66 21.35 9.93C21.77 10.19 22.03 10.65 22.03 11.15Z"
                    fill="#34CAA5"
                  />
                  <path
                    d="M21.98 15.67C21.16 14.66 19.91 14.02 18.5 14.02C17.44 14.02 16.46 14.39 15.69 15.01C14.65 15.83 14 17.1 14 18.52C14 19.36 14.24 20.16 14.65 20.84C14.92 21.29 15.26 21.68 15.66 22H15.67C16.44 22.64 17.43 23.02 18.5 23.02C19.64 23.02 20.67 22.6 21.46 21.9C21.81 21.6 22.11 21.24 22.35 20.84C22.76 20.16 23 19.36 23 18.52C23 17.44 22.62 16.44 21.98 15.67ZM20.76 17.96L18.36 20.18C18.22 20.31 18.03 20.38 17.85 20.38C17.66 20.38 17.47 20.31 17.32 20.16L16.21 19.05C15.92 18.76 15.92 18.28 16.21 17.99C16.5 17.7 16.98 17.7 17.27 17.99L17.87 18.59L19.74 16.86C20.04 16.58 20.52 16.6 20.8 16.9C21.09 17.21 21.07 17.68 20.76 17.96Z"
                    fill="#34CAA5"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="33"
                viewBox="0 0 106 33"
                fill="none"
              >
                <path
                  d="M102.994 8.46666H105V33L1 33V11.4536L4.00877 18.9203L5.20413 21.9069H6.60551L9.40827 18.9203L11.3702 21.907L17.256 21.9072L20.339 18.9204L22.0207 14.4396L24.4683 16.6803L26.6747 18.9203L27.3638 22.3333L28.7651 21.9069H30.4858L33.6952 11.4536L34.6981 14.4403L36.3028 11.4536L37.5063 16.6803L40.7156 7.72028L42.5209 11.4536H45.9308L49.5413 3.98696L51.7477 7.72028L54.6535 5.48L58.194 11.4533L60.4704 1L62.1179 11.4533L73.1072 15.9333L74.5113 12.9466H75.9153L79.1247 8.46666H82.334L83.5375 12.9466L88.3515 3.98666L90.3574 15.9333L91.3603 11.4533H93.5667L95.5726 1L97.5784 9.95999L98.5813 5.48H101.189L102.994 8.46666Z"
                  fill="url(#paint0_linear_2132_4599)"
                  fillOpacity="0.16"
                />
                <path
                  d="M105 8.4667H102.994L101.189 5.48004H98.5813L97.5784 9.96003L95.5726 1.00004L93.5667 11.4534H91.3603L90.3574 15.9333L88.3515 3.9867L83.5375 12.9467L82.334 8.4667H79.1247L75.9153 12.9467H74.5113L73.1072 15.9333L62.1179 11.4534L60.4704 1.00004L58.194 11.4534L54.6535 5.48004L51.7477 7.72032L49.5413 3.987L45.9308 11.4536H42.5209L40.7156 7.72032L37.5063 16.6803L36.3028 11.4536L34.6981 14.4403L33.6952 11.4536L30.4858 21.907H28.7651L27.3638 22.3334L26.6747 18.9203L24.4683 16.6803L22.0206 14.4396L20.339 18.9204L17.256 21.9073L11.3702 21.907L9.40827 18.9203L6.60551 21.907H5.20414L4.00877 18.9203L1 11.4536"
                  stroke="#66C87B"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2132_4599"
                    x1="53"
                    y1="33"
                    x2="53"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#77B900" stopOpacity="0" />
                    <stop offset="0.809892" stopColor="#77B900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex max-md:py-10 flex-col pt-[0.625rem]">
              <p className="leading-[1.625rem] tracking-wider dark:text-[#B2ABAB] font-normal text-[#898989] text-[1.125rem]">
                Total Order
              </p>
              <p className="text-[#3A3F51] dark:text-[#e5e5e5] text-[1.5rem] pt-[0.313rem] font-semibold leading-[2rem]">
                350
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className=" flex flex-row gap-4 w-full">
                <div className="green-cta flex flex-row gap-1 items-center justify-center px-[0.5rem] py-[0.25rem] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5"
                      stroke="#34CAA5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 0.5H9.5V4"
                      stroke="#34CAA5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                  <p className="text-[0.75rem] text-[#34caa5]">23.5%</p>
                </div>
              </div>
              <div className="flex-shrink-0 pl-1">
                <p className="text-[0.6rem] text-[#606060] leading-normal font-normal">
                  vs. previous month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#262626] dark:border-none transform transition-transform hover:scale-110 border-[1px] border-[#EDF2F7] rounded-[0.875rem]">
          <div className="p-[1rem] h-full justify-between flex flex-col">
            <div className="flex  flex-row justify-between w-full h-fit">
              <div className="rounded-full p-2 border-[1px] dark:border-[#34CAA5] border-[#e6e6e6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.57821 2.91194C4.8091 3.55436 2.75 6.03342 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 4.71579 4.71579 1.25 9 1.25C9.2702 1.25 9.51952 1.39534 9.65265 1.63047C9.78578 1.8656 9.78214 2.15417 9.64312 2.38587L8.59313 4.13587C8.38002 4.49105 7.91933 4.60623 7.56414 4.39312C7.20896 4.18001 7.09378 3.71932 7.30689 3.36413L7.57821 2.91194ZM22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 19.2842 19.2842 22.75 15 22.75C14.7298 22.75 14.4805 22.6047 14.3474 22.3695C14.2142 22.1344 14.2179 21.8458 14.3569 21.6141L15.4069 19.8641C15.62 19.5089 16.0807 19.3938 16.4359 19.6069C16.791 19.82 16.9062 20.2807 16.6931 20.6359L16.4218 21.0881C19.1909 20.4456 21.25 17.9666 21.25 15C21.25 14.5858 21.5858 14.25 22 14.25Z"
                    fill="#34CAA5"
                  />
                  <path
                    d="M16.4004 8.20996L12.6404 6.17996C12.2404 5.96996 11.7704 5.96996 11.3704 6.17996L7.61038 8.20996C7.34038 8.35996 7.17041 8.64996 7.17041 8.97996C7.17041 9.30996 7.34038 9.59996 7.61038 9.74996L11.3704 11.78C11.5704 11.89 11.7904 11.94 12.0104 11.94C12.2304 11.94 12.4504 11.89 12.6504 11.78L16.4104 9.74996C16.6804 9.59996 16.8504 9.30996 16.8504 8.97996C16.8404 8.64996 16.6704 8.35996 16.4004 8.20996Z"
                    fill="#34CAA5"
                  />
                  <path
                    opacity="0.4"
                    d="M10.7402 12.4699L7.24023 10.7199C6.97023 10.5899 6.66024 10.5999 6.40024 10.7599C6.14024 10.9199 5.99023 11.1899 5.99023 11.4899V14.7999C5.99023 15.3699 6.31025 15.8899 6.82025 16.1399L10.3203 17.8899C10.4403 17.9499 10.5702 17.9799 10.7102 17.9799C10.8702 17.9799 11.0202 17.9399 11.1602 17.8499C11.4202 17.6899 11.5703 17.4199 11.5703 17.1199V13.8099C11.5703 13.2399 11.2602 12.7299 10.7402 12.4699Z"
                    fill="#34CAA5"
                  />
                  <path
                    opacity="0.4"
                    d="M17.5904 10.7599C17.3304 10.5999 17.0204 10.5899 16.7504 10.7199L13.2504 12.4699C12.7404 12.7299 12.4204 13.2399 12.4204 13.8099V17.1199C12.4204 17.4199 12.5704 17.6899 12.8304 17.8499C12.9704 17.9399 13.1204 17.9799 13.2804 17.9799C13.4104 17.9799 13.5404 17.9499 13.6704 17.8899L17.1704 16.1399C17.6804 15.8799 18.0004 15.3699 18.0004 14.7999V11.4899C18.0004 11.1899 17.8504 10.9199 17.5904 10.7599Z"
                    fill="#34CAA5"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="33"
                viewBox="0 0 106 33"
                fill="none"
              >
                <path
                  d="M3.00584 8.46666H1L1 33L105 33V11.4536L101.991 18.9203L100.796 21.9069H99.3945L96.5917 18.9203L94.6298 21.907L88.744 21.9072L85.661 18.9204L83.9793 14.4396L81.5317 16.6803L79.3253 18.9203L78.6362 22.3333L77.2349 21.9069H75.5142L72.3048 11.4536L71.3019 14.4403L69.6972 11.4536L68.4937 16.6803L65.2844 7.72028L63.4791 11.4536H60.0692L56.4587 3.98696L54.2523 7.72028L51.3465 5.48L47.806 11.4533L45.5296 1L43.8821 11.4533L32.8928 15.9333L31.4887 12.9466H30.0847L26.8753 8.46666H23.666L22.4625 12.9466L17.6485 3.98666L15.6426 15.9333L14.6397 11.4533H12.4333L10.4274 1L8.4216 9.95999L7.41868 5.48H4.81109L3.00584 8.46666Z"
                  fill="url(#paint0_linear_2133_4687)"
                  fillOpacity="0.16"
                />
                <path
                  d="M1 8.4667H3.00584L4.81109 5.48004H7.41868L8.4216 9.96003L10.4274 1.00004L12.4333 11.4534H14.6397L15.6426 15.9333L17.6485 3.9867L22.4625 12.9467L23.666 8.4667H26.8753L30.0847 12.9467H31.4887L32.8928 15.9333L43.8821 11.4534L45.5296 1.00004L47.806 11.4534L51.3465 5.48004L54.2523 7.72032L56.4587 3.987L60.0692 11.4536H63.4791L65.2844 7.72032L68.4937 16.6803L69.6972 11.4536L71.3019 14.4403L72.3048 11.4536L75.5142 21.907H77.2349L78.6362 22.3334L79.3253 18.9203L81.5317 16.6803L83.9794 14.4396L85.661 18.9204L88.744 21.9073L94.6298 21.907L96.5917 18.9203L99.3945 21.907H100.796L101.991 18.9203L105 11.4536"
                  stroke="#ED544E"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2133_4687"
                    x1="53"
                    y1="33"
                    x2="53"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ED544E" stopOpacity="0" />
                    <stop offset="0.809892" stopColor="#ED544E" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className=" flex max-md:py-10 flex-col pt-[0.625rem]">
              <p className="leading-[1.625rem] dark:text-[#B2ABAB] tracking-wider font-normal text-[#898989] text-[1.125rem]">
                Total Refund
              </p>
              <p className="text-[#3A3F51] dark:text-[#e5e5e5] text-[1.5rem] pt-[0.313rem] font-semibold leading-[2rem]">
                270
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className=" flex flex-row gap-4 w-full">
                <div className="red-cta flex flex-row gap-1 items-center justify-center px-[0.5rem] py-[0.25rem] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5"
                      stroke="#ED544E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 5.5H9.5V2"
                      stroke="#ED544E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[0.75rem] text-[#ED544E]">23.5%</p>
                </div>
              </div>
              <div className="flex-shrink-0 pl-1">
                <p className="text-[0.6rem] text-[#606060] leading-normal font-normal">
                  vs. previous month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#262626] dark:border-none transform transition-transform hover:scale-110 border-[1px] border-[#EDF2F7] rounded-[0.875rem]">
          <div className="p-[1rem] h-full justify-between flex flex-col">
            <div className="flex flex-row justify-between w-full h-fit">
              <div className="rounded-full p-2 dark:border-[#34CAA5] border-[1px] border-[#e6e6e6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z"
                    fill="#34CAA5"
                  />
                  <path
                    d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z"
                    fill="#34CAA5"
                  />
                  <path
                    opacity="0.4"
                    d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.92999 21.55 6.50999C21.68 4.73999 20.33 3.3 18.56 3.3H6.28999C6.18999 2.86 5.98999 2.44 5.67999 2.09C5.18999 1.56 4.49 1.25 3.77 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74001C4.05001 2.75 4.34 2.88001 4.55 3.10001C4.76 3.33001 4.86 3.63 4.84 3.94Z"
                    fill="#34CAA5"
                  />
                  <path
                    d="M20.5101 8.75H5.17006C4.75006 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.53 5.21006 17 6.92006 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.60001C21.3401 9.14001 20.9801 8.75 20.5101 8.75Z"
                    fill="#34CAA5"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="33"
                viewBox="0 0 106 33"
                fill="none"
              >
                <path
                  d="M3.00584 8.46666H1L1 33L105 33V11.4536L101.991 18.9203L100.796 21.9069H99.3945L96.5917 18.9203L94.6298 21.907L88.744 21.9072L85.661 18.9204L83.9793 14.4396L81.5317 16.6803L79.3253 18.9203L78.6362 22.3333L77.2349 21.9069H75.5142L72.3048 11.4536L71.3019 14.4403L69.6972 11.4536L68.4937 16.6803L65.2844 7.72028L63.4791 11.4536H60.0692L56.4587 3.98696L54.2523 7.72028L51.3465 5.48L47.806 11.4533L45.5296 1L43.8821 11.4533L32.8928 15.9333L31.4887 12.9466H30.0847L26.8753 8.46666H23.666L22.4625 12.9466L17.6485 3.98666L15.6426 15.9333L14.6397 11.4533H12.4333L10.4274 1L8.4216 9.95999L7.41868 5.48H4.81109L3.00584 8.46666Z"
                  fill="url(#paint0_linear_2133_4687)"
                  fillOpacity="0.16"
                />
                <path
                  d="M1 8.4667H3.00584L4.81109 5.48004H7.41868L8.4216 9.96003L10.4274 1.00004L12.4333 11.4534H14.6397L15.6426 15.9333L17.6485 3.9867L22.4625 12.9467L23.666 8.4667H26.8753L30.0847 12.9467H31.4887L32.8928 15.9333L43.8821 11.4534L45.5296 1.00004L47.806 11.4534L51.3465 5.48004L54.2523 7.72032L56.4587 3.987L60.0692 11.4536H63.4791L65.2844 7.72032L68.4937 16.6803L69.6972 11.4536L71.3019 14.4403L72.3048 11.4536L75.5142 21.907H77.2349L78.6362 22.3334L79.3253 18.9203L81.5317 16.6803L83.9794 14.4396L85.661 18.9204L88.744 21.9073L94.6298 21.907L96.5917 18.9203L99.3945 21.907H100.796L101.991 18.9203L105 11.4536"
                  stroke="#ED544E"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2133_4687"
                    x1="53"
                    y1="33"
                    x2="53"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ED544E" stopOpacity="0" />
                    <stop offset="0.809892" stopColor="#ED544E" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className=" flex flex-col max-md:py-10 pt-[0.625rem]">
              <p className="leading-[1.625rem] tracking-wider font-normal dark:text-[#B2ABAB] text-[#898989] text-[1.125rem]">
                Average Sales
              </p>
              <p className="text-[#3A3F51] dark:text-[#e5e5e5] text-[1.5rem] pt-[0.313rem] font-semibold leading-[2rem] tracking-wider">
                1567
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className=" flex flex-row gap-4 w-full">
                <div className="red-cta flex flex-row gap-1 items-center justify-center px-[0.5rem] py-[0.25rem] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5"
                      stroke="#ED544E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 5.5H9.5V2"
                      stroke="#ED544E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[0.75rem] text-[#ED544E]">23.5%</p>
                </div>
              </div>
              <div className="flex-shrink-0 pl-1">
                <p className="text-[0.6rem] text-[#606060] leading-normal font-normal">
                  vs. previous month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#262626] dark:border-none transform transition-transform hover:scale-110 rounded-[0.875rem] border-[1px] border-[#EDF2F7]">
          <div className="p-[1rem] h-full justify-between flex flex-col">
            <div className="flex flex-row justify-between w-full h-fit">
              <div className="rounded-full p-2 border-[1px] dark:border-[#34CAA5] border-[#e6e6e6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z"
                    fill="#34CAA5"
                  />
                  <path
                    d="M21.9701 15.99C21.9701 19.29 19.2901 21.97 15.9901 21.97C13.9501 21.97 12.1601 20.95 11.0801 19.4C15.4401 18.91 18.9101 15.44 19.4001 11.08C20.9501 12.16 21.9701 13.95 21.9701 15.99Z"
                    fill="#34CAA5"
                  />
                  <path
                    d="M11.45 9.71003L9.05 8.87003C8.81 8.79003 8.76 8.77003 8.76 8.42003C8.76 8.16003 8.94 7.95003 9.17 7.95003H10.67C10.99 7.95003 11.25 8.24003 11.25 8.60003C11.25 9.01003 11.59 9.35003 12 9.35003C12.41 9.35003 12.75 9.01003 12.75 8.60003C12.75 7.45003 11.86 6.51003 10.75 6.46003V6.41003C10.75 6.00003 10.41 5.66003 10 5.66003C9.59 5.66003 9.25 5.99003 9.25 6.41003V6.46003H9.16C8.11 6.46003 7.25 7.34003 7.25 8.43003C7.25 9.38003 7.67 9.99003 8.54 10.29L10.95 11.13C11.19 11.21 11.24 11.23 11.24 11.58C11.24 11.84 11.06 12.05 10.83 12.05H9.33C9.01 12.05 8.75 11.76 8.75 11.4C8.75 10.99 8.41 10.65 8 10.65C7.59 10.65 7.25 10.99 7.25 11.4C7.25 12.55 8.14 13.49 9.25 13.54V13.6C9.25 14.01 9.59 14.35 10 14.35C10.41 14.35 10.75 14.01 10.75 13.6V13.55H10.84C11.89 13.55 12.75 12.67 12.75 11.58C12.75 10.63 12.32 10.02 11.45 9.71003Z"
                    fill="#34CAA5"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="33"
                viewBox="0 0 106 33"
                fill="none"
              >
                <path
                  d="M102.994 8.46666H105V33L1 33V11.4536L4.00877 18.9203L5.20413 21.9069H6.60551L9.40827 18.9203L11.3702 21.907L17.256 21.9072L20.339 18.9204L22.0207 14.4396L24.4683 16.6803L26.6747 18.9203L27.3638 22.3333L28.7651 21.9069H30.4858L33.6952 11.4536L34.6981 14.4403L36.3028 11.4536L37.5063 16.6803L40.7156 7.72028L42.5209 11.4536H45.9308L49.5413 3.98696L51.7477 7.72028L54.6535 5.48L58.194 11.4533L60.4704 1L62.1179 11.4533L73.1072 15.9333L74.5113 12.9466H75.9153L79.1247 8.46666H82.334L83.5375 12.9466L88.3515 3.98666L90.3574 15.9333L91.3603 11.4533H93.5667L95.5726 1L97.5784 9.95999L98.5813 5.48H101.189L102.994 8.46666Z"
                  fill="url(#paint0_linear_2132_4599)"
                  fillOpacity="0.16"
                />
                <path
                  d="M105 8.4667H102.994L101.189 5.48004H98.5813L97.5784 9.96003L95.5726 1.00004L93.5667 11.4534H91.3603L90.3574 15.9333L88.3515 3.9867L83.5375 12.9467L82.334 8.4667H79.1247L75.9153 12.9467H74.5113L73.1072 15.9333L62.1179 11.4534L60.4704 1.00004L58.194 11.4534L54.6535 5.48004L51.7477 7.72032L49.5413 3.987L45.9308 11.4536H42.5209L40.7156 7.72032L37.5063 16.6803L36.3028 11.4536L34.6981 14.4403L33.6952 11.4536L30.4858 21.907H28.7651L27.3638 22.3334L26.6747 18.9203L24.4683 16.6803L22.0206 14.4396L20.339 18.9204L17.256 21.9073L11.3702 21.907L9.40827 18.9203L6.60551 21.907H5.20414L4.00877 18.9203L1 11.4536"
                  stroke="#66C87B"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2132_4599"
                    x1="53"
                    y1="33"
                    x2="53"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#77B900" stopOpacity="0" />
                    <stop offset="0.809892" stopColor="#77B900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className=" flex flex-col pt-[0.625rem] max-md:py-10">
              <p className="leading-[1.625rem] dark:text-[#B2ABAB] tracking-wider font-normal text-[#898989] text-[1.125rem]">
                Total Income
              </p>
              <p className="text-[#3A3F51] dark:text-[#e5e5e5] text-[1.5rem] pt-[0.313rem] font-semibold leading-[2rem] tracking-wider">
                $350.000
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className=" flex flex-row gap-4 w-full">
                <div className="green-cta flex flex-row gap-1 items-center justify-center px-[0.5rem] py-[0.25rem] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5"
                      stroke="#34CAA5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 0.5H9.5V4"
                      stroke="#34CAA5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                  <p className="text-[0.75rem] text-[#34caa5]">23.5%</p>
                </div>
              </div>
              <div className="flex-shrink-0 pl-1">
                <p className="text-[0.6rem] text-[#606060] leading-normal font-normal">
                  vs. previous month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-4  px-[1.25rem] pt-[1.125rem] rounded-[0.875rem] dark:bg-[#262626] dark:border-none bg-white border-[1px] border-[#EDF2F7] h-[26.375rem]">
        <div className="w-full bg-transparent flex flex-row justify-between items-center">
          <div>
            <p className="text-[#26282C] dark:text-[#e5e5e5] text-[1.125rem] font-bold leading-[1.625rem]">
              Last Orders
            </p>
          </div>
          <div className="">
            <p className="text-[#34CAA5]">See All</p>
          </div>
        </div>
        <div className="">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-separate">
              <thead>
                <tr>
                  <th className="text-[#9CA4AB] text-start">Name</th>
                  <th className="text-[#9CA4AB] max-sm:hidden text-start">
                    Date
                  </th>
                  <th className="text-[#9CA4AB] max-xs:hidden text-start">
                    Amount
                  </th>
                  <th className="text-[#9CA4AB] text-start">Status</th>
                  <th className="text-[#9CA4AB] text-start max-sm:hidden">
                    Invoice
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((table, index) => (
                  <tr key={index}>
                    <td
                      className={`py-2.5 text-[#3A3F51] dark:text-[#f5f5f5] flex flex-row gap-4 text-[1rem] items-center dark:border-none border-b border-[#EDF2F6] font-medium ${
                        table.name != "Phillip Lubin"
                          ? "border-[#edf2f6]"
                          : "border-none"
                      }`}
                    >
                      <Image
                        src={table.profile_pic}
                        width={32}
                        height={32}
                        alt="Profile Pic"
                        className="max-sm:hidden"
                      />
                      {table.name}
                    </td>
                    <td
                      className={`py-2 ${
                        table.name == "Phillip Lubin"
                          ? "border-none"
                          : "border-[#EDF2F6]"
                      } dark:border-none max-sm:hidden border-b text-[#737373] text-[1rem] border-[#EDF2F6]`}
                    >
                      {table.date}
                    </td>
                    <td
                      className={`py-2 ${
                        table.name == "Phillip Lubin"
                          ? "border-none"
                          : "border-[#EDF2F6]"
                      } dark:border-none max-xs:hidden border-b text-[1rem] font-semibold dark:text-[#e5e5e5] text-[#0D062D] border-[#EDF2F6]`}
                    >
                      {table.amount}
                    </td>
                    <td
                      className={`py-2 ${
                        table.name == "Phillip Lubin"
                          ? "border-none"
                          : "border-[#EDF2F6]"
                      } border-b text-[1rem] dark:border-none border-[#EDF2F6] ${
                        table.status == "Paid"
                          ? "text-[#34CAA5] "
                          : " text-[#ED544E]"
                      }`}
                    >
                      {table.status}
                    </td>
                    <td
                      className={`py-2 dark:border-none border-b border-[#EDF2F6] flex flex-row gap-2 max-sm:hidden items-center ${
                        table.name == "Phillip Lubin"
                          ? "border-none"
                          : "border-[#EDF2F6]"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                          fill={theme=="dark" ? "#34CAA5" : "#292D32" }
                        />
                        <path
                          d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                          fill={theme=="dark" ? "#34CAA5" : "#292D32" }
                        />
                        <path
                          d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                          fill={theme=="dark" ? "#34CAA5" : "#292D32" }
                        />
                        <path
                          d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                          fill={theme=="dark" ? "#34CAA5" : "#292D32" }
                        />
                      </svg>{" "}
                      <p className="text-[#0D062D] dark:text-[#e5e5e5] text-[0.875rem]">
                        View
                      </p>
                    </td>
                  </tr>
                ))}

                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-white h-fit dark:bg-[#262626] max-sm:mb-20 rounded-[0.874rem]">
        <div className="pl-[1.25rem] pt-[1rem] pb-[1rem] pr-[1.25rem]">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#26282C] dark:text-[#e5e5e5] font-semibold text-[1.125rem] leading-[1.625rem]">
              Top Platform
            </p>
            <p className="text-[#34CAA5]">See All</p>
          </div>
          <div className="">
            <p className="text-[#262626] dark:text-[#e5e5e5] py-6 text-[1.125rem] font-semibold leading-[1.625rem]">
              Book Bazaar
            </p>
          </div>
          <div className="w-full rounded-full bg-[#b2abab] h-[0.75rem] dark:opacity-80 opacity-100">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              className="w-[60%] h-full rounded-full opacity-100 bg-[#6160DC]"
            />
          </div>
          <div className="pt-[1rem] flex-row flex justify-between">
            <p className="text-[#525252] dark:text-[#e5e5e5] font-normal leading-[1.625rem]">
              $2,500,000
            </p>
            <p className="dark:text-[#e5e5e5] text-[#525252]">+15%</p>
          </div>
          <div className="">
            <p className="text-[#262626] dark:text-[#e5e5e5] py-6 text-[1.125rem] font-semibold leading-[1.625rem]">
              Altain Aisle
            </p>
          </div>
          <div className="w-full rounded-full bg-[#b2abab] h-[0.75rem] dark:opacity-80 opacity-100">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants2}
              className="w-[60%] h-full rounded-full opacity-100 bg-[#54C5EB]"
            />
          </div>
          <div className="pt-[1rem] flex-row flex justify-between">
            <p className="text-[#525252] dark:text-[#e5e5e5] font-normal leading-[1.625rem]">
              $1,800,000
            </p>
            <p className="dark:text-[#e5e5e5] text-[#525252]">+10%</p>
          </div>
          <div className="">
            <p className="text-[#262626] dark:text-[#e5e5e5] py-6 text-[1.125rem] font-semibold leading-[1.625rem]">
              Toy Troop
            </p>
          </div>
          <div className="w-full rounded-full bg-[#b2abab] h-[0.75rem] dark:opacity-80 opacity-100">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants3}
              className="w-[60%] h-full rounded-full opacity-100 bg-[#FFB74A]"
            />
          </div>
          <div className="pt-[1rem] flex-row flex justify-between">
            <p className="text-[#525252] dark:text-[#e5e5e5] font-normal leading-[1.625rem]">
              $1,200,00
            </p>
            <p className="dark:text-[#e5e5e5] text-[#525252]">+8%</p>
          </div>
          <div className="">
            <p className="text-[#262626] dark:text-[#e5e5e5] py-6 text-[1.125rem] font-semibold leading-[1.625rem]">
              X Store
            </p>
          </div>
          <div className="w-full rounded-full bg-[#b2abab] h-[0.75rem] dark:opacity-80 opacity-100">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants4}
              className="w-[60%] h-full rounded-full opacity-100 bg-[#FF4A55]"
            />
          </div>
          <div className="pt-[1rem] flex-row flex justify-between">
            <p className="text-[#525252] dark:text-[#e5e5e5] font-normal leading-[1.625rem]">
              $800,000
            </p>
            <p className="dark:text-[#e5e5e5] text-[#525252]">+6%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
