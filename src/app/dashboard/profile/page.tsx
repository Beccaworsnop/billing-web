import DashboardLayout from "../../../../components/dash-layout"

export default function ProfilePage() {
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground mt-2">Manage your personal information and payment methods.</p>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">Profile Information</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-foreground">JD</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-card-foreground">John Doe</h3>
                <p className="text-muted-foreground">john@example.com</p>
                <p className="text-sm text-muted-foreground mt-1">Member since August 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-1">Full Name</label>
                  <p className="text-foreground">John Doe</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-1">Email</label>
                  <p className="text-foreground">john@example.com</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-1">Phone</label>
                  <p className="text-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-1">Account Status</label>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    Verified
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-1">Account Type</label>
                  <p className="text-foreground">Premium</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-1">Location</label>
                  <p className="text-foreground">United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-card-foreground">Payment Methods</h2>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Add New Card
            </button>
          </div>
          <div className="p-6 space-y-4">
            {[
              { type: "Visa", last4: "4242", expiry: "12/26", isDefault: true },
              { type: "Mastercard", last4: "8888", expiry: "09/25", isDefault: false },
              { type: "American Express", last4: "1005", expiry: "03/27", isDefault: false },
            ].map((card, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/10 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-8 bg-primary/20 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{card.type.slice(0, 4)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">
                      {card.type} ending in {card.last4}
                    </p>
                    <p className="text-sm text-muted-foreground">Expires {card.expiry}</p>
                  </div>
                  {card.isDefault && (
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium">Default</span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-primary hover:text-primary/80 text-sm font-medium">Edit</button>
                  <button className="text-destructive hover:text-destructive/80 text-sm font-medium">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">Account Statistics</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">247</p>
                <p className="text-sm text-muted-foreground">Total Transactions</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">$12,847</p>
                <p className="text-sm text-muted-foreground">Total Amount Processed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">98.4%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
