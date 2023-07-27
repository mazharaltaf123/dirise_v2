"use client"
import Searchbar from "@/Components/Searchbar/Searchbar";
import Packages from "@/Components/ServicesScreen/Packages";
import React, { useState } from "react";

function Services() {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };
  const services = [
    { title: "Visual Identity" },
    { title: "Marketing &  Advertising " },
    { title: "Social Media  Packages " },
    { title: "UI Graphic Design " },
    { title: "Publication Graphic Design  " },
    { title: "Environmental Graphic Design  " },
    { title: "Art & Illustration  for Graphic Design  " },
    { title: "Motion Graphic Design " },
    { title: "Packaging Graphic  Design " },
  ];
  return (
    <>
    <div className="container mx-auto py-20">
      <h1 className="text-center mb-8 text-colorThemeDarkVariant font-medium 2xl:text-4xl lg:text-xl">Lorem Ipsum is simply</h1>
      <p  className="text-center 2xl:text-2xl lg:text-md mx-auto text-Seconday font-normal">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsu <br/> m Ipsum has been the industry's Lorem Ipsum is
        simply  dummy tLorem Ipsum is simply <br/> dummy text of the printing and
        typesetting industry. Lorem Ipsu m Ipsum has been <br/> the industry's Lorem
        Ipsum is simply dummy t
      </p>
      <div className="my-10">
      <Searchbar/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10">
      {services.map((service, index) => (
        <div key={index} className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
 <div className="md:w-1/3 w-full mt-10 relative">
 <div  className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">Logo Design</h2>
        </div>
        <img src="/assets/Close.svg" alt="" className="absolute top-2 right-2 w-8 cursor-pointer"/>
 </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
    <div onClick={handleCardClick}   className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">Logo Design</h2>
        </div>
    <div onClick={handleCardClick}   className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">Brand Guideline</h2>
        </div>
    <div  onClick={handleCardClick}  className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">Brand Id</h2>
        </div>
    </div>
     {showDetails && <Packages/>}
    <div className="my-10  bg-slate-200 w-4/5 mx-auto h-1"/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
    <div  className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">Ad Design </h2>
        </div>
    <div  className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">Print design </h2>
        </div>
    <div  className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">Menus</h2>
        </div>
    <div  className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">Panners</h2>
        </div>
    <div  className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">Posters</h2>
        </div>
    <div  className=" rounded-lg py-10 items-center flex bg-[#EBF1F4] text-textSecondary font-normal">
          <h2 className="2xl:text-lg font-semibold mb-2 text-center w-44 mx-auto">Infographics</h2>
        </div>
    </div>
    <div className="flex justify-center">
      <img src="/assets/Expand_down.svg" alt="" className="w-20"/>
    </div>
    </div>
    <div className="bg-[#EBF1F4] md:p-10 p-2 mb-10">
        <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="md:w-9/12 w-full">
                 <h1 className="font-medium 2xl:text-3xl text-textSecondary mb-6">Don’t Miss Our News !</h1>
                 <p className="text-textSecondary font-normal 2xl:text-2xl">Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry. Lorem Ipsu m Ipsum has been  text of the <br/> printing and typesetting industry. Lorem Ipsu m Ipsum has been </p>
                 <div className="text-center 2xl:text-lg text-MainColor font-bold mt-5 md:w-1/2 w-full">
                    <h1>Subscribe Now &gt; &gt; &gt;</h1>
                </div>
                </div>
                <div className="md:w-3/12w-full	">
                <img src="/assets/email.svg" alt="Logo" className='' />
                </div>
                 </div>
    </div>
    </>
  );
}

export default Services;
