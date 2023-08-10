import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

interface SectionProps {
  title: string;
  children?: ReactNode;
}

export const SectionTitle = ({ title, children }: SectionProps) => {
  return (
    <div className="text-center mb-10">
      <motion.h1
        className="text-gray-50 font-bold text-3xl"
        variants={fadeIn("down", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>
      <motion.h2
        className="text-gray-300"
        variants={fadeIn("down", 0)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>
    </div>
  );
};
