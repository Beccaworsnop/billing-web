import Navigation from "../../components/navigation"
import HeroSection from "../../components/hero"
import FeaturesSection from "../../components/features"
import HowItWorksSection from "../../components/usage"
import ContactSection from "../../components/contact"
import Footer from "../../components/footer"

export default function HomePage() {
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
