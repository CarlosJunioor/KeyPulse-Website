import { fadeIn } from "../../utils/variants";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Greetings = () => {
  const navigate = useNavigate();

  return (
    <main className="h-screen bg-home w-full bg-cover bg-bottom overflow-hidden flex justify-center items-center px-3">
      <div>
        <div className="flex flex-col relative justify-center md:justify-start">
          <motion.h1
            className="lg:text-[250px] md:text-9xl text-6xl font-black text-start text-white z-0"
            variants={fadeIn("down", 0)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            KEYPULSE
          </motion.h1>
          <motion.h2
            className="gradient text-4xl md:text-7xl static md:absolute md:text-start -bottom-8 md:-bottom-10 md:left-6 font-black lg:text-9xl max-w-2xl z-20"
            variants={fadeIn("down", 0.4)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            ESPORTS
          </motion.h2>
        </div>
        <motion.div
          className="flex mt-20 justify-center md:justify-normal"
          variants={fadeIn("left", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <Button onClick={() => navigate("/about")}>ABOUT </Button>
        </motion.div>
      </div>
    </main>
  );
};
