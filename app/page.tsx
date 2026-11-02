import CategoryCard from "@/components/home/CategoryCard"
import FeatureCard from "@/components/home/FeatureCard"
import { IData } from "./types/type"
import HowBookingWorks from "@/components/home/HowBookingWorks"
import HostGuarantee from "@/components/home/HostGuarantee"
import HeroSlider from "@/components/home/HeroSlider"

export default function Page() {
  const datas: IData[] = [
    {
      id: "studio-1",
      title: "Creative Photography Studio",
      image: "/image/sliders/video.jpg",
      category: "Photography",
      hourlyRate: 1200,
      ratingBadge: "4.9",
      location: "Dhanmondi, Dhaka",
    },
    {
      id: "studio-1",
      title: "Creative Photography Studio",
      image: "/image/sliders/video.jpg",
      category: "Photography",
      hourlyRate: 1200,
      ratingBadge: "4.9",
      location: "Dhanmondi, Dhaka",
    },
    {
      id: "studio-1",
      title: "Creative Photography Studio",
      image: "/image/sliders/video.jpg",
      category: "Photography",
      hourlyRate: 1200,
      ratingBadge: "4.9",
      location: "Dhanmondi, Dhaka",
    },
    {
      id: "studio-1",
      title: "Creative Photography Studio",
      image: "/image/sliders/video.jpg",
      category: "Photography",
      hourlyRate: 1200,
      ratingBadge: "4.9",
      location: "Dhanmondi, Dhaka",
    },
    {
      id: "studio-1",
      title: "Creative Photography Studio",
      image: "/image/sliders/video.jpg",
      category: "Photography",
      hourlyRate: 1200,
      ratingBadge: "4.9",
      location: "Dhanmondi, Dhaka",
    },
    {
      id: "studio-1",
      title: "Creative Photography Studio",
      image: "/image/sliders/video.jpg",
      category: "Photography",
      hourlyRate: 1200,
      ratingBadge: "4.9",
      location: "Dhanmondi, Dhaka",
    },
  ]

  const categories = [
    "Photo Studios",
    "Sound Stages",
    "Podcast Rooms",
    "Music Suites",
    "Art Workshops",
  ]

  return (
    <>
      <HeroSlider />
      <div className="mx-auto flex min-h-svh max-w-7xl p-6">
        <div className="mx-auto flex flex-col gap-4 text-sm leading-loose">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-3">
            {datas.map((data, index) => (
              <FeatureCard key={index} data={data} />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>

          <div className="">
            <HowBookingWorks />
          </div>

          <HostGuarantee />
        </div>
      </div>
    </>
  )
}
