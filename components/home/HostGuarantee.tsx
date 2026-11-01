
import {
  ShieldCheck,
  BadgeCheck,
  Wrench,
  Headset,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const guarantees = [
  {
    title: "Liability Protection",
    description:
      "Enjoy greater peace of mind with booking protection designed to help safeguard hosts and creators during eligible studio rentals.",
    icon: ShieldCheck,
    features: ["Booking protection", "Clear rental guidelines"],
  },
  {
    title: "Verified Profiles",
    description:
      "Connect with confidence. Verified host and creator profiles help build a trusted community for every creative project.",
    icon: BadgeCheck,
    features: ["Identity verification", "Trusted community"],
  },
  {
    title: "Equipment Safety",
    description:
      "Create without worry in spaces where equipment care, studio standards, and safety guidelines are a priority.",
    icon: Wrench,
    features: ["Equipment guidelines", "Safety standards"],
  },
  {
    title: "24/7 Host Support",
    description:
      "Need assistance with a booking or studio experience? Get support whenever you need help along the way.",
    icon: Headset,
    features: ["Round-the-clock assistance", "Booking support"],
  },
];

const HostGuarantee = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 px-4 py-20 transition-colors duration-300 dark:bg-gray-950 sm:px-6 lg:px-8">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[#E47131]/10 blur-3xl dark:bg-[#E47131]/5" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-950/10" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          

          <div className="mb-5 inline-flex items-center gap-4">
            <span className="hidden h-0.5 w-12 bg-gray-300 dark:bg-gray-700 sm:block" />

            <span className="rounded-full bg-[#E47131]/10 px-7 py-3 text-sm font-bold text-[#E47131] sm:text-base">
              Trust & Protection
            </span>

            <span className="hidden h-0.5 w-12 bg-gray-300 dark:bg-gray-700 sm:block" />
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
            Host Guarantee &{" "}
            <span className="text-[#E47131]">
              Creator Support
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            Your creativity deserves a safe and supportive
            environment. We bring together trusted hosts,
            reliable spaces, and dedicated support to make
            every booking more confident.
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {guarantees.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#E47131]/40 hover:shadow-xl hover:shadow-[#E47131]/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-[#E47131]/50"
              >

                {/* Card Number */}
                <span className="absolute right-5 top-5 text-sm font-bold text-gray-200 transition-colors group-hover:text-[#E47131]/30 dark:text-gray-700">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-[#E47131]/10 text-[#E47131] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E47131] group-hover:text-white">
                  <Icon className="size-7" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-gray-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="min-h-24 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                {/* Features */}
                <div className="mt-5 space-y-3 border-t border-gray-100 pt-5 dark:border-gray-800">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#E47131]" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#E47131] transition-all duration-300 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#199789] px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left">

          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Create with confidence. Book with peace of mind.
            </h3>

            <p className="mt-2 text-sm text-white/85">
              Your next creative space is waiting for you.
            </p>
          </div>

          <a
            href="/studios"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#199789] transition-all hover:text-[#E47131] hover:bg-gray-100 hover:shadow-lg"
          >
            Explore Studios
            <ArrowUpRight className="size-4" />
          </a>

        </div>

        <p className="mt-5 text-center text-xs leading-5 text-gray-500 dark:text-gray-500">
          Protection and verification features are subject to
          platform policies, eligibility, and applicable terms.
        </p>

      </div>
    </section>
  );
}


export default HostGuarantee