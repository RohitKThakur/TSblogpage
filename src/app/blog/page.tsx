"use client"


import { CardImage } from "@/components/cardimage";
import { PaginationDemo } from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { blog } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


const page = () => {
    const [blog, setBlog] = useState<blog[]>([]);
    const [startPage, setStartPage] = useState(1)

    const limit: number = 8
    const skip: number = (startPage - 1) * limit
    const URL = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
    // const article = async () => {
    //     const res = await fetch(URL)
    //     const data = await res.json()
    //     // console.log(data)
    //     setBlog(data.posts)
    // };

    const article = async () => {

        try {
            const res = await axios.get(URL)
            // console.log(res)
            setBlog(res.data.posts)
        } catch (error) {
            throw new Error('Data not found')
        }
    }
    useEffect(() => {
        article();
    }, [startPage])

    return (
        <div className="flex flex-1 flex-col gap-3 p-4 pt-4 bg-dark-background  w-auto">
            <Link href="/"><Button className="cursor-pointer">Home</Button></Link>
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                {
                    blog.map((list) => (
                        <div key={list.id} className="rounded-2xl">
                            <CardImage
                                id={list.id}
                                title={list.title}
                                likes={list.likes}
                                dislikes={list.dislikes}
                                views={list.views}
                            />
                        </div>
                    ))
                }
            </div>
            <PaginationDemo
                startPage={startPage}
                setStartPage={setStartPage}
            />
        </div>
    )
}

export default page
