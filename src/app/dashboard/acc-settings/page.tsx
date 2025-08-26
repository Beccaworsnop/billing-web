import DashboardLayout from "../../../../components/dash-layout"

export default function AccountSettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Account Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account preferences and advanced settings.</p>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">Account Limits</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-card-foreground">Daily Transaction Limit</span>
                    <span className="text-sm text-muted-foreground">$2,500 / $5,000</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-card-foreground">Monthly Transaction Limit</span>
                    <span className="text-sm text-muted-foreground">$12,847 / $50,000</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-card-foreground">Maximum Single Transaction</span>
                  <p className="text-2xl font-bold text-primary">$1,000</p>
                  <p className="text-xs text-muted-foreground">Increase limits with account verification</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-card-foreground">Payment Methods</span>
                  <p className="text-2xl font-bold text-primary">3 / 5</p>
                  <p className="text-xs text-muted-foreground">Active payment methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">Privacy Settings</h2>
          </div>
          <div className="p-6 space-y-6">
            {[
              {
                title: "Data Collection",
                description: "Allow PayBridge to collect usage data to improve our services",
                enabled: true,
              },
              {
                title: "Marketing Communications",
                description: "Receive promotional emails and product updates",
                enabled: false,
              },
              {
                title: "Transaction History Sharing",
                description: "Share anonymized transaction data for fraud prevention",
                enabled: true,
              },
              {
                title: "Third-party Integrations",
                description: "Allow approved third-party services to access your account data",
                enabled: false,
              },
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/10 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-card-foreground">{setting.title}</p>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={setting.enabled} />
                  <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">Data Management</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-card-foreground mb-2">Export Your Data</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download a copy of all your account data, including transactions, payment methods, and settings.
                  </p>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Request Data Export
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-card-foreground mb-2">Data Retention</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We keep your transaction data for 7 years as required by financial regulations. Personal data can be
                    deleted upon request.
                  </p>
                  <button className="border border-border text-card-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-destructive/10 rounded-lg border border-destructive/20">
          <div className="p-6 border-b border-destructive/20">
            <h2 className="text-xl font-semibold text-destructive">Danger Zone</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-destructive mb-2">Deactivate Account</h3>
                <p className="text-sm text-destructive/80 mb-4">
                  Temporarily disable your account. You can reactivate it anytime by logging in.
                </p>
                <button className="border border-destructive text-destructive px-4 py-2 rounded-lg font-medium hover:bg-destructive/10 transition-colors">
                  Deactivate Account
                </button>
              </div>
              <div>
                <h3 className="font-medium text-destructive mb-2">Delete Account</h3>
                <p className="text-sm text-destructive/80 mb-4">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-medium hover:bg-destructive/90 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}