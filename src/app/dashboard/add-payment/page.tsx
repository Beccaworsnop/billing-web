import DashboardLayout from "../../../../components/dash-layout"
export default function AddPaymentPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Add Payment Method</h1>
          <p className="text-muted-foreground mt-2">Add a new credit card or bank account to your PayBridge wallet.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
            <div className="p-6 border-b border-border/20">
              <h2 className="text-xl font-semibold text-card-foreground">Credit/Debit Card</h2>
              <p className="text-sm text-muted-foreground mt-1">Add a new card to your account</p>
            </div>
            <div className="p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Billing Address</label>
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring mb-3"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="default-card"
                    className="w-4 h-4 bg-input border border-border rounded focus:ring-2 focus:ring-ring"
                  />
                  <label htmlFor="default-card" className="ml-2 text-sm text-card-foreground">
                    Set as default payment method
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Add Card
                </button>
              </form>
            </div>
          </div>


          <div className="space-y-6">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20 p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Security & Privacy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">256-bit SSL Encryption</p>
                    <p className="text-sm text-muted-foreground">Your card details are encrypted and secure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">PCI DSS Compliant</p>
                    <p className="text-sm text-muted-foreground">We meet the highest security standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">No Storage Policy</p>
                    <p className="text-sm text-muted-foreground">We don't store your full card details</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20 p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Supported Cards</h3>
              <div className="grid grid-cols-4 gap-4">
                {["Visa", "MC", "Amex", "Disc"].map((card) => (
                  <div key={card} className="bg-muted/10 rounded-lg p-3 text-center">
                    <div className="w-8 h-6 bg-primary/20 rounded mx-auto mb-2"></div>
                    <p className="text-xs text-muted-foreground">{card}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}