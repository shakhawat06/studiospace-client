
"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    subtitle: "YOUR CREATIVE JOURNEY STARTS HERE",
    title: "Find the Perfect Space to Bring Your Ideas to Life",
    description:
      "Discover inspiring studios, professional equipment, and unique creative spaces for your next project.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85",
    buttonText: "Explore Studios",
    buttonLink: "/studios",
  },
  {
    id: 2,
    subtitle: "BUILT FOR CREATORS",
    title: "Create Something Extraordinary",
    description:
      "From photography studios to podcast rooms, find everything you need to make your creative vision happen.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2000&q=85",
    buttonText: "Discover Spaces",
    buttonLink: "/studios",
  },
  {
    id: 3,
    subtitle: "YOUR SPACE. YOUR STORY.",
    title: "Turn Your Creative Vision Into Reality",
    description:
      "Book flexible creative spaces with ease and focus on what you do best: creating amazing work.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2000&q=85",
    buttonText: "Get Started",
    buttonLink: "/studios",
  },
];

export default function HeroSlider() {
  return (
    <section className="">
      <div className="mx-auto w-full h-full overflow-hidden ">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          loop
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          pagination={{ clickable: true }}
          className="studio-hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative flex min-h-full items-center bg-cover bg-center px-6 py-16 sm:min-h-[550] sm:px-12 lg:min-h-[620] lg:px-20"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Slide content */}
                <div className="max-w-4xl">
                  <div className="relative z-10 max-w-2xl text-white">
                  <span className="mb-5 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] backdrop-blur-sm sm:text-sm">
                    {slide.subtitle}
                  </span>

                  <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                    {slide.description}
                  </p>

                  <Link
                    href={slide.buttonLink}
                    className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E47131] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#cf6128] sm:text-base"
                  >
                    {slide.buttonText}
                    <FiArrowRight className="size-5" />
                  </Link>
                </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper customization */}
      <style jsx global>{`
        .studio-hero-swiper .swiper-button-next,
        .studio-hero-swiper .swiper-button-prev {
          color: white;
          backdrop-filter: blur(8px);
          transition: background 0.2s ease;
        }

        .studio-hero-swiper .swiper-button-next:hover,
        .studio-hero-swiper .swiper-button-prev:hover {
          color: #e47131;
        }

        .studio-hero-swiper .swiper-button-next::after,
        .studio-hero-swiper .swiper-button-prev::after {
          font-size: 11px;
          font-weight: bold;
        }

        .studio-hero-swiper .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: white;
          opacity: 0.6;
        }

        .studio-hero-swiper .swiper-pagination-bullet-active {
          width: 25px;
          border-radius: 10px;
          background: #e47131;
          opacity: 1;
        }

        .studio-hero-swiper .swiper-pagination {
          bottom: 22px;
        }

        @media (max-width: 640px) {
          .studio-hero-swiper .swiper-button-next,
          .studio-hero-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
