
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  FiMapPin,
  FiImage,
  FiDollarSign,
  FiUsers,
  FiHome,
  FiCheckCircle,
  FiUser,
  FiPlus,
} from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
];

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
];

type AddStudioFormProps = {
  user: {
    name: string;
    email: string;
  };
};

type StudioFormData = {
  title: string;
  category: string;
  hourlyRate: string;
  securityDeposit: string;
  maxCapacity: string;
  location: string;
  imageURL: string;
  amenities: string[];
  overview: string;
};

const initialForm: StudioFormData = {
  title: "",
  category: "",
  hourlyRate: "",
  securityDeposit: "0",
  maxCapacity: "",
  location: "",
  imageURL: "",
  amenities: [],
  overview: "",
};

export default function AddStudioForm({ user }: AddStudioFormProps) {
  const [formData, setFormData] = useState<StudioFormData>(initialForm);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const updateField = (
    field: keyof StudioFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleAmenity = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const hourlyRate = Number(formData.hourlyRate);
    const securityDeposit = Number(formData.securityDeposit);
    const maxCapacity = Number(formData.maxCapacity);

    if (!formData.title.trim()) {
      setError("Please enter a studio title.");
      return;
    }

    if (!formData.category) {
      setError("Please select a studio category.");
      return;
    }

    if (
      !Number.isFinite(hourlyRate) ||
      hourlyRate <= 0
    ) {
      setError("Hourly rate must be greater than $0.");
      return;
    }

    if (
      !Number.isFinite(securityDeposit) ||
      securityDeposit < 0
    ) {
      setError("Security deposit cannot be negative.");
      return;
    }

    if (
      !Number.isInteger(maxCapacity) ||
      maxCapacity < 1
    ) {
      setError("Maximum capacity must be at least 1.");
      return;
    }

    if (!formData.location.trim()) {
      setError("Please enter the studio location.");
      return;
    }

    if (formData.imageURL.trim()) {
      try {
        const url = new URL(formData.imageURL.trim());
        if (!["http:", "https:"].includes(url.protocol)) {
          throw new Error("Invalid URL");
        }
      } catch {
        setError("Please enter a valid HTTP or HTTPS image URL.");
        return;
      }
    }

    if (formData.overview.trim().length < 20) {
      setError("Overview must be at least 20 characters.");
      return;
    }

    try {
      setSubmitting(true);

      const payload = {
        ...formData,
        title: formData.title.trim(),
        location: formData.location.trim(),
        imageURL: formData.imageURL.trim(),
        overview: formData.overview.trim(),
        hourlyRate,
        securityDeposit,
        maxCapacity,
        // Display information only.
        // Verify user identity on the server.
        owner: {
          name: user.name,
          email: user.email,
        },
      };

      // TODO: Send payload to your protected API route.
      // Example:
      // const response = await fetch("/api/studios", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      //
      // if (!response.ok) {
      //   throw new Error("Failed to create studio.");
      // }

      console.log("Studio form is valid:", payload);

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Page Header */}
      <div className="mb-8">
        <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-[#E47131]/10 text-[#E47131]">
          <FiPlus className="size-6" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Add New Studio
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          List your creative space and connect with creators.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"
      >
        {/* Studio Information */}
        <section className="space-y-5">
          <div>
            <h2 className="text-lg font-semibold">
              Studio Information
            </h2>
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
              onValueChange={(value) => updateField("category", value)}
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
                <FiDollarSign className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
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
                <FiDollarSign className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
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
              <Label htmlFor="maxCapacity">
                Max Capacity *
              </Label>

              <div className="relative">
                <FiUsers className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
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
              <FiMapPin className="absolute left-3 top-3 size-4 text-muted-foreground" />
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
              <FiImage className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
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
              const checked = formData.amenities.includes(amenity);
              const id = `amenity-${amenity.replace(/\W+/g, "-")}`;

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
              );
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

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ownerName">Owner Name</Label>
              <Input
                id="ownerName"
                value={user.name}
                readOnly
                aria-readonly="true"
                className="h-11 bg-muted"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ownerEmail">Owner Email</Label>
              <Input
                id="ownerEmail"
                type="email"
                value={user.email}
                readOnly
                aria-readonly="true"
                className="h-11 bg-muted"
              />
            </div>
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
            type="button"
            variant="outline"
            disabled={submitting}
            onClick={() => {
              setFormData(initialForm);
              setError("");
            }}
          >
            Reset Form
          </Button>

          <Button
            type="submit"
            disabled={submitting}
            className="bg-[#E47131] px-8 text-white hover:bg-[#cf6128]"
          >
            {submitting ? "Submitting..." : "Add Studio"}
          </Button>
        </div>
      </form>
    </div>
  );
}
