import Link from 'next/link'
import React from 'react'

function Signup() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen container mx-auto ">
  

  <div className="flex-1  flex py-20 ">
  <div className="w-full">
            <h1 className='2xl:text-3xl text-colorThemeDarkVariant font-bold'>Create your account</h1>
          <form className='mt-10'>
            <div className="mb-8 flex gap-4 w-full justify-between">
              <div className='w-1/2'>
              <label
                htmlFor="fName"
                className="block text-textSecondary font-normal text-sm font-bold mb-2"
              >
               First Name
              </label>
              <input
                type="text"
                id="fName"
                className="appearance-none border-b border-gray-300 bg-transparent input-custom  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                
              />
              </div>
              <div  className='w-1/2'>
              <label
                htmlFor="email"
                className="block text-textSecondary font-normal text-sm font-bold mb-2"
              >
               Last Name
              </label>
              <input
                type="text"
                className=" appearance-none border-b border-gray-300 input-custom bg-transparent   w-full py-3 text-sm px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block text-textSecondary font-normal text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="Email"
                className=" appearance-none border-b border-gray-300 input-custom bg-transparent  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                
              />
            </div>
            <div className="mb-8 flex gap-4 w-full justify-between">
              <div  className='w-1/2'>
              <label
                htmlFor="fName"
                className="block text-textSecondary font-normal text-sm font-bold mb-2"
              >
               Password
              </label>
              <input
                type="password"
                id="fName"
                className="appearance-none border-b border-gray-300 bg-transparent input-custom  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                
              />
              </div>
              <div  className='w-1/2'>
              <label
                className="block text-textSecondary font-normal text-sm font-bold mb-2"
              >
               Last Name
              </label>
              <input
                type="password"
                className=" appearance-none border-b border-gray-300 input-custom bg-transparent   w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                
              />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-MainColor hover:text-blue-700 font-normal text-sm text-center mx-auto underline"
              >
               Create My Account
              </a>
            
            </div>
            
            <h1 className='mt-8 text-sm font-normal text-center'>*By registering, you accept our terms of us and our privacy policy.</h1>
           <h6 className='mt-8 mx-auto text-center font-normal'> Or</h6>
           <div className='flex  justify-between items-center mt-8'>
            <div className='flex gap-4 mb-4'>
                <img src='/assets/google.svg' alt='' className='w-4'/>
                <span className='font-normal text-textSecondary text-sm'>Login with Google</span>
            </div>
            <div className='flex gap-4'>
            <img src='/assets/facebook.svg' alt='' className='w-4'/>
                <span className='font-normal text-textSecondary text-sm'>Login with Facebook</span>
            </div>
           </div>
           <div className="border border-gray-300 h mt-10"></div>
           <div className='mt-5      text-center'>
            <span className='font-normal text-textSecondary text-sm'>Already have account ?</span>
            <Link href="/Login">
            <h1 className='mt-5 text-MainColor text-sm'> log in  </h1>
            </Link>
           </div>
          </form>
        </div>
  </div>
  <div className="flex-1 flex  lg:justify-end py-20">
  <img src="/assets/Dirise_logo.svg" alt="Logo" className='h-4/5' />
  </div>
</div>
  )
}

export default Signup