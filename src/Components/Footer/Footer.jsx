import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" py-8 bg-[#024e70]">
      <div className="container mx-auto flex flex-wrap items-start justify-start py-12 border-borderColor border-t-2 border-b-2 text-MainColor">
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6  mb-8 relative">
          {/* <img src="/images/logo.png" alt="Logo" className="w-20 h-20" /> */}
          <h1 className='-rotate-90 absolute text-white text-5xl top-10 -left-10'>DIRISE</h1>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-8 text-white">
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <ul className='flex flex-col gap-5'>
            <li>
                <Link href=''>
                <h1>Terms & Conditions</h1>
                </Link>
            </li>
            <li>
                <Link href=''>
                <h1>service Policy  </h1>
                </Link>
            </li>
            <li>
                <Link href=''>
                <h1>Payment Policy</h1>
                </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6  mb-8 text-white">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <div className='flex flex-col gap-5'>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 234 567890</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-8 text-white">
          <h2 className="text-lg font-bold mb-4">Learn More</h2>
          <ul className='flex flex-col gap-5'>
            <li>
              <Link href="/services">
                <h1 className=" hover:text-gray-800">About Dirise</h1>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <h1 className=" hover:text-gray-800">Environment</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-8 text-white">
          <h2 className="text-lg font-bold mb-4">Social Media </h2>
          <p>123 Main Street, City, Country</p>     
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-8 text-white">
          <h2 className="text-lg font-bold mb-4">Dirise</h2>
          <p>123 Main Street, City, Country</p>     
        </div>
      </div>
      <footer className="py-4 pb-10 text-center text-white">
      <p className=" text-sm">&copy; 2023 Dirise. All rights reserved.</p>
    </footer>
    </footer>
  );
};

export default Footer