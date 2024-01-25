'use client'
import React from 'react';
import { useState } from 'react';

const Menu = () => {
    const [showNav, setShowNav] = useState(false);

  return (
    <div className='flex justify-between items-center max-lg:w-full'>
        <button
              type="button"
              className="lg:hidden cursor-pointer"
              onClick={() => setShowNav(!showNav)}
            >
              <div
                className={`w-[23px] h-[2px] transition rounded-full ease-in duration-150 mb-1 ${
                  showNav ? "rotate-45 mb-0 translate-y-[1px]" : "rotate-0 mb-1"
                } bg-white`}
              />
              <div
                className={`${
                  showNav ? "hidden mb-0" : "mb-1"
                } w-[23px] h-[2px] transition ease-in rounded-full duration-150 bg-white mb-1 `}
              />
              <div
                className={`w-[23px] rounded-full h-[2px] ${
                  showNav ? "-rotate-45 mb-0" : "rotate-0 mb-1"
                } transition ease-in duration-150  bg-white`}
              />
            </button>
            <div
            className={`flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40 ${
              showNav
                ? "max-lg:translate-x-0 max-lg:scale-100"
                : "  max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4"
            } `}
          >
            <div className="flex max-lg:flex-col lg:items-center max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px] overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg">
              <nav className="mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5">
                <ul className="flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto overflow-y-auto">
                    <li>Gblock</li>
                    <li>Gblock</li>
                    <li>Gblock</li>


                </ul>
              </nav>
            </div>
          </div>
    </div>
  )
}

export default Menu