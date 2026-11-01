'use client'
import { Button } from "@/components/ui/button"
import { LuArrowRight } from "react-icons/lu";
import {
  Card
} from "@/components/ui/card"
import Link from "next/link"
import { toast } from "react-toastify";

const CategoryCard = ({category} : { category: string[]}) => {
    const handleOnClickButton  = () => {
        alert('clicked')
        toast.success('successfully')
    }
  return (
    <>
      <Card className="mx-auto w-full max-w-sm p-4">
        <Link href=''>
          <Button onClick={handleOnClickButton} className="w-full bg-[#2FAF9F] hover:bg-[#199789] flex items-center">{category} <LuArrowRight /></Button>
        </Link>
      </Card>
    </>
  )
}

export default CategoryCard
