export type blog = {
    id: number;
    title: string;
    likes: number;
    dislikes: number;
    views: number
    body: string;
    tags: string[];
}

export type paginationProps = {
    startPage: number;
    setStartPage: React.Dispatch<React.SetStateAction<number>>;
}