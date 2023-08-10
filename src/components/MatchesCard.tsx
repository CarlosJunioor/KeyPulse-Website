import Logo from "../assets/images/logo.png";
import VS from "../assets/images/VS.svg";
import DiagonalLine from "../assets/images/DiagonalLine.svg";

// TODO: Update the TSX below to use real data.

export const MatchesCard = () => {
  return (
    <div className="md:w-[420px] w-80 shadow-lg shadow-orange-primary/5">
      <div className="w-full h-full bg-texture flex justify-between px-10  items-center">
        <div className="w-14 flex flex-col justify-center items-center md:mr-8 mr-4">
          <img src={Logo} alt="Team logo" />
          <p className="font-medium md:text-lg text-gray-200">KEYPULSE</p>
        </div>
        <div className="w-full flex justify-between">
          <img src={DiagonalLine} className="" />

          <img src={VS} className="md:w-auto w-8" />
          <img src={DiagonalLine} className="" />
        </div>
        <div className="w-14 flex flex-col justify-center items-center md:ml-6 ml-3">
          <img src={Logo} alt="Team logo" />
          <p className="font-medium md:text-lg text-gray-200">KEYPULSE</p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col text-start pl-5 bg-dark-secondary py-1 w-full pr-2">
          <h2 className="text-neutral-100 font-medium">LEAGUE OF LEGENDS</h2>
          <p className="text-sm text-left text-neutral-300">
            2023 Championship League
          </p>
        </div>
        <div className="max-w-[120px] bg-orange-primary  w-full text-white flex flex-col justify-center items-center py-1">
          <h3 className="font-medium">6:00 PM PDT</h3>
          <p>30/07/2023</p>
        </div>
      </div>
    </div>
  );
};
