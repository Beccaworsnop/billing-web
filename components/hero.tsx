import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
        Unleash the Power of Universal Payments
      </h1>
      <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl leading-relaxed font-serif">
        When websites don't accept your payment method, PayBridge steps in. Add your card once and pay anywhere with our
        secure third-party billing solution.
      </p>
     <Link href="/signup" className="bg-white text-card-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-colors">
      Get Started for Free </Link>
     </section>
  )
}
