"use client"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { toast } from "react-toastify"
import { ArrowRight } from "lucide-react"

const CategoryCard = ({ category }: { category: string[] }) => {
  const handleOnClickButton = () => {
    alert("clicked")
    toast.success("successfully")
  }
  return (
    <>
      <div>
        <Card className="group mx-auto w-80 max-w-sm overflow-hidden border border-gray-200 bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950">
          <CardFooter className="px-4 pt-1 pb-4">
            <Link href="" className="w-full">
              <Button
                onClick={handleOnClickButton}
                className="flex w-full gap-2 rounded-xl"
              >
                <p className="flex items-center gap-2">
                  {category}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default CategoryCard
