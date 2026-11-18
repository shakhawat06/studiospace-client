"use client"
import { Studio } from "@/app/types/type"
import { authClient } from "@/lib/auth-client"
import { FiHeart } from "react-icons/fi"
import { toast } from "react-toastify"

const AddToWishListButton = ({ studio }: { studio: Studio }) => {
  const { data: session } = authClient.useSession()
  const user = session?.user

  const today = new Date().toISOString().split("T")[0]

  const data = {
    name: user?.name,
    email: user?.email,
    ...studio,
    savingDate: today,
  }
  const handleWishList = async () => {
    const res = await fetch(`http://localhost:8000/wishlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const savedStudio = await res.json()
    if(savedStudio.acknowledged === true) {
        toast.success('Studio has been saved.')
    }
    console.log(savedStudio)
  }
  return (
    <div>
      <button
        onClick={handleWishList}
        type="button"
        className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition hover:border-[#E47131] hover:text-[#E47131]"
      >
        <FiHeart />
        Save Studio
      </button>
    </div>
  )
}

export default AddToWishListButton
