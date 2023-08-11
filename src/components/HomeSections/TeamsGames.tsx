import { GamesCard } from "../GamesCard";
import Valorant from "../../assets/images/Valorant.jpg";
import Bright from "../../assets/images/bright.svg";
import BrightWhite from "../../assets/images/bright-white.svg";
import LeagueOfLegends from "../../assets/images/LeagueOfLegends.jpg";
import LogoLOL from "../../assets/images/League-of-Legends-Logo.png";
import LogoValorant from "../../assets/images/valorant-logo.png";
import LogoWildRift from "../../assets/images/wild-rift-logo.png";
import WildRift from "../../assets/images/WildRift.png";
import { SectionTitle } from "../SectionTitle";

export const TeamsGames = () => {
  return (
    <section className="pt-44 pb-24 flex justify-center items-center overflow-hidden w-full min-h-screen h-full">
      <div className="flex flex-col relative w-full justify-center items-center">
        <div className="divider bg-neutral-900 h-px mb-20" />

        <h2 className="text-gray-300">Discover Our Championship Teams</h2>
        <SectionTitle>
          CHECK OUR <span className="text-orange-primary">TEAMS</span>
        </SectionTitle>

        <div className="max-w-7xl w-full overflow-hidden relative h-full">
          <div className="flex gap-2 justify-center flex-wrap pb-10 z-50 mt-10">
            <div className="rounded-md">
              <GamesCard
                image={Valorant}
                alt="Valorant Team"
                logo={LogoValorant}
              />
            </div>
            <div className="rounded-md">
              <GamesCard
                image={LeagueOfLegends}
                alt="League of legends Team"
                logo={LogoLOL}
              />
            </div>

            <div className="rounded-md">
              <GamesCard
                image={WildRift}
                alt="Wild Tift Team"
                logo={LogoWildRift}
              />
            </div>
            <div className="flex w-full"></div>
          </div>
        </div>
        <img src={Bright} className="absolute bottom-36 right-20 -z-10" />
        <img src={BrightWhite} className="absolute -bottom-40 left-0 -z-10" />
      </div>
    </section>
  );
};
