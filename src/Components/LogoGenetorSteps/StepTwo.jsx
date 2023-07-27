import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StepTwo = (props) => {
    const handleSubmit = (vales)=>{
        props.next(vales)
 }
  return (
    <div className='items-center text-center flex flex-col gap-5 h-60 justify-center' data-aos="fade-left">
    <h1 className='text-colorThemeDarkVariant font-medium md:text-3xl  text-lg'>Your industry </h1>
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {()=>(
         <Form className='w-full md:w-6/12'>
         <div className='relative'>
     <Field type="text" id="industry" name="industry" placeholder="Coffee, Flowers, Restaurants " className="md:py-3 py-2 px-5 w-full bg-[#EBF1F4]" />
     <ErrorMessage name="industry" component="div" />
     <button type="submit">
   <img
   src="/assets/Arrow_right.svg"
   alt="Logo"
   className="absolute right-2 top-0 md:w-12 w-10"
 />
   </button>
   </div>
  
     </Form>
      )}
    </Formik>
  </div>
  );
};

export default StepTwo;