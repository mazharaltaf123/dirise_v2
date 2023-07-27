import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function EmailDone() {
  
  return (
    <div className='items-center text-center flex flex-col gap-10 relative md:w-6/12 w-full mx-auto h-60 justify-center' >
    {/* <h1 className='text-colorThemeDarkVariant font-medium md:text-3xl text-lg'>Select keywords</h1> */}
    {/* <button className='absolute right-0' onClick={handleSubmit}>Skip</button> */}
    <p className='text-colorThemeDarkVariant font-medium'>Enter your email  to get your logo when its done !
</p>
    
           <form className='w-full'>
           <div className='relative'>
       <input type="text" id="" name="" placeholder="Dirise@gmail.com" className="py-3 px-5 w-full bg-[#EBF1F4]" />
       {/* <ErrorMessage name="" component="div" /> */}
       <button type="submit">
     <img
     src="/assets/Arrow_right.svg"
     alt="Logo"
     className="absolute right-2 top-0 w-12"
   />
     </button>
     </div>
    
       </form>
  </div>
  )
}

export default EmailDone