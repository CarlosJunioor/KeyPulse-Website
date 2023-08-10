import News from "../../mocks/assets/news.jpg";
import News2 from "../../mocks/assets/news2.jpg";
import News3 from "../../mocks/assets/news3.jpg";
import News4 from "../../mocks/assets/news4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MatchesCard } from "../MatchesCard";
import { SectionTitle } from "../SectionTitle";
import bright from "../../assets/images/bright.svg";
import brightWhite from "../../assets/images/bright-white.svg";
import { fadeIn } from "../../utils/Variants";

export const NewsMatches = () => {
  return (
    <section className="w-full flex flex-col items-center pt-20 overflow-hidden">
      <motion.div
        className="max-w-7xl w-full flex flex-col items-center relative"
        variants={fadeIn("up", 0)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <SectionTitle title="NEWS & MATCHES">
          Watch and support your favorite esports team!
        </SectionTitle>
        <div className="flex w-full gap-20 justify-center flex-wrap px-6">
          <div className="w-full max-w-[656px]">
            <h3 className="lg:text-start text-center text-gray-200 font-medium text-lg mb-2">
              LATEST NEWS
            </h3>
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
          <div>
            <h2 className="text-lg font-medium text-gray-100 mb-4">
              UPCOMING MATCHES
            </h2>
            <div className="flex flex-col w-full gap-7 relative">
              <div>
                <MatchesCard />
              </div>
              <div>
                <MatchesCard />
              </div>
              <button className="font-bold text-gray-300 absolute text-xs -bottom-6 right-0 z-10">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>

        <img src={bright} className="absolute -left-10 -top-20 -z-10" />
        <img
          src={brightWhite}
          className="absolute -right-10 -bottom-20 -z-10"
        />
      </motion.div>
    </section>
  );
};
