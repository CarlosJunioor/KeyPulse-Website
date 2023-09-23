import { Games } from "../mocks/Games/Games";
import clsx from "clsx";
import { useEffect } from "react";

interface GameSelectProps {
  onSelect: (gameId: number) => void;
  selectedGame: number | null;
}

export const GameSelect: React.FC<GameSelectProps> = ({
  onSelect,
  selectedGame,
}) => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const gameNameFromUrl = searchParams.get("teams");

    if (gameNameFromUrl) {
      const game = Games.find((game) => game.name === gameNameFromUrl);
      if (game) {
        onSelect(game.id);
      }
    }
  }, [onSelect]);

  const handleImageClick = (gameId: number) => {
    onSelect(gameId);
  };

  return (
    <div className="py-2 rounded-lg bg-neutral-900 w-full h-auto flex justify-around items-center">
      {Games.map((game) => (
        <img
          key={game.id}
          src={game.logo}
          alt={game.name}
          className={clsx(
            "object-scale-down brightness-0 invert w-24 h-24 hover:opacity-90 transition-all",
            selectedGame === game.id
              ? "opacity-100"
              : "opacity-50 cursor-pointer"
          )}
          onClick={() => handleImageClick(game.id)}
        />
      ))}
    </div>
  );
};
