import { fadeIn } from "../../utils/Variants";
import { Circle } from "../Circle";
import { motion } from "framer-motion";

export const Greetings = () => {
  return (
    <main className="h-screen bg-home w-full bg-cover bg-center flex justify-center items-center px-3">
      <div className="flex flex-col justify-center items-center bg-gradient-to-b w-full from-black/60 to-transparent h-full pb-36">
        <motion.div
          className="flex justify-center items-center gap-2"
          variants={fadeIn("down", 0)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <Circle />
          <Circle />
          <Circle />
          <h2 className="md:text-3xl text-white font-medium mx-4">
            WELCOME TO
          </h2>
          <Circle />
          <Circle />
          <Circle />
        </motion.div>
        <motion.h1
          className="md:text-7xl text-4xl font-bold gradient mb-2"
          variants={fadeIn("down", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          KEYPULSE ESPORTS
        </motion.h1>
        <motion.p
          className="text-gray-100 md:text-lg max-w-2xl"
          variants={fadeIn("down", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
        >
          Where gaming passion meets competitive excellence. Join us in an
          exciting journey where the pulse of the game drives us forward.
        </motion.p>
      </div>
    </main>
  );
};
