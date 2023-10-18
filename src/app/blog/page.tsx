import { Metadata } from 'next';
import Link from 'next/link';

// Use Next dynamic to opt in or out of dynamic behavior
// Result is never cached
// export const dynamic = "force-dynamic"

// Use revalidate to specify revalidation interval
// page will be statically generated
// export const revalidate = 10;

// statically generate at build time
// page will now be SSG at buld
interface PageProps {
  params: { postId: string };
  searchParams: URLSearchParams;
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const apiURL = 'https://jsonplaceholder.typicode.com/posts';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: 'Blog',
  };
}

const BlogPage = async ({ params }: PageProps) => {
  // Next has modified to regular fetch
  // https://nextjs.org/docs/app/building-your-application/caching#request-memoization
  // Allowing us to specify the cache behavior
  // And decide Next rendering strategy
  // see [altPostId] for example of implementing revalidate without fetch
  const res = await fetch(apiURL, {
    next: {
      revalidate: 10, // revalidate every 10 seconds
    },
  });

  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 text-black">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Blog Posts</h1>
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <ul className="space-y-4">
              {data.map((post: any) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`}>
                    <p className="text-blue-500 hover:text-blue-700 underline">
                      {post.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
