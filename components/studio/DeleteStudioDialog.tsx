'use client'

import { Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { LuTrash2 } from "react-icons/lu"
import { Studio } from "@/app/types/type"
import { redirect } from "next/navigation"

type StudioDetailsProps = {
  studio: Studio
}

export function DeleteStudioDialog({studio}: StudioDetailsProps) {

  const handleDeleteStudio = async () => {
    const res = await fetch(`http://localhost:8000/studio/${studio._id}`, {
      method: 'DELETE'
    })
    const data = await res.json();
    console.log(data);
    if(data.acknowledged == true) {
      redirect('/studios')
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button className="cursor-pointer" variant="destructive">
            <LuTrash2 />
            Delete
          </Button>
        }
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete studio?</AlertDialogTitle>
          <AlertDialogDescription>
            {studio.title}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteStudio} variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
