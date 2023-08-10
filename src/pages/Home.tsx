import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Greetings } from "../components/HomeSections/Greetings";
import { NewsMatches } from "../components/HomeSections/NewsMatches";
import { TeamsGames } from "../components/HomeSections/TeamsGames";
import { Jersey } from "../components/HomeSections/Jersey";
import { Sponsors } from "../components/HomeSections/Sponsors";

export default function Home() {
  return (
    <>
      <Greetings />
      <NewsMatches />
      <TeamsGames />
      <Jersey />
      <Sponsors />
    </>
  );
}
