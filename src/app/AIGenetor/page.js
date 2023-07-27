import Link from "next/link";
import React from "react";

function AIGenerator() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-center mb-8 text-colorThemeDarkVariant font-medium text-2xl">Generate Logo with AI in 5 Minutes!</h1>
      <p className="text-center mx-auto text-Seconday text:md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsu <br/> m Ipsum has been the industry's Lorem Ipsum is
        simply dummy tLorem Ipsum is simply <br/> dummy text of the printing and
        typesetting industry. Lorem Ipsu m Ipsum has been <br/> the industry's Lorem
        Ipsum is simply dummy t
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-20 my-10">
  <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 text-center">
    <div className=" h-56 rounded-lg bg-[#EBF1F4]"/>
    <Link href="/CustomLogoGenerator">
    <h1 className="mt-2 text-colorThemeDarkVariant font-bold text-xl">Do it yourself</h1>
    </Link>
    <p className="mt-3 font-light text-md text-black">Customize your logo the way <br/> you like <br/>
 with our Ai generator </p>
  </div>

  <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 text-center">
  <div className=" h-56 rounded-lg bg-[#EBF1F4]"/>
  <Link href="/CustomLogoGenerator">
  <h1 className="mt-2 text-colorThemeDarkVariant font-bold text-xl">Ai by professional </h1>
  </Link>
    <p className="mt-3 font-light text-md text-black">let our professionals <br/>
do the work for you! </p>     
  </div>
</div>
    </div>
  );
}

export default AIGenerator;
