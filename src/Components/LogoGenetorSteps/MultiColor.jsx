import React, { useEffect, useState } from 'react'
import { rgbToHex } from './utils'
import { useDispatch, useSelector } from 'react-redux';
function MultiColor({rgb, weight, index, hexColor, isLoading}) {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(",")
    const hex = rgbToHex(...rgb)
    const hexcolor = `#${hexColor}`
    const dispatch = useDispatch();
    const form = useSelector((state) => state.form.form);
    console.log(form.color)
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false)
        }, 3000)
        return ()=> clearInterval(timeout)
    })
    if (isLoading) {
      return (
        <div className="bg-gray-200 rounded-lg w-full flex justify-center flex-col  p-2 h-52 shadow-md mb-4 animate-pulse">
          <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      );
    }
  return (
    // <article onClick={()=> console.log(hexcolor)} classNameName={`color ${index > 10  && 'color-light'} rounded-lg h-12 -mt-4`} style={{backgroundColor: `rgb(${bcg})`}}>
    // <p classNameName='h-8 -mt-2'></p>
    // </article>
    
    <div className="w-full  p-2 h-52" >
    <div style={{backgroundColor: `rgb(${bcg})`}} className="items-center flex justify-center rounded-lg shadow-lg p-6 relative h-full text-white text-lg">
        <p>{form.businessName}</p>
  </div>
  </div>
  )
}

export default MultiColor