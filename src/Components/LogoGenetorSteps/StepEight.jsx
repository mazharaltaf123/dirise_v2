import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function StepEight(props) {
    const handleSubmit = (vales = color)=>{
        props.next(vales, true )
 }
  return (
    <div className='items-center text-center flex flex-col gap-10 relative md:w-6/12 w-full mx-auto h-60 justify-center' data-aos="fade-left">
    <h1 className='text-colorThemeDarkVariant font-medium md:text-3xl text-lg'>Select keywords</h1>
    <button className='absolute right-0' onClick={handleSubmit}>Skip</button>
    <p>Choose one or more font styles for your logo.
</p>
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {()=>(
           <Form className='w-full'>
           <div className='relative'>
       <Field type="text" id="businessName" name="businessName" placeholder="DIRISE..." className="py-3 px-5 w-full bg-[#EBF1F4]" />
       <ErrorMessage name="businessName" component="div" />
       <button type="submit">
     <img
     src="/assets/Arrow_right.svg"
     alt="Logo"
     className="absolute right-2 top-0 w-12"
   />
     </button>
     </div>
    
       </Form>
      )}
    </Formik>
  </div>
  )
}

export default StepEight