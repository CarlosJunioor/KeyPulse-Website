import VS from "../assets/images/VS.svg";
import DiagonalLine from "../assets/images/DiagonalLine.svg";

interface MatchData {
  game: string;
  championship: string;
  teamvisitor: string;
  teamhome: string;
  hour: string;
  date: string;
  imgHome: string;
  imgVisitor: string;
}

export const MatchesCard: React.FC<MatchData> = ({
  game,
  championship,
  teamhome,
  teamvisitor,
  hour,
  date,
  imgVisitor,
  imgHome
}) => {
  return (
    <div className="w-full shadow-lg shadow-orange-primary/5">
      <div className="w-full h-full bg-texture flex px-16 items-center">
        <div className="w-14 flex flex-col justify-center items-center md:mr-8 mr-4">
          <img src={imgHome} alt="Team logo" />
          <p className="font-medium md:text-lg text-gray-200">{teamhome.toUpperCase()}</p>
        </div>
        <div className="w-full flex justify-center">
          <img src={DiagonalLine} className="hidden md:inline" />
          <img src={VS} className="md:w-auto w-8 px-auto lg:px-16" />
          <img src={DiagonalLine} className="hidden md:inline" />
        </div>
        <div className="w-14 flex flex-col justify-center items-center md:ml-6 ml-3">
          <img src={imgVisitor} alt="Team logo" />
          <p className="font-medium md:text-lg text-gray-200">{teamvisitor.toUpperCase()}</p>        
        </div>
      </div>
      <div className="w-full flex h-full">
        <div className="flex flex-col flex-1 text-start pl-5 bg-dark-secondary py-1 w-full pr-2">
          <h2 className="text-neutral-100 font-medium">{game}</h2>
          <p className="text-sm text-left text-neutral-300 overflow-hidden overflow-ellipsis">
            {championship}
          </p>
        </div>
        <div className="w-[120px] bg-orange-primary text-white flex flex-col justify-center items-center">
          <h3 className="font-medium">{hour}</h3>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};