import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StepThree = (props) => {
    const handleSubmit = (vales)=>{
        props.next(vales)
 }
  return (
    <div className='items-center text-center flex flex-col gap-10 relative md:w-6/12 w-full mx-auto h-60 justify-center' data-aos="fade-left">
    <h1 className='text-colorThemeDarkVariant font-medium md:text-3xl text-lg'>Your Slogan </h1>
    <button className='absolute right-0 text-sm' onClick={handleSubmit}>Skip</button>
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {()=>(
         <Form className='w-full'>
         <div className='relative'>
            <label className='mb-2 flex font-light text-sm text-start items-start text-[#00000080]'>Enter your slogan (optional) : </label>
     <Field type="text" id="slogan" name="slogan" placeholder="Coffee, Flowers, Restaurants " className="py-3 px-5 w-full bg-[#EBF1F4]" />
     <ErrorMessage name="slogan" component="div" />
     <button type="submit">
   <img
   src="/assets/Arrow_right.svg"
   alt="Logo"
   className="absolute right-2 top-8 md:top-6 md:w-12 w-10"
 />
   </button>
   </div>
  
     </Form>
      )}
    </Formik>
  </div>
  );
};

export default StepThree;