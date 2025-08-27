import Link from "next/link"

export default function Navigation() {
  
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-sm">
      <div className="text-2xl font-bold text-white">PayBridge</div>
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#features" className="text-white/80 hover:text-white transition-colors">
          Features
        </Link>
        <Link href="#pricing" className="text-white/80 hover:text-white transition-colors">
          Pricing
        </Link>
        <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
          Contact
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="text-white/80 hover:text-white transition-colors">
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Try for Free
        </Link>
      </div>
    </nav>
  )
}
