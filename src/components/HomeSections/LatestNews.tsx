import News1 from "../../mocks/assets/news.jpg";
import News2 from "../../mocks/assets/news2.jpg";
import News3 from "../../mocks/assets/news3.jpg";
import News4 from "../../mocks/assets/news4.jpg";

import Bright from "../../assets/images/bright.svg";
import BrightWhite from "../../assets/images/bright-white.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SectionTitle } from "../SectionTitle";

import { fadeIn } from "../../utils/variants";

export const LatestNews = () => {
  return (
    <section className="w-full pb-40 flex flex-col items-center pt-20 overflow-hidden ">
      <motion.div className="max-w-7xl w-full flex flex-col items-center relative">
        <h2 className="text-gray-300">
          Watch and support your favorite esports team!
        </h2>
        <SectionTitle>
          LATEST <span className="text-orange-primary">NEWS</span>
        </SectionTitle>
        <motion.div
          className="w-full max-w-[900px] px-6"
          variants={fadeIn("up", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={News1} />
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
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
          <div className="swiper-pagination" />
        </motion.div>
      </motion.div>
      <img src={Bright} className="absolute top-0 -left-20 -z-10" />
      <img src={BrightWhite} className="absolute top-0 right-0 -z-10" />
    </section>
  );
};
