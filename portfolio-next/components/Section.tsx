"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Section({ id, children, className }: { id?: string; children: ReactNode; className?: string; }) {
  return (
    <section id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}
