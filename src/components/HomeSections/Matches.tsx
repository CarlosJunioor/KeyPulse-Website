import { useState, useEffect } from "react";
import { MatchesCard } from "../MatchesCard";
import { MatchesMenu } from "../MatchesMenu";
import { motion } from "framer-motion";
import { Games, IGames } from "../../mocks/Games/Games";
import Logo from "../../assets/images/Logo.png";

interface Match {
  Id: string;
  TeamHome: number;
  TeamHomeLabel: string;
  TeamVisitor: number;
  TeamVisitorLabel: string;
  PhotoVisitor: string;
  PhotoHome: string;
  DateTime: string;
  URL: string;
}

export const Matches = () => {
  const [selectedGame, setSelectedGame] = useState<IGames | null>(Games[0]);
  const [matchesData, setMatchesData] = useState<Array<{ 
    id: string;
    game: string; 
    championship: string; 
    hour: string; 
    date: string; 
    teamVisitorLabel:string;
    teamHomeLabel:string;
    photoHome: string;
    photoVisitor: string;
    url: string; // Add URL to match data
  }>>([]);
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          `https://personal-e2jusrpr.outsystemscloud.com/KeyPulse_API/rest/keypulseget/GetMatchList?gamename=${selectedGame?.name}&teamname=Keypulse`,
          {
            headers: {
              'xclientsecret': 'teste-keypulse',
            },
          }
        );
        const data = await response.json();

        if (data.Error && !data.Error.IsSuccess) {
          console.error(data.Error.ErrorMessage);
          setMatchesData([]);
          return;
        }

        const transformedMatches = data.Match.map((match: Match) => ({
          id: match.Id,
          game: selectedGame?.name || '', 
          championship: "",
          teamVisitorLabel: match.TeamVisitorLabel, 
          teamHomeLabel: match.TeamHomeLabel,
          photoVisitor: match.PhotoVisitor ? `data:image/png;base64,${match.PhotoVisitor}` : Logo, 
          photoHome: match.PhotoHome ? `data:image/png;base64,${match.PhotoHome}` : Logo, 
          hour: new Date(match.DateTime).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true }),
          date: new Date(match.DateTime).toLocaleDateString("en-US"),
          url: match.URL // Assign URL from API to match data
        }));

        setMatchesData(transformedMatches);
      } catch (error) {
        console.error("Failed to fetch matches data:", error);
        setMatchesData([]); // Also clear the list in case of fetch error
      }
    };

    if (selectedGame) {
      fetchMatches();
    }
  }, [selectedGame]);

  return (
    <div className="flex justify-center items-center fade bg-cover bg-center min-h-[562px] h-full">
      <div className="flex lg:flex-row flex-col justify-between items-center w-full max-w-7xl">
        <div className="w-full">
          <h2 className="text-5xl mb-16 lg:mb-0 text-start font-black text-gray-100 ml-6 lg:ml-0">
            UPCOMING <br />
            <span className="text-orange-primary">MATCHES</span>
          </h2>
        </div>
        <div className="flex flex-col w-full gap-2 relative px-6">
          <MatchesMenu
            selectedGame={selectedGame}
            setSelectedGame={setSelectedGame}
          />
          {matchesData.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <a href={match.url} target="_blank" rel="noopener noreferrer">
                <MatchesCard 
                  game={match.game}
                  championship={match.championship}
                  teamvisitor={match.teamVisitorLabel}
                  teamhome={match.teamHomeLabel}
                  hour= {match.hour}
                  date= {match.date}
                  imgHome={match.photoHome}
                  imgVisitor={match.photoVisitor}
                />
              </a>
            </motion.div>
          ))}
          <button className="font-bold text-gray-300 absolute text-xs -bottom-6 right-8 z-10">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};
