import { FC } from 'react';
import axios from 'axios';
import type { Metadata } from 'next';

// Use Next dynamic to opt in or out of dynamic behavior
// Result is never cached
// export const dynamic = "force-dynamic"

// Use revalidate to specify revalidation interval
// page will be statically generated
// export const revalidate = 10;

// statically generate at build time
// page will now be SSG at buld
export async function generateStaticParams() {
  // ultimately returns an array with a value for each post
  // the item will map to the post id
  const posts = ['post-one', 'post-two', 'post-three'];

  return posts.map((post) => ({
    postId: post,
  }));
}

interface PageProps {
  params: { postId: string };
  searchParams: URLSearchParams;
}

export const metadata: Metadata = {
  title: 'Alt Page',
  description: 'This title applies to alt/[altPostId]/page.tsx',
};

const apiURL = 'https://jsonplaceholder.typicode.com/posts';

const PostId: FC<PageProps> = async ({ params }) => {
  const { data } = await axios.get(apiURL);

  console.log(data);

  return (
    <div>
      <h1>PostId</h1>
      <text>{JSON.stringify(data)}</text>
    </div>
  );
};

export default PostId;
