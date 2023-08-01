import Logo from "../assets/images/logo.png";

// TODO: Update the TSX below to use real data.

export const MatchesCard = () => {
  return (
    <div className="w-96 ">
      <div className="bg-dark-primary/95 w-full h-full border border-orange-400 flex justify-between px-10 py-3 items-center">
        <div className="w-14 flex flex-col justify-center items-center">
          <img src={Logo} alt="Team logo" />
          <p className="font-medium text-lg text-gray-200">KEYPULSE</p>
        </div>
        <div className="text-xl font-bold text-orange-primary">VS</div>
        <div className="w-14 flex flex-col justify-center items-center">
          <img src={Logo} alt="Team logo" />
          <p className="font-medium text-lg text-gray-200">KEYPULSE</p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col text-start pl-5 bg-dark-secondary py-2 w-full pr-2">
          <h2 className="text-neutral-100 font-medium text-md">
            LEAGUE OF LEGENDS
          </h2>
          <p className="text-sm text-left text-neutral-300">
            2023 Championship League
          </p>
        </div>
        <div className="max-w-[120px] bg-orange-600  w-full text-white flex flex-col justify-center items-center py-2">
          <h3 className="font-medium">6:00 PM PDT</h3>
          <p>30/07/2023</p>
        </div>
      </div>
    </div>
  );
};
