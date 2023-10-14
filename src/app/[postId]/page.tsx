import { Metadata } from 'next';

interface PageProps {
  params: { postId: string };
  searchParams: URLSearchParams; // we get access to the search params
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const apiURL = 'https://jsonplaceholder.typicode.com/posts';

// name enforced
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  // make a request to the source of data
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = (await res.json()) as Post;
  // return the metadata
  return {
    title: data.title,
  };
}

const PostId = async ({ params }: PageProps) => {
  // Next has modified to regular fetch
  // Allowing us to specify the cache behavior
  // And decide Next rendering strategy
  // see [altPostId] for example of implementing revalidate without fetch
  const res = await fetch(apiURL, {
    next: {
      revalidate: 10, // revalidate every 10 seconds
    },
  });

  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1>PostId</h1>
      <text>{JSON.stringify(data)}</text>
    </div>
  );
};

export default PostId;
