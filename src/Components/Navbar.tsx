import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-0 flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_Befruw1OCQcE5YDlmDxqTj6-e8DtfKNZU-hDuFqPw&s"
            className="mr-1 h-20"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-black">
            Chicago Memon Jamat
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-bold dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <a
                href="/"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:bg-blue-600 md:bg-transparent md:p-0 md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500 text-xl"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex w-full items-center justify-between rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-dark-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-dark md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500 text-xl"
              >
                About
                <svg
                  className="ml-1 h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="/Mission"
                      className="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Team"
                      className="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/History"
                      className="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                    >
                      Our History
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex w-full items-center justify-between rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-dark-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-dark md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500 text-xl"
              >
                News & Events
                <svg
                  className="ml-1 h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-dark-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="/Elections"
                      className="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                    >
                      Elections
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Events"
                      className="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Mosques"
                      className="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                    >
                      List of Mosques
                    </a>
                  </li>
                  <li>
                    <a
                      href="/OtherOrgs"
                      className="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                    >
                      Other Organizations
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Useful_Links"
                      className="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                    >
                      Useful Links
                    </a>
                  </li>
                </ul>
                
              </div>
            </li>
            <li>
              <a
                href="/Contact"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500 text-xl"
              >
                Contact
              </a>
            </li>
            

          </ul>
        </div>
      </div>
    </nav>
  );
}
