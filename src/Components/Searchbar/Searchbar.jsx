import React from 'react'

function Searchbar() {
  return (
          <div className="relative w-9/12 mx-auto">
            <input
              type="text"
              className="pl-10 w-full pr-4 py-4 rounded-md bg-[#EBF1F4] border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Logo design, brand guideline"
            />
            <div className="absolute inset-y-0 right-10 pr-3 flex items-center pointer-events-none">
              {/* <SearchIcon className="h-5 w-5 text-gray-500" /> */}
              <img src="/assets/Search.svg" alt="Logo" className='h-5 w-5' />
            </div>
          </div>
        );
}

export default Searchbar