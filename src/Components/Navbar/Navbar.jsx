import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4   mx-auto w-100 bg-[#024e70]">
        <div className='container mx-auto flex items-center justify-between text-white'>
      <div className="logo">
        <Link href="/">
        <h1 className='text-white font-normal text-xl'>DIRISE</h1>
        </Link>
      </div>
      <div className="links flex justify-between gap-32">
        <div className='flex text-sm text-white'>
        <Link href="/Pricing">
          <h1 className="mr-4 text-sm">Pricing </h1>
        </Link>
        <Link href="/about">
          <h1 className="mr-4">Ai Generator </h1>
        </Link>
        <Link href="/contact">
          <h1>Subscribe! </h1>
        </Link>
        </div>
        <div className='flex text-sm text-white'>
        <Link href="/">
          <h1 className="mr-4 text-sm">Lang </h1>
        </Link>
        <Link href="/Login">
          <h1 className="mr-4 text-sm">Sign in </h1>
        </Link>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar