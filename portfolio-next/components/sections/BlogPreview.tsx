import Section from '@/components/Section';
import BlogCard from '@/components/cards/BlogCard';
import { posts } from '@/lib/data';
import Link from 'next/link';

export default function BlogPreview() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Latest Posts</h2>
          <Link href="/blog" className="text-sm underline underline-offset-4">View all</Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Section>
  );
}
