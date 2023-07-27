import Card from "@/Components/home/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="pb-16">
          <div className="md:w-1/3 w-full py-16">
            <h1 className="text-colorThemeDarkVariant text-6xl">
              Dirise-<span className="text-black">Branding</span>
            </h1>
            <h6 className="text-colorThemeSecondary text-2xl text-center my-2 tracking-widest">
              Live Better
            </h6>
          </div>
          <div>
            <p className="text-center text-[#20262C] text-sm md:text-xl tracking-widest font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsu m Ipsum has been <br />
              the industry's Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsu m <br />
              Ipsum has been the industry's Lorem Ipsum is simply
            </p>
          </div>
        </div>
        <div className="pb-10">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div
              data-aos="zoom-in"
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              <Card
                imageSrc="/assets/humanBases.svg"
                title="Human-Based Logo"
                href="/CustomLogoGenerator"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text o"
              />
            </div>
            <div
              data-aos="zoom-in"
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              <Card
                imageSrc="/assets/Dirisebased.svg"
                title="Other Services "
                href="/Services"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text o"
              />
            </div>
            <div
              data-aos="zoom-in"
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              <Card
                imageSrc="/assets/freephoto.svg"
                title="Ai Generator"
                href="/AILogoGenerate"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy text o."
              />
            </div>
          </div>
        </div>

        <div className="text-center items-center pb-10">
          <h1 className="text-colorThemeDarkVariant font-medium tracking-normal text-3xl">
            Dirise<span className="text-black "> Subscription</span>{" "}
          </h1>
          <p className="text-center text-Seconday tracking-widest md:w-1/2 mx-auto mt-10 font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is
            simply dummy text of the printing Lorem Ipsum is simply dummy text
            of the printing and y's Lorem Ipsum is simply dummy text of the
            printing Lorem Ipsum is simply dummy text of the p{" "}
          </p>
          <Link href="/">
            <h1 className="mt-10 text-colorThemelightVariant font-medium">
              Subscribe Now! &gt; &gt; &gt;
            </h1>
          </Link>
        </div>

        <div className="pb-10">
          <h1 className="text-[#000A28] text-center text-3xl font-medium">
            How do i make logo with{" "}
            <span className="text-colorThemeDarkVariant"> Dirise ?</span>{" "}
          </h1>
          <div className="flex flex-wrap -mx-1 lg:-mx-4 mt-10">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 backdrop-blur text-[#20262C] font-light ">
              <p className="backdrop-blur text-[#20262C]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum
                is simply dummy text of the Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsu m Ipsum has
                been the industry's Lorem Ipsum is simply dummy text of the
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsu{" "}
              </p>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 backdrop-blur text-[#20262C] font-light">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum
                is simply dummy text of the Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsu m Ipsum has
                been the industry's Lorem Ipsum is simply dummy text of the
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsu{" "}
              </p>
            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 backdrop-blur text-[#20262C] font-light">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum
                is simply dummy text of the Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsu m Ipsum has
                been the industry's Lorem Ipsum is simply dummy text of the
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsu{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center items-center mb-10">
          <h1 className="text-[#000A28] text-center text-3xl font-medium">
            Sounds like a <span className="text-colorThemeDarkVariant"> plan ! </span>{" "}
          </h1>
          <p className="text-center text-[#20262C]  tracking-widest md:w-4/5  mx-auto mt-10 font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsu m Ipsum
            has been the industry's Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsu m Ipsum has been the
            industry's{" "}
          </p>
          <Link href="/">
            <h1 className="mt-10 text-colorThemelightVariant font-medium">
              Discover Our Packages ! &gt; &gt; &gt;{" "}
            </h1>
          </Link>
        </div>
      </div>
      <div className="bg-colorThemelightVariant p-10 mb-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-[#F5F5F5] text-center md:w-1/3">
            <h1 className="font-medium text-3xl">
              Try Our<span className="text-white"> Ai</span> Generator
            </h1>
            <p className="mt-5 text-justify  font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsu m Ipsum{" "}
            </p>
            <Link href="#">
              <h1 className="mt-5 ">Lorem Ipsum &gt; &gt; </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <img src="/assets/ai.jpg" alt="Logo" className="h-full" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-center items-center mb-10">
          <h1 className="text-[#000A28] text-center text-2xl font-medium">
            Why <span className="text-colorThemeDarkVariant"> Dirise</span> is the No.1
            choice for business{" "}
          </h1>
          <p className="text-center text-Seconday tracking-widest w-4/5  mx-auto mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsu m Ipsum
            has been the industry's Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsu m Ipsum has been the
            industry's{" "}
          </p>
          <Link href="/">
            <h1 className="mt-10 text-colorThemelightVariant font-medium">
              Lorem Ipsum &gt; &gt; &gt;
            </h1>
          </Link>
        </div>
        <div className="text-center items-center">
          <h1 className="text-[#000A28] text-center text-2xl font-medium">
            What are you waiting for?{" "}
          </h1>
          <p className="text-center text-Seconday tracking-widest w-4/5  mx-auto mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsu m Ipsum has been the industry's Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsu m Ipsum has been the industry's Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsu m Ipsum
            has been the industry's Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsu m Ipsum has been the
            industry's{" "}
          </p>
          <Link href="/">
            <h1 className="my-10 text-colorThemelightVariant font-medium">
              Get your logo done now! &gt; &gt; &gt;{" "}
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}
