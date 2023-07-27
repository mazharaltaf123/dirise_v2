import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Values from 'values.js';
import SingleColor from './SingleColor';
import './style.css'

const StepFour = (props) => {
  console.log("PROPS",props)
    const [color, setColor]= useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState( new Values("#FF0000").all(45))
    const [list2, setList2] = useState( new Values("#808080").all(45))
    const [list3, setList3] = useState( new Values("#FFFF00").all(45))
    const [list4, setList4] = useState( new Values("#008000").all(45))
    const [list5, setList5] = useState( new Values("#0000FF").all(45))
    const [list6, setList6] = useState( new Values("#800080").all(45))
    const [list7, setList7] = useState( new Values("#FFC0CB").all(45))
    const [list8, setList8] = useState( new Values("#808080").all(45))
    const handleSubmit = (vales = color)=>{
      if(!props.data.color){
        setError("Please Select one color")
        return
      }
        props.next(vales)
 }
 console.log(props.data)
 const handleColorSubmit = (e)=>{
    e.preventDefault()
    try{
        let colors = new Values(color).all(10)
        console.log(colors)
        setList(colors)
    }catch(err){
        setError(err)
        console.log(err)
    }
 }
 console.log(color)
  return (
    <div className='text-center flex flex-col gap-10 relative  mx-auto bg-[#F9F8FF]' data-aos="fade-left">
        <div className='md:w-6/12 w-full flex items-center flex-col md:gap-10 gap-4 mx-auto'>
    <h1 className='text-colorThemeDarkVariant font-medium md:text-3xl text-xl'>Select color theme</h1>
    <p className='text-sm'>Choose one or more colors for your brand,<br/>
Or you can customize it your self</p>
{error && <h1 className='text-red-500 text-md'>{error}</h1>}
</div>
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {()=>(
         <Form className='w-full'>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full">
    <div className='colorss' name="props.data.color"  onClick={()=> props.data.color = "#FF0000"}>
    <h1 className=' rounded-lg h-16 flex items-center justify-center -mt-4 w-full border border-gray-300'>Red</h1>
     {list.map((color,index)=>{
        return(
               <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                />
        )
                
                
              })}
              </div>
              <div className='colorss' name="props.data.color" onClick={()=>  props.data.color = "#808080"}>
              <h1 className=' rounded-lg h-16 flex items-center justify-center -mt-4 w-full border border-gray-300'>Grey</h1>
     {list2.map((color,index)=>{
        return(
               <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                />
        )
                
                
              })}
              </div>
              <div className='colorss' name="props.data.color" onClick={()=>  props.data.color = "#FFFF00"}>
              <h1 className=' rounded-lg h-16 flex items-center justify-center -mt-4 w-full border border-gray-300'>Yellow</h1>
     {list3.map((color,index)=>{
        return(
               <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                />
        )
                
                
              })}
              </div>
              <div className='colorss' name="props.data.color" onClick={()=>  props.data.color = "#008000"}>
              <h1 className=' rounded-lg h-16 flex items-center justify-center -mt-4 w-full border border-gray-300'>Green</h1>
     {list4.map((color,index)=>{
        return(
               <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                />
        )
                
                
              })}
              </div>
              <div className='colorss' name="props.data.color" onClick={()=>  props.data.color = "#0000FF"}>
                <h1 className=' rounded-lg h-16 flex items-center justify-center -mt-4 w-full border border-gray-300'>Blue</h1>
     {list5.map((color,index)=>{
        return(
               <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                />
        )
                
                
              })}
              </div>
              <div className='colorss' name="props.data.color" onClick={()=>  props.data.color = "#800080"}>
              <h1 className=' rounded-lg h-16 flex items-center justify-center -mt-4 w-full border border-gray-300'>Purple</h1>
     {list6.map((color,index)=>{
        return(
               <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                />
        )
                
                
              })}
              </div>
              <div className='colorss' name="props.data.color" onClick={()=>  props.data.color = "#FFC0CB"}>
              <h1 className=' rounded-lg h-16 flex items-center justify-center -mt-4 w-full border border-gray-300'>Pink</h1>
     {list7.map((color,index)=>{
        return(
               <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                />
        )
                
                
              })}
              </div>
              <div className='colorss' name="props.data.color" onClick={()=>  props.data.color = "#808080"}>
              <h1 className=' rounded-lg h-16 flex items-center justify-center -mt-4 w-full border border-gray-300'>Gray</h1>
     {list8.map((color,index)=>{
        return(
               <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                />
        )
                
                
              })}
              </div>
              </div>
              <div className='relative my-10 md:w-6/12 w-full mx-auto'>
            {/* <butt type="text" id="businessName" name="businessName" placeholder="DIRISE..." className="py-3 px-5 w-full bg-[#EBF1F4]" /> */}
            <button type="submit" className='className="py-5 h-12 px-5 w-full bg-[#EBF1F4] '> Continue
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
    {/* <form onSubmit={handleColorSubmit}>
        <input type='text' value={color} onChange={(e)=> setColor(e.target.value)}/>
        <button type='submit'>Submit</button>
    </form> */}

    
  </div>
  );
};

export default StepFour;