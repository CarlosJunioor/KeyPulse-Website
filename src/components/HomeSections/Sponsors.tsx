import Sponsor from "../../mocks/assets/sponsor.jpg";
import { SectionTitle } from "../SectionTitle";
import { SponsorsCard } from "../SponsorsCard";
import { motion } from "framer-motion";
import Bright from "../../assets/images/bright.svg";
import BrightWhite from "../../assets/images/bright-white.svg";
import { fadeIn } from "../../utils/Variants";

export const Sponsors = () => {
  return (
    <section className="w-full min-h-screen pt-20 pb-20">
      <div className="relative">
        <SectionTitle title="SPONSORS">
          Fueled by Winning Partnerships
        </SectionTitle>

        <motion.div
          className="flex w-full justify-center flex-wrap gap-4"
          variants={fadeIn("up", 0)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <SponsorsCard image={Sponsor} alt="Valorant Team" />
          <SponsorsCard image={Sponsor} alt="Valorant Team" />
          <SponsorsCard image={Sponsor} alt="Valorant Team" />
        </motion.div>
        <img src={Bright} className="absolute -bottom-40 -left-20 -z-10" />
        <img src={BrightWhite} className="absolute top-0 right-0 -z-10" />
      </div>
    </section>
  );
};
