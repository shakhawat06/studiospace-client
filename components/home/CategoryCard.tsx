import { Button } from "@/components/ui/button"
import { LuArrowRight } from "react-icons/lu";
import {
  Card
} from "@/components/ui/card"
import Link from "next/link"

const CategoryCard = ({category} : { category: string[]}) => {
  return (
    <>

      <Card className="mx-auto w-full max-w-sm p-4">
        <Link href=''>
          <Button className="w-full bg-[#2FAF9F] hover:bg-[#199789] flex items-center">{category} <LuArrowRight /></Button>
        </Link>
      </Card>
    </>
  )
}

export default CategoryCard
