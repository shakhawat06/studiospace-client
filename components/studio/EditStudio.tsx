"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LuPenLine } from "react-icons/lu"

import React, { useState } from "react"
import type { FormEvent } from "react"
import {
  FiMapPin,
  FiImage,
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "react-toastify"
import { Studio } from "@/app/types/type"
import { redirect, useRouter } from "next/navigation"

const categories = [
  "Photo Studio",
  "Film Stage",
  "Podcast Lounge",
  "Music Suite",
  "Workshop",
  "Sound Stage",
  "Art Studio",
  "Dance Studio",
  "Other",
]

const availableAmenities = [
  "Wi-Fi",
  "Air Conditioning",
  "Parking",
  "Lighting Equipment",
  "Professional Camera",
  "Green Screen",
  "Soundproofing",
  "Restroom",
  "Kitchen",
  "Makeup Room",
  "Changing Room",
  "Wheelchair Accessible",
]

type StudioFormData = {
  _id: string
  title: string
  category: string
  hourlyRate: string
  securityDeposit: string
  maxCapacity: string
  location: string
  imageURL: string
  amenities: string[]
  overview: string
}

type StudioDetailsProps = {
  studio: Studio
}

const EditStudio = ({ studio }: StudioDetailsProps) => {
  const [formData, setFormData] = useState<StudioFormData>(studio)
  const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const router = useRouter()

  const updateField = (field: keyof StudioFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const toggleAmenity = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity],
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    const hourlyRate = Number(formData.hourlyRate)
    const securityDeposit = Number(formData.securityDeposit)
    const maxCapacity = Number(formData.maxCapacity)

    if (!formData.title.trim()) {
      setError("Please enter a studio title.")
      return
    }

    if (!formData.category) {
      setError("Please select a studio category.")
      return
    }

    if (!Number.isFinite(hourlyRate) || hourlyRate <= 0) {
      setError("Hourly rate must be greater than $0.")
      return
    }

    if (!Number.isFinite(securityDeposit) || securityDeposit < 0) {
      setError("Security deposit cannot be negative.")
      return
    }

    if (!Number.isInteger(maxCapacity) || maxCapacity < 1) {
      setError("Maximum capacity must be at least 1.")
      return
    }

    if (!formData.location.trim()) {
      setError("Please enter the studio location.")
      return
    }

    if (formData.imageURL.trim()) {
      try {
        const url = new URL(formData.imageURL.trim())
        if (!["http:", "https:"].includes(url.protocol)) {
          throw new Error("Invalid URL")
        }
      } catch {
        setError("Please enter a valid HTTP or HTTPS image URL.")
        return
      }
    }

    if (formData.overview.trim().length < 20) {
      setError("Overview must be at least 20 characters.")
      return
    }

    try {
      setSubmitting(true)

      const payload = {
        ...formData,
        title: formData.title.trim(),
        location: formData.location.trim(),
        imageURL: formData.imageURL.trim(),
        overview: formData.overview.trim(),
        hourlyRate,
        securityDeposit,
        maxCapacity,
      }

      const res = await fetch(`http://localhost:8000/studio/${studio._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      console.log(data)
      if (data.acknowledged == true) {
        toast.success("Studio add successfully")
        // redirect('/studios')
        router.push("/studios")
        router.refresh()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger
          render={
            <Button variant="outline" className="cursor-pointer">
              <LuPenLine />
              Edit
            </Button>
          }
        />
        <DialogContent className="lg:max-w-5xl">
          <DialogHeader>
            <DialogTitle>Edit Studio</DialogTitle>
            <DialogDescription>
              This dialog has a sticky footer that stays visible while the
              content scrolls.
            </DialogDescription>
          </DialogHeader>
          <div className="-mx-4 no-scrollbar max-h-[80vh] overflow-y-auto px-4">
            <form
              onSubmit={handleSubmit}
              className="space-y-8 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"
            >
              {/* Studio Information */}
              <section className="space-y-5">
                <div>
                  <h2 className="text-lg font-semibold">Studio Information</h2>
                  <p className="text-sm text-muted-foreground">
                    Add the basic details of your studio.
                  </p>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Studio Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g. Premium Photography Studio"
                    value={formData.title}
                    onChange={(e) => updateField("title", e.target.value)}
                    maxLength={120}
                    required
                    className="h-11"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>

                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      updateField("category", value as string)
                    }
                    required
                  >
                    <SelectTrigger id="category" className="h-11">
                      <SelectValue placeholder="Select a studio category" />
                    </SelectTrigger>

                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Pricing and Capacity */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Hourly Rate ($) *</Label>

                    <div className="relative">
                      <FiDollarSign className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="hourlyRate"
                        type="number"
                        min="0.01"
                        step="0.01"
                        placeholder="50.00"
                        value={formData.hourlyRate}
                        onChange={(e) =>
                          updateField("hourlyRate", e.target.value)
                        }
                        className="h-11 pl-9"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="securityDeposit">
                      Security Deposit ($) *
                    </Label>

                    <div className="relative">
                      <FiDollarSign className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="securityDeposit"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.securityDeposit}
                        onChange={(e) =>
                          updateField("securityDeposit", e.target.value)
                        }
                        className="h-11 pl-9"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxCapacity">Max Capacity *</Label>

                    <div className="relative">
                      <FiUsers className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="maxCapacity"
                        type="number"
                        min="1"
                        step="1"
                        placeholder="10"
                        value={formData.maxCapacity}
                        onChange={(e) =>
                          updateField("maxCapacity", e.target.value)
                        }
                        className="h-11 pl-9"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Location / Address *</Label>

                  <div className="relative">
                    <FiMapPin className="absolute top-3 left-3 size-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="Street, area, city, postal code"
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      maxLength={300}
                      className="h-11 pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Image URL */}
                <div className="space-y-2">
                  <Label htmlFor="imageURL">Studio Image URL</Label>

                  <div className="relative">
                    <FiImage className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="imageURL"
                      type="url"
                      placeholder="https://example.com/studio.jpg"
                      value={formData.imageURL}
                      onChange={(e) => updateField("imageURL", e.target.value)}
                      className="h-11 pl-10"
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Optional. Provide a publicly accessible image URL.
                  </p>
                </div>
              </section>

              <div className="border-t border-border" />

              {/* Amenities */}
              <section className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold">Amenities</h2>
                  <p className="text-sm text-muted-foreground">
                    Select all amenities available in your studio.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {availableAmenities.map((amenity) => {
                    const checked = formData.amenities.includes(amenity)
                    const id = `amenity-${amenity.replace(/\W+/g, "-")}`

                    return (
                      <label
                        key={amenity}
                        htmlFor={id}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm transition-colors ${
                          checked
                            ? "border-[#E47131] bg-[#E47131]/5"
                            : "border-border hover:bg-muted/50"
                        }`}
                      >
                        <input
                          id={id}
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAmenity(amenity)}
                          className="size-4 accent-[#E47131]"
                        />

                        <span className="flex-1">{amenity}</span>

                        {checked && (
                          <FiCheckCircle className="size-4 text-[#E47131]" />
                        )}
                      </label>
                    )
                  })}
                </div>

                <p className="text-xs text-muted-foreground">
                  {formData.amenities.length} amenities selected
                </p>
              </section>

              <div className="border-t border-border" />

              {/* Overview */}
              <section className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold">Studio Overview</h2>
                  <p className="text-sm text-muted-foreground">
                    Tell creators what makes your space special.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="overview">Detailed Overview *</Label>

                  <Textarea
                    id="overview"
                    placeholder="Describe your studio, equipment, space, facilities, rules, and ideal use cases..."
                    value={formData.overview}
                    onChange={(e) => updateField("overview", e.target.value)}
                    minLength={20}
                    maxLength={5000}
                    required
                    className="min-h-36 resize-y"
                  />

                  <p className="text-right text-xs text-muted-foreground">
                    {formData.overview.length}/5000
                  </p>
                </div>
              </section>

              <div className="border-t border-border" />

              {/* Owner Information */}
              <section className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold">Studio Owner</h2>
                  <p className="text-sm text-muted-foreground">
                    Your account information.
                  </p>
                </div>

                <p className="text-xs text-muted-foreground">
                  Owner information is displayed for reference. Your
                  authenticated account should determine studio ownership.
                </p>
              </section>

              {/* Error */}
              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
                >
                  {error}
                </p>
              )}

              {/* Actions */}
              <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#E47131] px-8 text-white hover:bg-[#cf6128]"
                >
                  {submitting ? "Submitting..." : "Update Studio"}
                </Button>
              </div>
            </form>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Close</Button>} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditStudio
