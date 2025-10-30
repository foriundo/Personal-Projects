import BlogCard from '@/components/cards/BlogCard';
import { posts } from '@/lib/data';

export const metadata = { title: 'Blog', description: 'Notes on building for the web.' };

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <div className="mt-8 space-y-4">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
