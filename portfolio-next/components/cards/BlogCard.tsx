"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export type BlogMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export default function BlogCard({ post }: { post: BlogMeta }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-border p-4 bg-white/60 dark:bg-black/30"
    >
      <time className="text-xs opacity-60">{new Date(post.date).toLocaleDateString()}</time>
      <h3 className="font-semibold text-lg mt-2 mb-2">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="text-sm opacity-80">{post.excerpt}</p>
    </motion.article>
  );
}
