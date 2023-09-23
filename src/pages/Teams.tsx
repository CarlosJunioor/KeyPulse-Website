import { useState } from "react";
import { GameSelect } from "../components/GameSelect";
import { Games } from "../mocks/Options/Games";
import { PlayerCard } from "../components/PlayerCard";
import PlayerImg from "../mocks/Players/playerExample.png";

export const Teams = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const searchParams = new URLSearchParams(window.location.search);
  let selectedGameName = searchParams.get("teams");

  if (!selectedGameName && Games.length > 0) {
    selectedGameName = Games[0].name;
    searchParams.set("teams", selectedGameName);
    window.history.replaceState({}, "", `?${searchParams.toString()}`);
  }

  const handleGameSelect = (gameId: number) => {
    searchParams.set(
      "teams",
      Games.find((game) => game.id === gameId)?.name || ""
    );
    window.history.pushState({}, "", `?${searchParams.toString()}`);
    setSelectedGame(gameId);
  };

  return (
    <main className="min-h-screen pt-40">
      <div className="flex justify-center">
        <div className="w-full max-w-md flex justify-center items-center">
          <GameSelect onSelect={handleGameSelect} selectedGame={selectedGame} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-20">
        <PlayerCard
          img={PlayerImg}
          name="Mads Brock-Pedersen"
          nickName="Broxahlol"
          position="Jungler"
        />
      </div>
    </main>
  );
};
