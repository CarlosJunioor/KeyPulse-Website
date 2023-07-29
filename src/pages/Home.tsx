import { GamesCard } from "../components/GamesCard";
import { MatchesCard } from "../components/MatchesCard";
import Valorant from "../assets/images/valorant-banner.png";
import LeagueOfLegends from "../assets/images/Lol-banner.png";
import WildRift from "../assets/images/WildRift-banner.png";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [hoverColor, setHoverColor] = useState("");

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <>
      <main className="pt-20">
        <div className="flex flex-col justify-center items-center gap-6 w-auto">
          <h2 className="text-2xl font-medium text-gray-700 mb-2">
            UPCOMING MATCHES
          </h2>
          <MatchesCard />
          <MatchesCard />
          <button className="font-medium text-gray-500">VIEW MORE</button>
        </div>
      </main>
      <section className="pt-20 pb-24 flex justify-center flex-col items-center relative overflow-hidden w-full min-h-screen h-full">
        <div className="max-w-7xl w-full overflow-hidden relative h-full">
          <h1 className="font-bold text-3xl text-gray-800">CHECK OUR TEAMS</h1>
          <p className="text-gray-600 mb-20">Discover Our Championship Teams</p>
          <motion.div
            className="riscado text-[350px] flex-col font-bold absolute opacity-5 flex -top-32"
            style={{
              x,
              color: hoverColor,
              filter: hoverColor
                ? `drop-shadow(5px 5px 5px ${hoverColor})`
                : "none",
            }}
          >
            <motion.div className="flex flex-col">
              <motion.p>{"KEYPULSEESPORTS"}</motion.p>

              <motion.p className="-mt-52 mr-80">{"KEYPULSEESPORTS"}</motion.p>
            </motion.div>
          </motion.div>

          <div className="flex gap-16 justify-center flex-wrap pb-10">
            <motion.div
              className="rounded-md"
              whileHover={{
                boxShadow: "0 4px 18px #ff4655",
              }}
              onHoverStart={() => setHoverColor("#ff4655")}
              onHoverEnd={() => setHoverColor("")}
            >
              <GamesCard image={Valorant} alt="Valorant Team" />
            </motion.div>
            <motion.div
              className="rounded-md"
              whileHover={{
                boxShadow: "0 4px 18px #d3ac21",
              }}
              onHoverStart={() => setHoverColor("#d3ac21")}
              onHoverEnd={() => setHoverColor("")}
            >
              <GamesCard image={LeagueOfLegends} alt="League of legends Team" />
            </motion.div>
            <motion.div
              className="rounded-md"
              whileHover={{
                boxShadow: "0 4px 18px #5b54a4",
              }}
              onHoverStart={() => setHoverColor("#5b54a4")}
              onHoverEnd={() => setHoverColor("")}
            >
              <GamesCard image={WildRift} alt="Wild Tift Team" />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen pt-14">
        <h1 className="font-bold text-3xl text-gray-800">JERSEY COLLECTIONS</h1>
        <p className="text-gray-600 mb-20">
          Ignite the Fashion. Amplify the Game
        </p>
      </section>
    </>
  );
}
