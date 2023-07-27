import React from 'react'

function PaymentComplete() {
  return (
    <div className='flex flex-col gap-8 items-center justify-center py-52'>
         <div className="w-52 h-52 bg-[#EBF1F4] rounded-full overflow-hidden p-10">
    <img className="w-full h-full object-cover" src="/assets/done-circle.svg" alt="Image"/>
  </div>
  <h1 className='text-colorThemeDarkVariant font-bold text-xl'>Your order has been placed ! </h1>
        
    </div>
  )
}

export default PaymentComplete