import DashboardLayout from "../../../../components/dash-layout"
import Link from "next/link"

export default function PaymentMethodsPage() {
  
  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/26",
      isDefault: true,
      status: "Active",
      addedDate: "2024-08-15",
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "09/25",
      isDefault: false,
      status: "Active",
      addedDate: "2024-07-20",
    },
    {
      id: 3,
      type: "American Express",
      last4: "1005",
      expiry: "03/27",
      isDefault: false,
      status: "Expired",
      addedDate: "2024-06-10",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Payment Methods</h1>
            <p className="text-muted-foreground mt-2">Manage your saved payment methods and billing information.</p>
          </div>
          <Link
            href="/dashboard/add-payment"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Add New Method
          </Link>
        </div>

        <div className="grid gap-6">
          {paymentMethods.map((method) => (
            <div key={method.id} className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{method.type.slice(0, 4)}</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {method.type} •••• {method.last4}
                      </h3>
                      {method.isDefault && (
                        <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium">
                          Default
                        </span>
                      )}
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          method.status === "Active"
                            ? "bg-primary/20 text-primary"
                            : "bg-destructive/20 text-destructive"
                        }`}
                      >
                        {method.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Expires {method.expiry} • Added {method.addedDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {!method.isDefault && (
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">Set as Default</button>
                  )}
                  <button className="text-card-foreground hover:text-foreground text-sm font-medium">Edit</button>
                  <button className="text-destructive hover:text-destructive/80 text-sm font-medium">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">Payment Statistics</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-card-foreground">247</p>
                <p className="text-sm text-muted-foreground">Total Transactions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-card-foreground">$12,847</p>
                <p className="text-sm text-muted-foreground">Total Processed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-card-foreground">98.4%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Your Payment Methods are Secure</h3>
              <p className="text-sm text-primary/80 leading-relaxed">
                All payment information is encrypted using bank-level security. We never store your full card details
                and comply with PCI DSS standards. Your financial data is protected with multiple layers of security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}