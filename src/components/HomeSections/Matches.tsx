import { useState } from "react";
import { MatchesCard } from "../MatchesCard";
import { MatchesMenu } from "../MatchesMenu";
import { motion } from "framer-motion";
import {
  LOLMatchData,
  ValorantMatchData,
  WildriftMatchData,
} from "../../mocks/Matches/MatchesData";
import { Games, IGames } from "../../mocks/Games/Games";

export const Matches = () => {
  const [selectedGame, setSelectedGame] = useState<IGames | null>(Games[0]);

  return (
    <div className="flex justify-center items-center fade bg-cover bg-center h-[562px]">
      <div className="flex lg:flex-row flex-col justify-between items-center w-full max-w-7xl">
        <div className="w-full">
          <h2 className="text-5xl mb-16 lg:mb-o text-start font-black text-gray-100 ml-6 lg:ml-0">
            UPCOMING <br />
            <span className="text-orange-primary">MATCHES</span>
          </h2>
        </div>
        <div className="flex flex-col w-full gap-2 relative px-6">
          <MatchesMenu
            selectedGame={selectedGame}
            setSelectedGame={setSelectedGame}
          />

          {selectedGame?.name === "Valorant" && (
            <>
              {ValorantMatchData.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <MatchesCard data={match} />
                </motion.div>
              ))}
            </>
          )}
          {selectedGame?.name === "League of Legends" && (
            <>
              {LOLMatchData.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <MatchesCard data={match} />
                </motion.div>
              ))}
            </>
          )}

          {selectedGame?.name === "Wild Rift" && (
            <>
              {WildriftMatchData.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <MatchesCard data={match} />
                </motion.div>
              ))}
            </>
          )}

          <button className="font-bold text-gray-300 absolute text-xs -bottom-6 right-8 z-10">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};
