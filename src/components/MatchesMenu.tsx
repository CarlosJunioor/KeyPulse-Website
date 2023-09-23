import { motion } from "framer-motion";
import { Games, IGames } from "../mocks/Games/Games";

interface IMatchesMenuProps {
  selectedGame: IGames | null;
  setSelectedGame: React.Dispatch<React.SetStateAction<IGames | null>>;
}

export const MatchesMenu = ({
  selectedGame,
  setSelectedGame,
}: IMatchesMenuProps) => {
  return (
    <ul className="menu menu-horizontal bg-dark-50 p-0 w-full">
      {Games.map((game) => (
        <motion.li
          key={game.id}
          animate
          className={`hover:bg-neutral-800 cursor-pointer p-2 border-orange-primary transition-all h-auto relative font-semibold text-lg items-center flex-1  ${
            selectedGame?.id === game.id
              ? "bg-neutral-800 border-b-2 text-white "
              : "text-gray-400"
          }`}
          onClick={() => setSelectedGame(game)}
        >
          {game.name}
        </motion.li>
      ))}
    </ul>
  );
};
