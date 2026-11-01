import {
  Search,
  CalendarDays,
  CreditCard,
  Clapperboard,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover Spaces",
    description:
      "Explore a wide range of studios — from photo studios and sound stages to podcast rooms, music suites, and art workshops.",
    icon: Search,
  },
  {
    number: "02",
    title: "Select Shoot Hours",
    description:
      "Choose your preferred date and time that fits your schedule. Find the perfect time for your creative project.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Book Instantly",
    description:
      "Confirm your booking with a secure and hassle-free process. Your perfect creative space is just a few clicks away.",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Create & Produce",
    description:
      "Get ready to bring your ideas to life in your chosen studio. Focus on creating something amazing!",
    icon: Clapperboard,
  },
];

const HowBookingWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 transition-colors duration-300 dark:bg-gray-950 sm:px-6 lg:px-8">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 -top-32 size-80 rounded-full bg-[#E47131]/10 blur-3xl dark:bg-[#E47131]/5" />
      <div className="pointer-events-none absolute -right-32 top-1/2 size-80 rounded-full bg-[#E47131]/10 blur-3xl dark:bg-[#E47131]/5" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-4">
            <span className="hidden h-0.5 w-12 bg-gray-300 dark:bg-gray-700 sm:block" />

            <span className="rounded-full bg-[#E47131]/10 px-7 py-3 text-sm font-bold text-[#E47131] sm:text-base">
              How Booking Works
            </span>

            <span className="hidden h-0.5 w-12 bg-gray-300 dark:bg-gray-700 sm:block" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
            Four Simple Steps to{" "}
            <span className="text-[#E47131]">
              Book Your Studio
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            Find the perfect space, choose your time, and get
            started in just a few clicks.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">

                {/* Card */}
                <div className="group relative flex h-full flex-col items-center rounded-3xl border border-gray-100 bg-white px-5 pb-8 pt-10 text-center shadow-[0_8px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#E47131]/40 hover:shadow-[0_15px_40px_rgba(228,113,49,0.12)] dark:border-gray-800 dark:bg-gray-900 dark:shadow-none dark:hover:border-[#E47131]/50 dark:hover:shadow-[0_15px_40px_rgba(228,113,49,0.08)] sm:px-6">

                  {/* Step Number */}
                  <div className="absolute -top-6 flex size-12 items-center justify-center rounded-full bg-[#E47131] text-xl font-bold text-white shadow-lg shadow-[#E47131]/25 transition-transform duration-300 group-hover:scale-110">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-7 flex size-40 items-center justify-center rounded-full bg-[#E47131]/10 transition-colors duration-300 group-hover:bg-[#E47131]/15 dark:bg-[#E47131]/10 dark:group-hover:bg-[#E47131]/20 sm:size-44">
                    <div className="flex size-28 items-center justify-center rounded-3xl bg-linear-to-br from-[#E47131]/15 to-orange-100/50 text-[#E47131] transition-transform duration-300 group-hover:scale-110 dark:from-[#E47131]/20 dark:to-[#E47131]/5 sm:size-32">
                      <Icon
                        strokeWidth={1.5}
                        className="size-16"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-gray-950 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow */}
                {index !== steps.length - 1 && (
                  <div className="absolute -right-5 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white text-[#E47131] shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-[#E47131] lg:flex">
                    <ArrowRight className="size-5" />
                  </div>
                )}

              </div>
            );
          })}

        </div>
      </div>
    </section>
  )
}

export default HowBookingWorks
