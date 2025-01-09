"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import banner from "../../../public/banner.jpg";
import { Activity, Users, Calendar, MessageCircle, Info } from "lucide-react";

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle click events and toggle FAQ item visibility
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <header className="fixed w-full">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" className="flex items-center">
              <Image
                src={logo}
                alt="logo"
                className="h-6 mr-3 sm:h-9"
                width={35}
                height={10}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Divine Connect
              </span>
            </a>

            <div className="flex items-center lg:order-2">
              <a
                href="/login"
                className=" text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>

              <a
                href="/register"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Register
              </a>

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-white dark:bg-gray-900 pt-16">
        <div className="grid max-w-screen-xl px-6 pt-20 pb-12 mx-auto lg:gap-12 xl:gap-16 lg:py-20 lg:grid-cols-12 lg:pt-28">
          {/* Text Content */}
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl xl:text-7xl dark:text-white">
              Building Your Prayer Community
            </h1>
            <p className="max-w-2xl mb-8 text-lg font-light text-gray-600 lg:mb-10 lg:text-xl dark:text-gray-400">
              Centralize church activities, manage prayer groups, schedule
              prayer meetings, and engage with your community seamlessly using
              Divine Connect.
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <a
                href="/login"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={banner}
              alt="Hero image for Divine Connect"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                "For where two or three are gathered in my name, there am I with
                them." – Matthew 18:20
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <Image
                src={logo}
                alt="logo"
                className="h-6 mr-3 sm:h-9"
                width={35}
                height={10}
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Divine Connect
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  Connecting believers worldwide
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
            Key Features
          </h2>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
            <div className="flex flex-col items-center">
              <Activity className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Centralized Prayer Groups
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Easily manage and organize your prayer groups with Divine
                Connect's intuitive system.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Event Scheduling
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Schedule events such as prayer meetings with ease and notify all
                group members instantly.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Prayer Event Notifications
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Stay updated on upcoming prayer events and church programs with
                instant notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
            How It Works
          </h2>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
            <div className="flex flex-col items-center">
              <Info className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sign Up
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Create an account by providing your details and join a community
                of believers.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Create a Group
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Set up your prayer group or community, customize it, and invite
                members.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Engage & Grow
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Begin scheduling prayer events, sharing prayer requests, and
                connecting with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 dark:bg-blue-900 py-16">
        <div className="max-w-screen-xl px-4 mx-auto text-center text-white lg:px-6">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight lg:mb-8 lg:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg font-light">
            Join the Divine Connect community today and experience seamless
            prayer group management. Start organizing and engaging now!
          </p>
          <div className="flex justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/register"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center bg-white text-blue-700 rounded-lg sm:w-auto hover:bg-gray-200 focus:ring-4 focus:ring-blue-300"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 text-lg font-light dark:text-gray-400">
            Have questions or need help? Reach out to us, and we’ll get back to
            you as soon as possible.
          </p>
          <a
            href="mailto:support@fellowshipprayer.com"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center bg-blue-700 text-white rounded-lg sm:w-auto hover:bg-blue-500 focus:ring-4 focus:ring-blue-300"
          >
            Contact Support
          </a>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-14">
        <div className="max-w-screen-xl px-4 mx-auto lg:px-6">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-screen-md mx-auto">
            <div>
              {/* FAQ Item 1 */}
              <h3>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  onClick={() => toggleAccordion(1)}
                >
                  <span>Can I use Divine Connect in open-source projects?</span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      activeIndex === 1 ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              {activeIndex === 1 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Divine Connect is a platform to manage prayer groups, so it
                    can be used in open-source projects for managing prayer
                    requests, schedules, and more.
                  </p>
                </div>
              )}

              {/* FAQ Item 2 */}
              <h3>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  onClick={() => toggleAccordion(2)}
                >
                  <span>Is Divine Connect available on mobile devices?</span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      activeIndex === 2 ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              {activeIndex === 2 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Yes, Divine Connect is accessible via mobile browsers. You
                    can also add it to your home screen for a more app-like
                    experience.
                  </p>
                </div>
              )}

              {/* FAQ Item 3 */}
              <h3>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  onClick={() => toggleAccordion(3)}
                >
                  <span>How do I create a prayer group?</span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      activeIndex === 3 ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              {activeIndex === 3 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    To create a prayer group, simply sign up, navigate to the
                    "Groups" section, and click on "Create Group". Follow the
                    prompts to set up your group details.
                  </p>
                </div>
              )}

              {/* FAQ Item 4 */}
              <h3>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  onClick={() => toggleAccordion(4)}
                >
                  <span>
                    Can I receive notifications for new prayer requests?
                  </span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      activeIndex === 4 ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              {activeIndex === 4 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Yes, you will receive push notifications when new prayer
                    requests are submitted. Make sure to enable notifications on
                    your device.
                  </p>
                </div>
              )}

              {/* Church Hub FAQ Item 1 */}
              <h3>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  onClick={() => toggleAccordion(5)}
                >
                  <span>What is Church Hub?</span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      activeIndex === 5 ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              {activeIndex === 5 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Church Hub is a feature that allows churches to centralize
                    their activities, upload documents, and schedule events like
                    prayer meetings. It provides a streamlined way to manage and
                    engage with the church community.
                  </p>
                </div>
              )}

              {/* Church Hub FAQ Item 2 */}
              <h3>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  onClick={() => toggleAccordion(6)}
                >
                  <span>What can I do within the Church Hub?</span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      activeIndex === 6 ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              {activeIndex === 6 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Within the Church Hub, you can create and manage church
                    profiles, upload activity documents, schedule prayer
                    meetings, and more. It centralizes church activities and
                    reduces the need for individual event creation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
