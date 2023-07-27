import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StepEight from './StepEight';
function StepSeven(props) {
  

 const styles = [
    {title:"with icons", src:"/assets/icons1.svg", src2:"/assets/icons2.svg", src3:"/assets/icons4.svg", src4:"/assets/icons3.svg"},
    {title:"without icons"},
]
const handleChange = (item)=>{
  props.data.icon = item
    console.log(item)
    // if(item === "with icons "){
    //     <StepEight/>
    // }
    // if(item === "without icons"){
    // props.next(item , true)
    // }
 }
 const handleSubmit = (vales)=>{
  console.log(vales.icon)
  if(vales.icon == "with icons "){
    props.next(vales)
  }
  else{
    props.next(vales, true)
  }
    
}

  return (
    <div className='items-center text-center flex flex-col md:gap-10 gap-4 relative md:w-6/12 w-full mx-auto' data-aos="fade-left">
    <h1 className='text-colorThemeDarkVariant font-medium md:text-3xl text-lg'>Select Logo Type</h1>
    <button className='absolute right-0' onClick={handleSubmit}>Skip</button>
    <p>Choose your style. Icon-based logos or text-based logos.
</p>
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {()=>(
          <Form className='w-full'>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2   gap-10">
              {styles.map((item,i)=>{
                return(
                    <button key={i} onClick={()=> handleChange(item.title)}  name='props.data.icon'  type='submit' className='relative h-52 bg-[#EBF1F4]   text-left flex  justify-start p-4 rounded-lg active:border-black focus:border-black '>
                      {item.src && <div className='grid-cols-4 grid w-full gap-8'>
                        <img  src={item.src}/>
                        <img  src={item.src2}/>
                        <img  src={item.src3}/>
                        <img  src={item.src4}/>
                        <img  src={item.src4}/>
                        <img  src={item.src3}/>
                        <img  src={item.src2}/>
                        <img  src={item.src}/>
                        </div>}
                        <p className='absolute bottom-2 left-5'>{item.title}</p>
                    </button>
                )
              })}
              </div>
              <div className='relative my-10 md:w-6/12 w-full mx-auto'>
            {/* <butt type="text" id="businessName" name="businessName" placeholder="DIRISE..." className="py-3 px-5 w-full bg-[#EBF1F4]" /> */}
            <button type="submit" className='className="py-5 h-12 px-5 w-full bg-[#EBF1F4]'> Continue
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

export default StepSeven