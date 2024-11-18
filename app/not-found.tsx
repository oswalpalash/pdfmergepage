import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <title>404: Page Not Found</title>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Oops! The page does not exist.</p>
        <Link href="/">
          <a className="px-4 py-2 bg-primary text-white rounded">Go Back Home</a>
        </Link>
      </div>
    </>
  );
}