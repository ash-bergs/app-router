import Link from 'next/link';
import LayerMap from '@/components/LayerMap';
export default function Home() {
  return (
    <main className="min-h-screen bg-white p-24 text-black">
      <div className="flex flex-col items-center">
        <p className="text-xl mb-8">Main Page</p>
        <div className="flex space-x-4">
          <Link href="/blog">
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go to Blog
            </p>
          </Link>
          <Link href="/dogs">
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go to Dogs
            </p>
          </Link>
        </div>
        <div style={{ width: '100vw', height: '100vh' }}>
          <LayerMap />
        </div>
      </div>
    </main>
  );
}
