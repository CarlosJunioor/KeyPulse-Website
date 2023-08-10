import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-dark-primary/95 w-full h-full border-t border-neutral-800">
      <div className="flex md:px-20 h-64 items-center justify-center md:justify-between">
        <div className="footer-stroke text-6xl lg:text-8xl font-bold pl-2 lg:pl-16 md:inline-block hidden">
          FOLLOW US
        </div>
        <div className="bg-dark-secondary w-96 h-full xl:mr-52 md:mr-10 flex flex-col justify-center items-center gap-6">
          <h2 className="text-2xl font-medium text-white">
            Join our discord community!
          </h2>
          <button className="bg-gray-50 transition-all text-neutral-900 rounded-md py-2 px-6 text-lg font-medium hover:bg-orange-primary">
            Join Our Discord
          </button>
          <div className="text-white flex gap-6">
            <RiInstagramFill
              size={32}
              className="hover:text-orange-primary cursor-pointer transition-all"
            />
            <BsTwitter
              size={32}
              className="hover:text-orange-primary cursor-pointer transition-all"
            />
            <FaTiktok
              size={32}
              className="hover:text-orange-primary cursor-pointer transition-all"
            />
          </div>
        </div>
      </div>
      <div className="bg-dark-secondary h-9 w-full text-gray-100 text-start flex items-center justify-center md:justify-start">
        <p className="md:pl-36 text-sm ">
          © 2023 Keypulse Esports Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
