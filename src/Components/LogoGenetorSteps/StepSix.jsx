import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
function StepSix(props) {
    const handleSubmit = (vales = color)=>{
        props.next(vales)
 }
 const styles = [
    {title:"Modern "},
    {title:"Classic"},
    {title:"Old style"},
    {title:"Italian"},
    {title:""},
    {title:""},
    {title:""},
    {title:""},
]
  return (
    <div className='items-center text-center flex flex-col md:gap-10 gap-4 relative md:w-6/12 w-full mx-auto' data-aos="fade-left">
    <h1 className='text-colorThemeDarkVariant font-medium md:text-3xl text-lg'>Select Logo style</h1>
    <button className='absolute right-0' onClick={handleSubmit}>Skip</button>
    <p>Choose one or more font styles for your logo.
</p>
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {()=>(
          <Form className='w-full'>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {styles.map((item,i)=>{
                return(
                    <div key={i}  onClick={handleSubmit} name="props.data.logoStyle" className='h-24 border-[#000A28] border text-center flex items-center justify-center rounded-lg active:border-black focus:border-black '>
                        <p>{item.title}</p>
                    </div>
                )
              })}
              </div>
          </Form>
      )}
    </Formik>
  </div>
  )
}

export default StepSix