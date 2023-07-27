import Link from "next/link";
import React from "react";

function PaymentMethod() {
  return (
    <div className="container mx-auto py-8">
      <div className="">
        <h1 className="mb-2 text-colorThemeDarkVariant text-lg font-medium">
          Choose your payment method
        </h1>
        <div className="flex gap-4 flex-wrap">
          <img src="/assets/visa.svg" alt="Logo" className="md:w-16 w-12" />
          <img src="/assets/mastercard.svg" alt="Logo" className="md:w-16 w-12" />
          <img src="/assets/apple-pay.svg" alt="Logo" className="md:w-16 w-12" />
          <img src="/assets/paypal.svg" alt="Logo" className="md:w-16 w-12" />
          <img src="/assets/Expand_right.svg" alt="Logo" className="md:w-12 w-8" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
          <div>
            <div className="py-10 border-b border-[#000000BF]">
              <div>
                <h1 className="text-Seconday font-medium text-xl">
                  Cardholder Name
                </h1>
                <input
                  type="text"
                  className=" appearance-none border border-[#000A28] bg-transparent mt-2 text-center input-custom rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="xxx-xxx-xxx"
                />
                <h6 className="mt-2 text-sm font-light">
                  Enter your name as it’s written on the card{" "}
                </h6>
              </div>
              <div className="mt-5">
                <h1 className="text-Seconday font-medium text-xl">
                  Card number
                </h1>
                <input
                  type="text"
                  className=" appearance-none border border-[#000A28] bg-transparent mt-2 text-center input-custom rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="xxx-xxx-xxx"
                />
              </div>
              <div className="flex gap-5">
                <div className="mt-5 w-1/2">
                  <h1 className="text-Seconday font-medium text-xl">
                    Expiry Date{" "}
                  </h1>
                  <input
                    type="text"
                    className=" appearance-none border border-[#000A28] bg-transparent mt-2 text-center input-custom rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="MM / YY"
                  />
                </div>
                <div className="mt-5 w-1/2">
                  <h1 className="text-Seconday font-medium text-xl">
                    Security code
                  </h1>
                  <input
                    type="text"
                    className=" appearance-none border border-[#000A28] bg-transparent mt-2 text-center input-custom rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="CCV"
                  />
                </div>
              </div>
            </div>
            <div className="py-8 ">
              <h2 className="font-normal text-black text-lg mb-4">
                By checking out:
              </h2>
              <div className="text-Seconday font-light flex-col gap-4 flex">
                <p>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsu m Ipsum has been the industry's Lorem Ipsum i
                </p>

                <p>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsu m Ipsum has been the industry's Lorem Ipsum i
                </p>

                <p>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsu m Ipsum has been the industry's Lorem Ipsum i
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" my-1 px-1 justify-self-center  bg-pricingcard rounded-lg p-10 px-16">
              <h1 className="py-4 border-b border-[#000000BF] text-black text-3xl font-medium mb-2">
                Payment Summary{" "}
              </h1>
              <div className="py-8 border-b border-[#000000BF]">
                <h2 className="font-normal text-black text-lg mb-4">
                  your payment includes:
                </h2>
                <div className="text-Seconday font-light flex-col gap-4 flex">
                  <p>
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsu m Ipsum has been the industry's Lorem Ipsum i
                  </p>

                  <p>
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsu m Ipsum has been the industry's Lorem Ipsum i
                  </p>

                  <p>
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsu m Ipsum has been the industry's Lorem Ipsum i
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-5 font-bold text-2xl">
                <h1>Total</h1>
                <h1>US $50</h1>
              </div>
            </div>
            <div className="mt-5 bg-[#EBF1F4] rounded-lg px-16 p-10">
              <h1 className="font-bold text-2xl mb-4">
                Save %20 by <span className="text-colorThemeDarkVariant"> Subscribe!</span>{" "}
              </h1>
              <p className="mb-4 text-Seconday font-light">
                dummy text of the printing and typesetting industry. Lorem
                Ipdummy text of the printing and typesetting industry. Lorem Ip
              </p>
              <div className="text-center text-colorThemelightVariant font-bold">
                <h1>Subscribe Now &gt; &gt; &gt;</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-b border-[#000000BF]">
          <div className="flex justify-between font-bold">
            <h1>Subtotal</h1>
            <h1>US $50</h1>
          </div>
          <div className="flex justify-between font-light text-sm">
            <h1>discount for subscribe </h1>
            <h1>-US $10</h1>
          </div>
        </div>
        <div className="flex justify-between font-bold mt-5">
          <h1>Total</h1>
          <h1>US $50</h1>
        </div>
        <div className="flex w-full gap-4  justify-center  mt-10">
          <div className="w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 bg-pricingcard rounded-lg p-4 text-center text-black px-16">
            <Link href="/PaymentComplete">
              <h1 className="font-medium">Pay US $40</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
