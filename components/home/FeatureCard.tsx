"use client"

import Image from "next/image"
import { MapPin, Star, ArrowUpRight, Clock } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IData } from "@/app/types/type"

interface dataProps {
  data: IData
}

const FeatureCard = ({ data } : dataProps) => {
  const { title, image, category, hourlyRate, ratingBadge, location } = data

  return (
    <div>
      <Card className="group mx-auto w-80 max-w-sm overflow-hidden border border-gray-200 bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950">
        {/* Image */}
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 border-0 bg-white/95 text-gray-900 shadow-sm hover:bg-white">
            {category}
          </Badge>

          <Badge className="absolute top-3 right-3 flex items-center gap-1 border-0 bg-black/65 text-white backdrop-blur-sm hover:bg-black/65">
            <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
            {ratingBadge}
          </Badge>
        </div>

        {/* Content */}
        <CardContent className="space-y-3 px-4 pt-4">
          <div>
            <h3 className="line-clamp-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h3>

            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0" />
              <span className="line-clamp-1">{location}</span>
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-800">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
                ৳{Number(hourlyRate).toLocaleString("en-BD")}
                <span className="ml-1 text-sm font-normal text-muted-foreground">
                  /hr
                </span>
              </p>
            </div>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              Hourly booking
            </div>
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="px-4 pt-1 pb-4">
          <Button className="flex w-full gap-2 rounded-xl">
            <a href="" className="flex items-center gap-2">
              View Studio
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default FeatureCard
