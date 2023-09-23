import { RiTwitterXLine, RiInstagramFill } from "react-icons/ri";

interface PlayerCardProps {
  img: string;
  name: string;
  nickName: string;
  position: string;
  instagram?: string;
  twitter?: string;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  img,
  name,
  nickName,
  position,
  instagram,
  twitter,
}) => {
  return (
    <div className="bg-playerTexture max-w-xs relative shadow-2xl shadow-orange-primary/30 group">
      <div className="px-8 pt-5">
        <img src={img} />
        <div className="absolute top-5 right-5 gap-2 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href={instagram}>
            <RiInstagramFill
              size={32}
              className="hover:text-orange-primary cursor-pointer"
            />
          </a>
          <a href={twitter}>
            <RiTwitterXLine
              size={30}
              className="hover:text-orange-primary cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col p-6 border-t border-orange-primary bg-black/40 font-medium text-lg break-all">
        <h2>{name.toUpperCase()}</h2>
        <h1 className="text-3xl font-bold text-orange-primary">
          {nickName.toUpperCase()}
        </h1>
        <p>{position.toUpperCase()}</p>
      </div>
    </div>
  );
};
