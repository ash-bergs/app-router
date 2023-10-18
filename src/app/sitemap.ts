// yarn build && yarn start
// visit localhost/sitemap.xml to see the sitemap
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type DogResponse = {
  message: string[];
  status: string;
};

export default async function sitemap() {
  // whatever we return as an array will be the sitemap
  const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  const allPosts = (await postsRes.json()) as Post[];
  const dogsRes = await fetch('https://dog.ceo/api/breed/hound/list');
  const dogData = (await dogsRes.json()) as DogResponse;

  const dogRoutes = dogData.message.map((breed) => ({
    url: `http://localhost:3000/dogs/${breed}`,
    lastModified: new Date().toISOString(),
  }));

  const posts = allPosts.map((post) => ({
    url: `http://localhost:3000/blog/${post.id}`,
    lastModified: new Date().toISOString(),
  }));

  // index static routes
  const routes = ['', '/dogs', '/blog'].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts, ...dogRoutes];
}

// To add an opengraph image, we can do that on a per route basis
// Can be dynamic, but static is easier and works for most cases
// Select the image you want to use, add it to the route folder with the name: opengraph-image.[png|jpg|jpeg|gif]
