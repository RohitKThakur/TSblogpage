import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-dark-background min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Welcome To Blog Website
        </h1>

        <Link href="/blog">
          <Button variant="outline" className="px-6 py-2 text-lg cursor-pointer">
            Explore Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}
