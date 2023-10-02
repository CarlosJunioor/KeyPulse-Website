import { useState } from "react";
import { GameSelect } from "../components/GameSelect";
import { Games } from "../mocks/Games/Games";
import { PlayerCard } from "../components/PlayerCard";
import PlayerImg from "../mocks/Players/playerExample.png";
import BlueBall from "../assets/images/BlueBall.svg";
import OrangeBall from "../assets/images/orangeBall.svg";

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
    <main className="min-h-screen pt-40 relative">
      <div className="flex justify-center">
        <div className="w-full max-w-md flex justify-center items-center">
          <GameSelect onSelect={handleGameSelect} selectedGame={selectedGame} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-20 gap-6 z-10">
        <PlayerCard
          img={PlayerImg}
          name="Mads Brock-Pedersen"
          nickName="Broxahlol"
          position="Jungler"
        />
        <PlayerCard
          img={PlayerImg}
          name="Mads Brock-Pedersen"
          nickName="Broxahlol"
          position="Jungler"
        />
        <PlayerCard
          img={PlayerImg}
          name="Mads Brock-Pedersen"
          nickName="Broxahlol"
          position="Jungler"
        />
      </div>

      <img src={BlueBall} className="absolute right-0 bottom-0 -z-10" />

      <img src={OrangeBall} className="absolute -top-60 -left-72 -z-10" />
    </main>
  );
};
