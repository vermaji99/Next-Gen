"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { staggerItem } from "./StaggerContainer";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function AnimatedCard({ children, className, index }: AnimatedCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      <Card className="h-full">
        {children}
      </Card>
    </motion.div>
  );
}
