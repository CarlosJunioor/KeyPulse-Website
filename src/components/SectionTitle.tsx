import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
}

export const SectionTitle = ({ children }: SectionProps) => {
  return (
    <div className="mb-10">
      <motion.h1 className="text-gray-50 font-black text-4xl">
        {children}
      </motion.h1>
    </div>
  );
};
