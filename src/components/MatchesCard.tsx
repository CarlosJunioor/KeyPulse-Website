import Logo from "../assets/images/Logo.png";
import VS from "../assets/images/VS.svg";
import DiagonalLine from "../assets/images/DiagonalLine.svg";

interface MatchData {
  id: number;
  game: string;
  championship: string;
  hour: string;
  date: string;
}

interface MatchesCardProps {
  data: MatchData;
}

// TODO: Update the TSX below to use real data.

export const MatchesCard: React.FC<MatchesCardProps> = ({ data }) => {
  return (
    <div className="w-full shadow-lg shadow-orange-primary/5">
      <div className="w-full h-full bg-texture flex px-16 items-center">
        <div className="w-14 flex flex-col justify-center items-center md:mr-8 mr-4">
          <img src={Logo} alt="Team logo" />
          <p className="font-medium md:text-lg text-gray-200">KEYPULSE</p>
        </div>
        <div className="w-full flex justify-center">
          <img src={DiagonalLine} className="hidden md:inline" />
          <img src={VS} className="md:w-auto w-8 px-auto lg:px-16" />
          <img src={DiagonalLine} className="hidden md:inline" />
        </div>
        <div className="w-14 flex flex-col justify-center items-center md:ml-6 ml-3">
          <img src={Logo} alt="Team logo" />
          <p className="font-medium md:text-lg text-gray-200">KEYPULSE</p>
        </div>
      </div>
      <div className="w-full flex">
        <div className="flex flex-col flex-1 text-start pl-5 bg-dark-secondary py-1 w-full pr-2">
          <h2 className="text-neutral-100 font-medium">{data?.game}</h2>
          <p className="text-sm text-left text-neutral-300 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {data?.championship}
          </p>
        </div>
        <div className="w-[120px] self-end bg-orange-primary text-white flex flex-col justify-center items-center py-1">
          <h3 className="font-medium">{data?.hour}</h3>
          <p>{data?.date}</p>
        </div>
      </div>
    </div>
  );
};
