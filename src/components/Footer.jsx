import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500 mt-7 pb-5 text-white">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid row-gap-10 lg:grid-cols-6 ">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
              <p className="font-bold tracking-wide ">Quickas</p>
              <ul className="mt-2 space-y-2 ">
                <li>
                  <a
                    href="/News"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/Sports"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Sports
                  </a>
                </li>
                <li>
                  <a
                    href="/Business"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/Entertainment"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/Admin"
                    className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Admin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold tracking-wide ">Contacts</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <p className="">
                    Phone No:
                    <a
                      href="tel:850-123-5021"
                      className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      {" "}
                      850-123-5021
                    </a>
                  </p>
                </li>
                <li>
                  <p className="">
                    E-mail:
                    <a
                      href="mailto:josammust@gmail.com"
                      className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      {" "}
                      josammust@gmail.com
                    </a>
                  </p>
                </li>
                <li>
                  <p className="">
                    Address:
                    <a
                      href="https://maps.app.goo.gl/xMzxeS7bvosvekHv6"
                      target="_blank"
                      className=" transition-colors duration-300 hover:text-deep-purple-accent-200"
                      rel="noreferrer"
                    >
                      {" "}
                      190-50100, Kakamega
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold tracking-wide ">Social Media</p>

              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-purple-500"
                >
                  <a
                    to="https://instagram.com/mmust_josa?igshid=OGY3MTU3OGY1Mw=="
                    target="_blank"
                  >
                    <svg
                      viewBox="0 0 30 30"
                      fill="currentColor"
                      className="h-6"
                    >
                      <circle cx="15" cy="15" r="4"></circle>
                      <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                    </svg>
                  </a>
                </a>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-purple-500"
                >
                  <a
                    to="https://youtube.com/@MMUSTJOURNALISMSTUDENTSASSOCIA?si=G7xSxci9J2zWtcDN"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fill="currentColor"
                      className="h-6"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </a>
                </a>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-purple-500"
                >
                  <a
                    to="https://www.facebook.com/profile.php?id=100086633626518"
                    target="_blank"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                    </svg>
                  </a>
                </a>
              </div>
              <p className="mt-4 text-sm ">MMUST JOSA DIGITAL NEWS.</p>
            </div>
          </div>
          <div className="mx-10 md:max-w-md lg:col-span-2">
            <span className="text-base font-bold tracking-wide ">
              Message Us
            </span>
            {/* <form
              className="block mt-4 "
              onSubmit={handleSubmit}
              // method="post"
              // action={`mailto:https://josammust@gmail.com?subject=Message from ${name}&body=${message}`}
              // encType="multipart/form-data"
            >
           
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white text-gray-800 border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <input
                placeholder="Email"
                required={true}
                type="email"
                className="flex-grow w-full mt-5 h-12 px-4 mb-3 transition duration-200 bg-white text-gray-800 border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <input
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required={true}
                type="textarea"
                height={100}
                className="flex-grow w-full mt-5 h-12 px-4 mb-3 transition duration-200 bg-white text-gray-800 border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <input
                type="submit"
                value="Send Email"
                className="mt-5 inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 border-2 cursor-pointer hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              />
            </form> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
