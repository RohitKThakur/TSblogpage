
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Eye } from "lucide-react"
import Link from "next/link"
import { AvatarDemo } from "./avatar"
import { Badge } from "./ui/badge"

interface props {
    title: string;
    likes: number;
    dislikes: number;
    views: number;
    id: number;
}

export function CardImage({ title, likes, dislikes, views, id }: props) {

    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction className=" flex flex-col gap-1.5">
                    <Badge variant="secondary"><Eye />{views}</Badge>
                    {/* <Badge variant="secondary">{likes}</Badge>
                    <Badge variant="secondary">{dislikes}</Badge> */}
                </CardAction>

                <CardTitle className="flex items-center gap-2"><AvatarDemo />{title}</CardTitle>
                {/* <CardDescription>
                    A practical talk on component APIs, accessibility, and shipping
                    faster.
                </CardDescription> */}
            </CardHeader>
            <CardFooter>
                <Link href={`/blog/${id}`}><Button className="w-full cursor-pointer">Read Article</Button></Link>
            </CardFooter>
        </Card>
    )
}
