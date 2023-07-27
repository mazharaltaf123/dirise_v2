import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    // <nav className="p-4   mx-auto w-100 bg-[#024e70]">
    //     <div className='container mx-auto flex items-center justify-between text-white'>
    //   <div className="logo">
    //     <Link href="/">
    //     <h1 className='text-white font-normal text-xl'>DIRISE</h1>
    //     </Link>
    //   </div>
    //   <div className="links flex justify-between gap-32">
    //     <div className='flex text-sm text-white'>
    //     <Link href="/Pricing">
    //       <h1 className="mr-4 text-sm">Pricing </h1>
    //     </Link>
    //     <Link href="/about">
    //       <h1 className="mr-4">Ai Generator </h1>
    //     </Link>
    //     <Link href="/contact">
    //       <h1>Subscribe! </h1>
    //     </Link>
    //     </div>
    //     <div className='flex text-sm text-white'>
    //     <Link href="/">
    //       <h1 className="mr-4 text-sm">Lang </h1>
    //     </Link>
    //     <Link href="/Login">
    //       <h1 className="mr-4 text-sm">Sign in </h1>
    //     </Link>
    //     </div>
    //   </div>
    //   </div>
    // </nav>
    <div>
      <nav className="w-full bg-colorThemePrimary shadow">
        <div className="justify-between container  mx-auto  md:items-center md:flex ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
        <h1 className='text-white font-normal text-2xl'>DIRISE</h1>
      </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <div className="links flex justify-between gap-32">
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                <Link href="/Pricing">
          <h1 className="mr-4 text-sm">Pricing </h1>
         </Link>
                </li>
                <li className="text-white">
                <Link href="/AIGenetor">
           <h1 className="mr-4 text-sm">Ai Generator </h1>
        </Link>
                </li>
                <li className="text-white">
                <Link href="/Payment">
         <h1 className="mr-4 text-sm">Subscribe! </h1>
        </Link>
                </li>
              </ul>
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                <Link href="/">
          <h1 className="mr-4 text-sm">Lang </h1>
         </Link>
                </li>
                <li className="text-white">
                <Link href="/Login">
         <h1 className="mr-4 text-sm">Sign in </h1>
        </Link>
                </li>
                
              </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar