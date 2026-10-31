import CategoryCard from "@/components/home/CategoryCard"
import FeatureCard from "@/components/home/FeatureCard"
import Slider from "@/components/home/Slider"

export default function Page() {
  const datas = [
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
    <div className="mx-auto flex min-h-svh max-w-7xl p-6">
      <div className="mx-auto flex flex-col gap-4 text-sm leading-loose">
        <Slider />

        <div className="grid w-full grid-cols-3 gap-4">
          {datas.map((data) => (
            <FeatureCard key={data.id} data={data} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  )
}
