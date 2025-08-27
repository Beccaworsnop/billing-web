export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">What You Can Do With PayBridge</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card/10 backdrop-blur-sm p-8 rounded-lg border border-border/20">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Universal Card Support</h3>
            <p className="text-white/70 leading-relaxed">
              Add any payment method once and use it across websites that normally wouldn't accept it.
            </p>
          </div>

          <div className="bg-card/10 backdrop-blur-sm p-8 rounded-lg border border-border/20">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
                
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Bank-Level Security</h3>
            <p className="text-white/70 leading-relaxed">
              Your payment information is encrypted and protected with industry-leading security standards.
            </p>
          </div>

          <div className="bg-card/10 backdrop-blur-sm p-8 rounded-lg border border-border/20">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Instant Processing</h3>
            <p className="text-white/70 leading-relaxed">
              Lightning-fast payment processing ensures your transactions complete in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
