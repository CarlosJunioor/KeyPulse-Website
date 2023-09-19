import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

interface HorizontalCardProps {
  imageSrc: string;
  title?: string;
  text?: string;
  imageOnLeft?: boolean;
}

export const TeamValues: React.FC<HorizontalCardProps> = ({
  imageSrc,
  text,
  title,
  imageOnLeft = false,
}) => {
  return (
    <motion.div
      className={`flex max-h-80 items-center md:items-stretch ${
        imageOnLeft ? "flex-col md:flex-row " : "flex-col md:flex-row-reverse"
      }`}
      variants={fadeIn(imageOnLeft ? "left" : "right", 0)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
    >
      <div className="w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-1/2 px-4 md:px-20 bg-neutral-900 flex flex-col items-center justify-center gap-1 md:py-0 py-4">
        <h1 className="text-sm sm:text-xl md:text-3xl font-bold">
          {title?.toUpperCase()}
        </h1>
        <p className="text-sm md:text-xl mt-2 md:mt-0 break-all md:break-normal">
          {text}
        </p>
      </div>
    </motion.div>
  );
};
