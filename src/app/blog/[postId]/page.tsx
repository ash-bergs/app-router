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
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
    {
      next: {
        revalidate: 10, // revalidate every 10 seconds
      },
    }
  );

  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 text-black">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
        <h1 className="text-4xl font-bold mb-4 text-center text-black">
          {data.title}
        </h1>
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <p className="text-gray-600 mt-4">{data.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostId;
