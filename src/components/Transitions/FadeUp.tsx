import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
};

const FadeUp: FC<FadeUpProps> = ({ children, delay }) => (
  <motion.div
    initial={{ y: 5, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.2,
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);

export default FadeUp;
