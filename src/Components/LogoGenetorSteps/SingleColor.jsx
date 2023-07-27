import React, { useEffect, useState } from 'react'
import { rgbToHex } from './utils'
import { useDispatch } from 'react-redux';
function SingleColor({rgb, weight, index, hexColor}) {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(",")
    const hex = rgbToHex(...rgb)
    const hexcolor = `#${hexColor}`
    const dispatch = useDispatch();

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false)
        }, 3000)
        return ()=> clearInterval(timeout)
    })
  return (
    <article onClick={()=> console.log(hexcolor)} className={`color ${index > 10  && 'color-light'} rounded-lg h-12 -mt-4`} style={{backgroundColor: `rgb(${bcg})`}}>
    <p className='h-8 -mt-2'></p>
    </article>
  )
}

export default SingleColor