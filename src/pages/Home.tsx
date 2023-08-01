import { GamesCard } from "../components/GamesCard";
import { MatchesCard } from "../components/MatchesCard";
import Valorant from "../assets/images/valorant-banner.png";
import LeagueOfLegends from "../assets/images/Lol-banner.png";
import WildRift from "../assets/images/WildRift-banner.png";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Kit from "../mocks/assets/kit.jpg";
import News from "../mocks/assets/news.jpg";
import News2 from "../mocks/assets/news2.jpg";
import News3 from "../mocks/assets/news3.jpg";
import News4 from "../mocks/assets/news4.jpg";
import Sponsor from "../mocks/assets/sponsor.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Home() {
  const [hoverColor, setHoverColor] = useState("");

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <>
      <main className=" bg-home h-full w-full bg-cover bg-center flex">
        <div className="flex flex-col justify-center items-center w-full gap-10 bg-gradient-to-b from-black/80 to-black  h-full pt-20 pb-36">
          <h1 className="text-xl font-medium text-gray-100 mb-2">
            WELCOME TO KEYPULSE ESPORTS
          </h1>

          <div className="w-full flex justify-center items-center gap-20">
            <div className="w-[656px]">
              <h2 className="text-2xl font-medium text-gray-100 mb-10">NEWS</h2>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={News} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={News2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={News3} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={News4} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex flex-col gap-8 relative">
              <h2 className="text-2xl font-medium text-gray-100 mb-2">
                UPCOMING MATCHES
              </h2>
              <div>
                <MatchesCard />
              </div>
              <div>
                <MatchesCard />
              </div>
              <button className="font-medium text-gray-500 absolute text-sm -bottom-8 right-0 z-10">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className="pt-20 pb-24 flex justify-center flex-col items-center relative overflow-hidden w-full min-h-screen h-full">
        <div className="max-w-7xl w-full overflow-hidden relative h-full">
          <h1 className="font-bold text-3xl text-gray-800">CHECK OUR TEAMS</h1>
          <p className="text-gray-600 mb-20">Discover Our Championship Teams</p>
          <motion.div
            className="riscado text-[350px]  flex-col font-bold absolute opacity-5 flex -top-32 z-0"
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

          <div className="flex gap-16 justify-center flex-wrap pb-10 z-50">
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
      <section className="w-full min-h-screen pb-20 pt-14 bg-dark-primary bg-fade bg-cover bg-center">
        <h1 className="font-bold text-3xl text-gray-200">JERSEY COLLECTIONS</h1>
        <p className="text-gray-400 mb-16">
          Ignite the Fashion. Amplify the Game
        </p>

        <div className="flex w-full justify-center">
          <img src={Kit} className="w-[1100px]" />
        </div>
      </section>
      <section className="w-full min-h-screen pt-20 pb-20">
        <h1 className="font-bold text-3xl text-gray-800">SPONSORS</h1>
        <p className="text-gray-600 mb-20">Fueled by Winning Partnerships</p>

        <div className="flex w-full justify-center">
          <GamesCard image={Sponsor} alt="Valorant Team" />
          <GamesCard image={Sponsor} alt="Valorant Team" />
          <GamesCard image={Sponsor} alt="Valorant Team" />
        </div>
      </section>
    </>
  );
}
