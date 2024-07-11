"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[rgb(216,216,220)] text-[rgb(124,124,128)] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-white font-bold mb-4">About Us</h5>
            <p>
              We are a company that values quality and customer satisfaction.
              Our mission is to provide the best products and services to our
              customers.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-white font-bold mb-4">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-white font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.29h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.463.099 2.794.143v3.24h-1.917c-1.503 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.621h-3.12v9.29h6.116c.73 0 1.324-.593 1.324-1.324v-21.352c0-.731-.594-1.324-1.325-1.324z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.575 2.165-2.723-.951.564-2.005.974-3.127 1.195-.896-.955-2.173-1.55-3.591-1.55-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.128 1.124-4.087-.205-7.715-2.164-10.14-5.144-.424.728-.666 1.573-.666 2.475 0 1.709.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.388 1.699 4.379 3.95 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.087.627 1.956 2.445 3.379 4.6 3.418-1.68 1.319-3.809 2.105-6.114 2.105-.397 0-.788-.023-1.175-.069 2.179 1.398 4.768 2.213 7.548 2.213 9.054 0 14.002-7.503 14.002-14.002 0-.213-.004-.426-.013-.637.961-.693 1.8-1.562 2.462-2.549z" />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/p/C9Aa2H-NbGX/?igsh=c3BtYWYyZHA5ejZu"
                className="hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.96.24 2.408.409.596.221 1.033.487 1.49.943.457.457.722.894.943 1.49.169.448.355 1.238.409 2.408.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.409 2.408-.221.596-.487 1.033-.943 1.49-.457.457-.894.722-1.49.943-.448.169-1.238.355-2.408.409-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.408-.409-.596-.221-1.033-.487-1.49-.943-.457-.457-.722-.894-.943-1.49-.169-.448-.355-1.238-.409-2.408-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.96.409-2.408.221-.596.487-1.033.943-1.49.457-.457.894-.722 1.49-.943.448-.169 1.238-.355 2.408-.409 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.257 0-3.667.014-4.947.072-1.281.058-2.162.272-2.918.58-.795.324-1.465.76-2.139 1.433-.673.674-1.109 1.344-1.433 2.139-.308.756-.522 1.637-.58 2.918-.058 1.28-.072 1.69-.072 4.947s.014 3.667.072 4.947c.058 1.281.272 2.162.58 2.918.324.795.76 1.465 1.433 2.139.674.673 1.344 1.109 2.139 1.433.756.308 1.637.522 2.918.58 1.28.058 1.69.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.162-.272 2.918-.58.795-.324 1.465-.76 2.139-1.433.673-.674 1.109-1.344 1.433-2.139.308-.756.522-1.637.58-2.918.058-1.28.072-1.69.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.272-2.162-.58-2.918-.324-.795-.76-1.465-1.433-2.139-.674-.673-1.344-1.109-2.139-1.433-.756-.308-1.637-.522-2.918-.58-1.28-.058-1.69-.072-4.947-.072z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.293 0-4.162-1.869-4.162-4.162s1.869-4.162 4.162-4.162 4.162 1.869 4.162 4.162-1.869 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          <img className="bg-[rgb(255,204,0)] rounded-sm" src="/img/flag.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
