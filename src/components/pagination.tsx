import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { paginationProps } from "@/types"

export function PaginationDemo({ startPage, setStartPage }: paginationProps) {

    const handleNext = () => {
        setStartPage(startPage + 1)
    }
    const handlePrev = () => {
        setStartPage(startPage - 1)
    }

    const prevPaginationNo = Array.from({ length: 3 }, (_, i) => startPage - 1 - i).filter((value) => value > 0).reverse();

    const nextPaginationNo = Array.from({ length: 3 }, (_, i) => startPage + i)

    const totalPaginationNo = [...prevPaginationNo, ...nextPaginationNo]

    return (
        <Pagination>
            <PaginationContent>

                <PaginationItem>
                    {startPage > 1 ? (
                        <PaginationPrevious onClick={handlePrev} className="cursor-pointer">Previous</PaginationPrevious>
                    ) : ("")}
                </PaginationItem>


                {totalPaginationNo.map((val, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink className={val === startPage ? "bg-primary text-primary-foreground" : ""}>{val}</PaginationLink>
                    </PaginationItem>
                ))}


                <PaginationItem>
                    <PaginationNext onClick={handleNext} className="cursor-pointer">Next</PaginationNext>
                </PaginationItem>

            </PaginationContent>
        </Pagination>
    )
}
