import { SponsorsCard } from "../SponsorsCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";

export const Sponsors = () => {
  return (
    <section className="w-full fade bg-cover bg-center flex justify-center items-center min-h-screen">
      <div className="flex justify-between w-full max-w-7xl md:items-center md:flex-row flex-col">
        <div className="divider bg-neutral-800 h-px mb-20" />

        <div className="text-start lg:px-0 px-6">
          <h2 className="text-5xl lg:mb-o text-start font-black text-gray-100">
            OUR <br />
            <span className="text-orange-primary">PARTNES</span>
          </h2>
          <h2 className="text-gray-300">Fueled by Winning Partnerships</h2>
        </div>
        <motion.div
          className="flex w-full justify-center flex-wrap gap-4 mt-20 md:mt-0"
          variants={fadeIn("up", 0)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <SponsorsCard
            image="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png"
            alt="Valorant Team"
          />
          <SponsorsCard
            image="https://logodownload.org/wp-content/uploads/2014/07/adidas-logo-branco.png"
            alt="Valorant Team"
          />

          <SponsorsCard
            image="https://www.edigitalagency.com.au/wp-content/uploads/Twitch-icon-white.png"
            alt="Valorant Team"
          />
        </motion.div>
      </div>
    </section>
  );
};
