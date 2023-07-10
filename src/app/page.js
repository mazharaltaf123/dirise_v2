import Card from '@/Components/home/Card'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container mx-auto '>
    <div className='pb-16'>
   <div className='w-1/3 py-16'>
    <h1 className='text-MainColor text-6xl'>Dirise-<span className='text-black'>Branding</span></h1>
    <h6 className='text-black text-2xl text-center my-2 tracking-widest'>Live Better</h6>
   </div>
   <div>
    <p className='text-center text-[#20262C] text-xl tracking-widest'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been <br/>the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m  <br/>Ipsum has been the industry's Lorem Ipsum is simply</p>
   </div>
   </div>
   <div className='pb-10'>
   <div className="flex gap-4 w-full">
    <div className='w-1/3'>
      <Card
        imageSrc="/assets/humanBases.svg"
        title="Human-Based Logo"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text o"
      />
      </div>
      <div className='w-1/3'>
      <Card
        imageSrc="/assets/Dirisebased.svg"
        title="Other Services "
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text o"
      />
      </div>
      <div className='w-1/3'>
      
      <Card
        imageSrc="/assets/freephoto.svg"
        title="Ai Generator"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text o."
      />
        
        </div>
    </div>
   </div>

   <div className='text-center items-center pb-10'>
             <h1 className='text-MainColor tracking-normal text-3xl'>Dirise<span className='text-black '>Subscription</span>  </h1>
             <p className='text-center text-Seconday tracking-widest w-1/2 mx-auto mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing and y's Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the p </p>
  <Link href="/about"  >
  <h1 className='mt-10 text-MainColor font-medium'>Subscribe Now! </h1>
  </Link>
   </div>

   <div className='pb-10'>
       <h1 className='text-[#000A28] text-center text-2xl font-medium'>How do i make logo with <span className='text-MainColor'> Dirise ?</span> </h1>
       <div className='flex gap-4 mt-10'>
       <div className='w-1/3 backdrop-blur text-[#20262C] font-light'>
      <p className='backdrop-blur text-[#20262C]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu </p>
      </div>
       <div className='w-1/3 backdrop-blur text-[#20262C] font-light'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu </p>
      </div>
       <div className='w-1/3 backdrop-blur text-[#20262C] font-light'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu </p>
      </div>
       </div>
   </div>

   
   <div className='text-center items-center mb-10'>
       <h1 className='text-[#000A28] text-center text-2xl font-medium'>Sounds like a <span className='text-MainColor'> plan ! </span> </h1>
       <p className='text-center text-Seconday tracking-widest w-4/5  mx-auto mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's </p>
       <Link href="/about"  >
  <h1 className='mt-10 text-MainColor font-medium'>Discover Our Packages !  </h1>
  </Link>
   </div>

   <div className='bg-backgroundSky p-10 mb-10'>
       <div className='text-[#F5F5F5] text-center w-1/3'>
        <h1 className='font-medium text-3xl'>Try Our<span className='text-MainColor'> Ai</span> Generator</h1>
       <p className='mt-5 text-justify text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum </p>
       <Link href="#">
       <h1 className='mt-5'>Lorem Ipsum</h1>
       </Link>
       </div>
   </div>

   <div className='text-center items-center mb-10'>
       <h1 className='text-[#000A28] text-center text-2xl font-medium'>Why <span className='text-MainColor'> Dirise</span>  is the No.1 choice for business </h1>
       <p className='text-center text-Seconday tracking-widest w-4/5  mx-auto mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's </p>
       <Link href="/about"  >
  <h1 className='mt-10 text-MainColor font-medium'>Lorem Ipsum  </h1>
  </Link>
   </div>
   <div className='text-center items-center'>
       <h1 className='text-[#000A28] text-center text-2xl font-medium'>What are you waiting for? </h1>
       <p className='text-center text-Seconday tracking-widest w-4/5  mx-auto mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's </p>
       <Link href="/about"  >
  <h1 className='mt-10 text-MainColor font-medium'>Get your logo done now!  </h1>
  </Link>
   </div>
   </div>
  )
}
