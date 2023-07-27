
"use client"
import SingleColor from '@/Components/LogoGenetorSteps/SingleColor';
import React, { useEffect, useState } from 'react'
import Values from 'values.js';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import MultiColor from '@/Components/LogoGenetorSteps/MultiColor';

function StepNine() {
    const [color, setColor]= useState('')
    const handleSubmit = (vales = color)=>{
        props.next(vales)
 }
 const form = useSelector((state) => state.form.form);
 console.log(form)
 const [isLoading, setIsLoading] = useState(true);
 const [ list, setList] = useState(new Values(form.color).all(10).slice(1,-1))

 useEffect(() => {
  const delay = 1000; // Delay between each card animation in milliseconds

  const animateCards = async () => {
    setIsLoading(true); // Set loading state before animation

    // for (let i = 0; i < cards.length; i++) {
    //   await new Promise((resolve) => setTimeout(resolve, delay));
    //   setCardVisible((prevVisible) => [...prevVisible, true]);
    // }
  setTimeout(()=>{
    setIsLoading(false);
  }, 5000)
    // Set loading state after animation
  };

  animateCards();

  // Clean up the interval when the component unmounts
  // return () => {
  //   setCardVisible([]); // Reset card visibility
  // };
}, []);
 console.log(list)
  return (
    <div className='items-center text-center flex flex-col mx-auto gap-5 relative container mx-auto py-20' data-aos="fade-left">
   <div className='items-end flex self-end gap-2'>
   <img src='/assets/color-picker.svg' alt='' className='bg-[#EBF1F4] p-2 w-12' />
    <img src='/assets/Favorite.svg' alt='' className='bg-[#EBF1F4] p-2 w-12' />
   </div>
 

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full">
        {list?.map((color,index)=>{
            console.log(color)
            return(
              <Link key={index} href={`/exploreDetails/${index}`}>
                <MultiColor
                isLoading={isLoading}
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                />
                </Link>
            )
        })}
        </div>
        <div className='flex w-full gap-4  justify-center  mt-10'>
              
              <div className='w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 bg-pricingcard rounded-lg p-4 text-center text-MainColor px-16'>
                <h1 className='font-medium'>get your logo</h1>
                

              </div>
              
        </div>
    </div>
  )
}

export default StepNine