"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FiUser,
  FiMail,
  FiImage,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheck,
  FiX,
} from "react-icons/fi"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

const passwordRequirements = [
  {
    label: "At least 8 characters",
    test: (value: string) => value.length >= 8,
  },
  {
    label: "One uppercase letter",
    test: (value: string) => /[A-Z]/.test(value),
  },
  {
    label: "One lowercase letter",
    test: (value: string) => /[a-z]/.test(value),
  },
  {
    label: "One number",
    test: (value: string) => /[0-9]/.test(value),
  },
  {
    label: "One special character",
    test: (value: string) => /[^A-Za-z0-9\s]/.test(value),
  },
]

export default function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [photoURL, setPhotoURL] = useState("")
  const [password, setPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    photoURL: false,
    password: false,
  })

  const [serverError, setServerError] = useState("")

  const validName = name.trim().length >= 2

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  const validPhotoURL = (() => {
    if (!photoURL.trim()) return true

    try {
      const url = new URL(photoURL.trim())
      return url.protocol === "https:" || url.protocol === "http:"
    } catch {
      return false
    }
  })()

  const passwordResults = passwordRequirements.map((rule) => ({
    label: rule.label,
    valid: rule.test(password),
  }))

  const validPassword = passwordResults.every((rule) => rule.valid)

  const isFormValid = validName && validEmail && validPhotoURL && validPassword

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTouched({
      name: true,
      email: true,
      photoURL: true,
      password: true,
    })

    setServerError("")

    if (!isFormValid || submitted) return

    // Connect your registration API/authentication here.
    // Example: await authClient.signUp.email({...})

    console.log("Form is valid. Connect your registration API.")
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <Link href="/" className="text-2xl font-bold tracking-tight flex items-center justify-center">
          <Image
            src="/image/logo/onlyLogo.png"
            className="mr-3"
            alt="logo"
            width={30}
            height={30}
          />
          Studio<span className="text-[#E47131]">Space</span>
        </Link>

        <h1 className="mt-6 text-2xl font-bold tracking-tight">
          Create your account
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Join StudioSpace and start creating.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>

          <div className="relative">
            <FiUser className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
              aria-invalid={touched.name && !validName}
              className="h-11 pl-10"
              required
            />
          </div>

          {touched.name && !validName && (
            <p className="text-xs text-destructive">
              Please enter at least 2 characters.
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>

          <div className="relative">
            <FiMail className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              aria-invalid={touched.email && !validEmail}
              className="h-11 pl-10"
              required
            />
          </div>

          {touched.email && !validEmail && (
            <p className="text-xs text-destructive">
              Please enter a valid email address.
            </p>
          )}
        </div>

        {/* Photo URL */}
        <div className="space-y-2">
          <Label htmlFor="photoURL">
            Photo URL <span className="text-muted-foreground">(Optional)</span>
          </Label>

          <div className="relative">
            <FiImage className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="photoURL"
              name="photoURL"
              type="url"
              placeholder="https://example.com/photo.jpg"
              autoComplete="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, photoURL: true }))}
              aria-invalid={touched.photoURL && !validPhotoURL}
              className="h-11 pl-10"
            />
          </div>

          {touched.photoURL && !validPhotoURL && (
            <p className="text-xs text-destructive">
              Enter a valid HTTP or HTTPS URL.
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>

          <div className="relative">
            <FiLock className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
              aria-invalid={touched.password && !validPassword}
              aria-describedby="password-requirements"
              className="h-11 pr-11 pl-10"
              required
            />

            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <FiEyeOff className="size-4" />
              ) : (
                <FiEye className="size-4" />
              )}
            </button>
          </div>

          {/* Password requirements */}
          <div id="password-requirements" className="space-y-2 pt-2">
            <p className="text-xs font-medium text-muted-foreground">
              Your password must contain:
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {passwordResults.map((rule) => (
                <div
                  key={rule.label}
                  className={`flex items-center gap-2 text-xs ${
                    rule.valid
                      ? "text-green-600 dark:text-green-400"
                      : "text-muted-foreground"
                  }`}
                >
                  {rule.valid ? (
                    <FiCheck className="size-3.5 shrink-0" />
                  ) : (
                    <FiX className="size-3.5 shrink-0" />
                  )}
                  {rule.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* API error */}
        {serverError && (
          <p role="alert" className="text-sm text-destructive">
            {serverError}
          </p>
        )}

        {/* Register */}
        <Button
          type="submit"
          disabled={!isFormValid || submitted}
          className="h-11 w-full bg-[#E47131] font-semibold text-white hover:bg-[#cf6128] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Register
        </Button>
      </form>

      {/* Login */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-[#E47131] hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  )
}
