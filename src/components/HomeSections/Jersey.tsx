import { SectionTitle } from "../SectionTitle";
import JerseyVideo from "../../assets/Jersey.mp4";
import { VideoPlayer } from "../VideoPlayer";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Variants";

export const Jersey = () => {
  return (
    <section className="w-full min-h-screen pb-20 pt-14 bg-dark-primary bg-fade bg-cover bg-center">
      <SectionTitle title="JERSEY COLLECTION">
        Ignite the Fashion. Amplify the Game!
      </SectionTitle>

      <motion.div
        className="flex justify-center items-center w-full mt-20"
        variants={fadeIn("up", 0)}
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
