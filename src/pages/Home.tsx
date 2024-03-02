import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Greetings } from "../components/HomeSections/Greetings";
import { TeamsGames } from "../components/HomeSections/TeamsGames";
import { Jersey } from "../components/HomeSections/Jersey";
import { Sponsors } from "../components/HomeSections/Sponsors";
import { LatestNews } from "../components/HomeSections/LatestNews";
import { Matches } from "../components/HomeSections/Matches";

export default function Home() {
  return (
    <>
    <h1>MatheusTeste</h1>
      <Greetings />
      <LatestNews />
      <Matches />
      <TeamsGames />
      <Jersey />
      <Sponsors />
    </>
  );
}
