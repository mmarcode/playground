import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <Link href={'/about'}>About page</Link>
      <span className="text-7xl">Home page</span>
    </main>
  );
}
