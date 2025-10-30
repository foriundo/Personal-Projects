"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group rounded-xl border border-border overflow-hidden hover:shadow-md bg-white/60 dark:bg-black/30"
    >
      <div className="relative aspect-[16/9]">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-sm opacity-80 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full border border-border">
              {t}
            </span>
          ))}
        </div>
        {project.href && (
          <Link href={project.href} className="text-sm underline underline-offset-4">
            View project →
          </Link>
        )}
      </div>
    </motion.article>
  );
}
