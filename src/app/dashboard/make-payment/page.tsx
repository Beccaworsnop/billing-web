import DashboardLayout from "../../../../components/dash-layout"
export default function MakePaymentPage() {
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Make Payment</h1>
          <p className="text-muted-foreground mt-2">Process a payment when a website doesn't accept your card.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
            <div className="p-6 border-b border-border/20">
              <h2 className="text-xl font-semibold text-card-foreground">Payment Details</h2>
              <p className="text-sm text-muted-foreground mt-1">Enter the payment information from the merchant</p>
            </div>
            <div className="p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Merchant Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Amazon, Netflix, etc."
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Payment Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      className="w-full bg-input border border-border rounded-lg pl-8 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Payment Method</label>
                  <select className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Visa ending in 4242 (Default)</option>
                    <option>Mastercard ending in 8888</option>
                    <option>American Express ending in 1005</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Order/Reference Number</label>
                  <input
                    type="text"
                    placeholder="Optional reference number"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Description</label>
                  <textarea
                    rows={3}
                    placeholder="Brief description of the purchase"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  ></textarea>
                </div>

                <div className="bg-muted/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-card-foreground">Subtotal</span>
                    <span className="text-card-foreground">$0.00</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-card-foreground">PayBridge Fee (2.9%)</span>
                    <span className="text-card-foreground">$0.00</span>
                  </div>
                  <div className="border-t border-border/20 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-card-foreground">Total</span>
                      <span className="font-semibold text-card-foreground">$0.00</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Process Payment
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20 p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">How PayBridge Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Enter Payment Details</p>
                    <p className="text-sm text-muted-foreground">
                      Copy the merchant name and amount from the website that rejected your card
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">We Process Payment</p>
                    <p className="text-sm text-muted-foreground">
                      PayBridge uses our merchant account to complete the transaction
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Instant Confirmation</p>
                    <p className="text-sm text-muted-foreground">
                      Get immediate confirmation and receipt for your purchase
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20 p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Payment Protection</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-card-foreground">100% fraud protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-card-foreground">Dispute resolution support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-card-foreground">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-card-foreground">Instant refund processing</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-primary">Processing Fee</p>
                  <p className="text-xs text-primary/80">
                    A 2.9% processing fee is added to cover transaction costs and ensure secure payment processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
