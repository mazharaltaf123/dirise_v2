import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
function StepFive(props) {
    const handleSubmit = (vales = color)=>{
        props.next(vales)
 }
 const styles = [
    {title:"Book"},
    {title:"Book"},
    {title:"Book"},
    {title:"Book"},
    {title:"Book"},
    {title:"Book"},
    {title:"Book"},
    {title:"Book"},
]
  return (
    <div className='items-center text-center flex flex-col md:gap-10 gap-4 relative md:w-6/12 w-full mx-auto' data-aos="fade-left">
    <h1 className='text-colorThemeDarkVariant font-medium md:text-3xl text-xl'>Select Font style</h1>
    <button className='absolute right-0' onClick={handleSubmit}>Skip</button>
    <p>Choose one or more font styles for your logo.
</p>
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {()=>(
          <Form className='w-full'>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {styles.map((item,i)=>{
                return(
                    <button key={i}  type="submit" name='props.data.fontSize' className='h-24 border-[#000A28] border text-center flex items-center justify-center rounded-lg active:border-black focus:border-black '>
                        <p>{item.title}</p>
                    </button>
                )
              })}
              </div>
          </Form>
      )}
    </Formik>
  </div>
  )
}

export default StepFive