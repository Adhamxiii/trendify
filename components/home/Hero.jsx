import { ArrowRight } from "lucide-react";
import Infobar from "./Infobar";

const Hero = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-[70%_30%] gap-5 pt-[170px] px-[30px] max-w-full bg-[#f9f9f9] max-md:grid-cols-[1fr] max-md:pt-[140px] max-md:pb-[20px]">
          <div className="relative group overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 mix-blend-multiply transition-opacity group-hover:opacity-75"></div>

            <div className="flex items-center justify-start text-black rounded-[10px] h-[400px] gap-5 bg-[url('/home-bg.png')] bg-cover bg-center bg-no-repeat p-10 object-cover object-center transform group-hover:scale-105 transition-transform duration-700">
              <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center">
                <h3 className="text-[18px] mb-[5px] capitalize">
                  lifestyle collection
                </h3>
                <h1 className="text-[38px] mb-[10px]">MEN</h1>
                <h2 className="text-[24px] mb-[10px] uppercase">
                  sale up to <span className="text-[#730220] ">30% off</span>
                </h2>
                <p className="text-[16px] mb-[10px]">
                  Get Free Shiping on orders over $99.00
                </p>
                <button className="inline-flex items-center space-x-2 text-[16px] bg-[#730220] text-white px-[20px] py-[10px] rounded-[5px] cursor-pointer hover:bg-[#730220]/80 transition-all duration-300 ease-in-out border-none outline-none mt-5 hover:translate-x-2 group-hover:shadow-lg">
                  <span>Shop Now</span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5">
            <div className="relative group overflow-hidden rounded-3xl ">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-pink-900/80 mix-blend-multiply transition-opacity group-hover:opacity-75"></div>

              <div className="bg-cover bg-center bg-no-repeat bg-[url('/home-bg2.png')] h-[190px] rounded-[10px] p-5 text-black flex flex-col items-center justify-center rounded-[10px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700">
                <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center">
                  <h4 className="text-[18px] capitalize">NEW ARRIVALS</h4>
                  <h5 className="text-[24px] capitalize">
                    SUMMER SALE 20% OFF
                  </h5>
                  <button className="inline-flex items-center space-x-2 text-[16px] bg-[#730220] text-white px-[20px] py-[10px] rounded-[5px] cursor-pointer hover:bg-[#730220]/80 transition-all duration-300 ease-in-out border-none outline-none mt-5 hover:translate-x-2 transition-transform group-hover:shadow-lg">
                    <span>Shop Now</span>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl ">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 mix-blend-multiply transition-opacity group-hover:opacity-75"></div>
              <div className="bg-cover bg-center bg-no-repeat bg-[url('/home-bg3.jpg')] h-[190px] rounded-[10px] p-5 text-black flex flex-col items-center justify-center rounded-[10px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700">
                <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center">
                  <h4 className="text-[18px] capitalize text-blue-200 text-sm font-medium tracking-wider uppercase mb-2 inline-block">
                    gaming 4k
                  </h4>
                  <h5 className="text-[24px] capitalize text-white">
                    DESKTOPS & LAPTOPS
                  </h5>
                  <button className="inline-flex items-center space-x-2 text-[16px] bg-[#730220] text-white px-[20px] py-[10px] rounded-[5px] cursor-pointer hover:bg-[#730220]/80 transition-all duration-300 ease-in-out border-none outline-none mt-5 hover:translate-x-2 transition-transform group-hover:shadow-lg ">
                    <span>Shop Now</span>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[30px] py-5">
          {/* <div className="flex items-center justify-around p-4 rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-2 text-left">
            <FaTruckFast className="text-[32px] text-blue-500 mt-[15px]" />
            <div>
              <h4 className="text-[14px] font-medium">Free delivery</h4>
              <p className="text-[12px] text-gray-500">start from $10</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-left">
            <GiPiggyBank className="text-[32px] text-blue-500" />
            <div>
              <h4 className="text-[14px] font-medium">Money Guarantee</h4>
              <p className="text-[12px] text-gray-500">7 Days back</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-left">
            <FaUndoAlt className="text-[32px] text-blue-500" />
            <div>
              <h4 className="text-[14px] font-medium">365 Days</h4>
              <p className="text-[12px] text-gray-500">For free return</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-left">
            <IoMdAlarm className="text-[32px] text-blue-500" />
            <div>
              <h4 className="text-[14px] font-medium">Payment</h4>
              <p className="text-[12px] text-gray-500">Secure system</p>
            </div>
          </div>
        </div> */}
          <Infobar />
        </div>
      </div>
    </>
  );
};

export default Hero;
