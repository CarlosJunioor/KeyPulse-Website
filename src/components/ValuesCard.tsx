import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

interface HorizontalCardProps {
  imageSrc: string;
  title?: string;
  text?: string;
  imageOnLeft?: boolean;
}

export const ValuesCard: React.FC<HorizontalCardProps> = ({
  imageSrc,
  text,
  title,
  imageOnLeft = false,
}) => {
  return (
    <motion.div
      className={`flex max-h-80 ${
        imageOnLeft ? "flex-row" : "flex-row-reverse"
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
      <div className="w-1/2 px-20 bg-neutral-900 flex flex-col items-center justify-center gap-1">
        <h1 className="text-3xl font-bold">{title?.toUpperCase()}</h1>
        <p className="text-xl">{text}</p>
      </div>
    </motion.div>
  );
};
