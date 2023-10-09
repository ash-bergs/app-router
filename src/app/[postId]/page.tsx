import { FC } from 'react';

interface PageProps {
  params: { postId: string };
  searchParams: URLSearchParams; // we get access to the search params
}

const apiURL = 'https://jsonplaceholder.typicode.com/posts';

const PostId: FC<PageProps> = async ({ params }) => {
  // Next has modified to regular fetch
  // Allowing us to specify the cache behavior
  // And decide Next rendering strategy
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
