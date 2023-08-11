import { SectionTitle } from "../SectionTitle";
import JerseyVideo from "../../assets/Jersey.mp4";
import { VideoPlayer } from "../VideoPlayer";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";

export const Jersey = () => {
  return (
    <section className="w-full pb-20 pt-14 bg-dark-primary bg-cover bg-center">
      <div className="divider bg-neutral-800 h-px mb-20" />

      <h2 className="text-gray-300"> Ignite the Fashion. Amplify the Game!</h2>
      <SectionTitle>
        <span className="text-orange-primary">JERSEY</span> COLLECTION
      </SectionTitle>

      <motion.div
        className="flex justify-center items-center w-full mt-20"
        variants={fadeIn("up", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <div className="w-[1000px] lg:mx-0 mx-8">
          <VideoPlayer src={JerseyVideo} />
        </div>
      </motion.div>
    </section>
  );
};
