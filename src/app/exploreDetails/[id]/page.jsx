import React from 'react'
import { useSelector } from 'react-redux';

function page() {
    // const form = useSelector((state) => state.form);
    // console.log(form)
  return (
    <div className='container mx-auto py-10'>
        <div className='flex justify-between'>
        <img src='/assets/arrow-left.svg' alt='' className='bg-[#EBF1F4] p-2 w-12' />
        <div className='items-end flex self-end gap-2'>
   <img src='/assets/color-picker.svg' alt='' className='bg-[#EBF1F4] p-2 w-12' />
    <img src='/assets/Favorite.svg' alt='' className='bg-[#EBF1F4] p-2 w-12' />
   </div>
        </div>
        <div className='my-10'>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/6 p-2 h-52">
    <div className="bg-[#EBF1F4] rounded-lg shadow-lg p-6 relative h-full">
      <div className="heart-icon absolute top-2 right-2 opacity-0 transition-opacity duration-300">
        
      </div>
    </div>
  </div>
        </div>
        <div className="flex flex-wrap w-full">
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/2 p-2 h-52">
    <div className="bg-[#EBF1F4] rounded-lg shadow-lg p-6 relative h-full">
      <div className="heart-icon absolute top-2 right-2 opacity-0 transition-opacity duration-300">
        
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/2 p-2 h-52">
    <div className="bg-[#EBF1F4] rounded-lg shadow-lg p-6 relative h-full">
      <div className="heart-icon absolute top-2 right-2 opacity-0 transition-opacity duration-300">
        
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/2 p-2 h-52">
    <div className="bg-[#EBF1F4] rounded-lg shadow-lg p-6 relative h-full">
      <div className="heart-icon absolute top-2 right-2 opacity-0 transition-opacity duration-300">
       
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/2 p-2 h-52">
    <div className="bg-[#EBF1F4] rounded-lg shadow-lg p-6 relative h-full">
      <div className="heart-icon absolute top-2 right-2 opacity-0  transition-opacity duration-300">
       
      </div>
    </div>
  </div>

</div>
<div className='flex w-full gap-4  justify-center  mt-10'>
              
              <div className='w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 bg-pricingcard rounded-lg p-4 text-center text-MainColor px-16'>
                <h1 className='font-medium'>get your logo</h1>

              </div>
              
        </div>
    </div>
  )
}

export default page