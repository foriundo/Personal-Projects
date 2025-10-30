import { notFound } from 'next/navigation';
import { posts } from '@/lib/data';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt } };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 prose prose-neutral dark:prose-invert">
      <h1>{post.title}</h1>
      <p><em>{new Date(post.date).toLocaleDateString()}</em></p>
      <p>{post.excerpt}</p>
      <p>
        This is placeholder content for the blog post. Replace this with real content or an MDX pipeline.
      </p>
      <h2>Section heading</h2>
      <p>
        Clean, minimal, and readable. Typography is powered by Tailwind Typography for consistent styles.
      </p>
    </article>
  );
}
