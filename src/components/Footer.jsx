import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="bg-stone-100 py-4 text-slate-700">
        <div class="container px-4 mx-auto">
          <div class="-mx-4 flex flex-wrap justify-between">
            <div class="px-4 my-4 w-full xl:w-1/5">
              <a href="/" class="block w-56 mb-10">
                <img src="https://ailegal.uk/wp-content/uploads/2022/10/Logo.png" alt="our logo" />
              </a>
              <p class="">
                AI Legal is your trusted partner in Criminal Defence and
                Education Law, offering expert representation and dedicated
                support for individuals facing legal challenges in Birmingham
                and beyond.
              </p>
            </div>

            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Company
                </h2>
              </div>
              <ul class="leading-8">
                <li>
                  <a href="#" class="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Blog
                </h2>
              </div>
              <ul class="leading-8">
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Getting Started With HTML and CSS
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    What Is Flex And When to Use It?
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    How TailwindCSS Can Help Your Productivity?
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    5 Tips to Make Responsive Website
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    See More
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Legal
                </h2>
              </div>
              <ul class="leading-8">
                <li>
                  <a href="https://ailegal.uk/terms-conditions/" class="hover:text-blue-400">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="https://ailegal.uk/privacy-policy/" class="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://ailegal.uk/cookies-policy/" class="hover:text-blue-400">
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-stone-500 py-4 text-gray-100">
        <div class="container mx-auto px-4">
          <div class="-mx-4 flex flex-wrap justify-between">
            <div class="px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2023 AI Legal. All Rights Reserved.
            </div>
            <div class="px-4 w-full text-center sm:w-auto sm:text-left">
              Regulated by the Bar Standards Board.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
