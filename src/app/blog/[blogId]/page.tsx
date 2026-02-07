import { Button } from "@/components/ui/button"
import Link from "next/link"

interface tagsProps {
    id: number;
    title: string;
    body: string;
    tags: string[];
}

export default async function blogId({ params, }: { params: { blogId: string } }) {
    const { blogId } = await params
    const URL = `https://dummyjson.com/posts/${blogId}`
    const res = await fetch(URL)
    const data: tagsProps = await res.json()
    // console.log(data)
    return (
        <div className="min-h-screen bg-dark-background  px-4 py-4">
            <div className="mb-4 flex justify-start">
                <Link href="/blog"><Button variant="outline" className="cursor-pointer">
                    Back
                </Button>
                </Link>
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
                <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
                    {data.title}
                </h1>
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                    {data.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 rounded-md bg-gray-100 text-gray-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <img
                    src="/blog.jpg"
                    alt="blog"
                    className="w-full max-h-100 object-cover rounded-md"
                />
                <div className="text-base sm:text-lg leading-relaxed text-white space-y-5">
                    <p>
                        {data.body}
                    </p>
                </div>
            </div>
        </div>


    )
}