import { useState, useEffect } from "react";
import { GameSelect } from "../components/GameSelect";
import { Games } from "../mocks/Games/Games";
import { PlayerCard } from "../components/PlayerCard" ;import BlueBall from"../assets/images/BlueBall.svg";
import OrangeBall from "../assets/images/orangeBall.svg";
import axios from "axios";
import PlayerImg from "../mocks/Players/playerExample.png";

interface SocialMedia {
  Name: string;
  URL: string;
}
interface Player {
  MemberId: number;
  Photo: string;
  Name: string;
  Nickname: string;
  Position: string;
  Role: string;
  SocialMediaResponse: SocialMedia[];
}

export const Teams = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [selectedGameName, setSelectedGameName] = useState<string | null>(null);
  const [team, setTeam] = useState<Player[]>([]);
  

  const searchParams = new URLSearchParams(window.location.search);
  let tempSelectedGameName = searchParams.get("teams");

  if (!tempSelectedGameName && Games.length > 0) {
    tempSelectedGameName = Games[0].name;
    searchParams.set("teams", tempSelectedGameName);
    window.history.replaceState({}, "", `?${searchParams.toString()}`);
  }

  const handleGameSelect = (gameId: number) => {
    const gameName = Games.find((game) => game.id === gameId)?.name || "";
    searchParams.set("teams", gameName);
    window.history.pushState({}, "", `?${searchParams.toString()}`);
    setSelectedGame(gameId);
    setSelectedGameName(gameName);
  };

  const handleGameExists = ()  => {
    if(team)
    {
      return (
        team.map((player) => (
          <PlayerCard
            key={player.MemberId}
            img={player.Photo}
            name={player.Name}
            nickName={player.Nickname}
            role={player.Role}
            position={player.Position? player.Position : ''}
            instagram={player.SocialMediaResponse? player.SocialMediaResponse.find(sm => sm.Name === 'Instagram')?.URL : ''}
            twitter={player.SocialMediaResponse? player.SocialMediaResponse.find(sm => sm.Name === 'X')?.URL : ''}
          />
        ))
      )
    }
    return <h1>Error: Game not found</h1>
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedGameName) {
          const response = await axios.get(
            `https://personal-e2jusrpr.outsystemscloud.com/KeyPulse_API/rest/keypulseget/GetKeypulseTeam?GameName=${selectedGameName}`,
            {
              headers: {
                'xclientsecret': 'teste-keypulse',
              },
            }
          );
          const teamWithImages: Player[] = response.data?.KeypulseTeams?.map((player: Player) => ({
            ...player,
            Photo: player.Photo ? `data:image/png;base64,${player.Photo}` : PlayerImg,// Convert binary data to Base64
          }));         
          setTeam(teamWithImages)
        }
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      }
    };

    fetchData();
  }, [selectedGameName]);


  return (
    <main className="min-h-screen pt-40 relative">
      <div className="flex justify-center">
        <div className="w-full max-w-md flex justify-center items-center">
          <GameSelect onSelect={handleGameSelect} selectedGame={selectedGame} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-20 gap-6 z-10">
        {handleGameExists()}
      </div>

      <img src={BlueBall} className="absolute right-0 bottom-0 -z-10" />
      <img src={OrangeBall} className="absolute -top-60 -left-72 -z-10" />
    </main>
  );
};
