export default function HowItWorksSection() {
  
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">How PayBridge Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Add Your Card</h3>
            <p className="text-white/70">Securely add your payment method to your PayBridge account</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Shop Anywhere</h3>
            <p className="text-white/70">Use PayBridge when a website doesn't accept your payment method</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">We Handle It</h3>
            <p className="text-white/70">We process the payment and complete your purchase instantly</p>
          </div>
        </div>
      </div>
    </section>
  )
}
