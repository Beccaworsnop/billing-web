import DashboardLayout from "../../../../components/dash-layout"
export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account preferences and security settings.</p>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">Account Settings</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">First Name</label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Last Name</label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Email Address</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Phone Number</label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">Security Settings</h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-card-foreground mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Update Password
                </button>
              </div>
            </div>

            <div className="border-t border-border/20 pt-6">
              <h3 className="text-lg font-medium text-card-foreground mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between p-4 bg-muted/10 rounded-lg">
                <div>
                  <p className="font-medium text-card-foreground">Enable 2FA</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Enable
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">Notification Preferences</h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              { title: "Transaction Notifications", description: "Get notified when transactions are processed" },
              { title: "Security Alerts", description: "Receive alerts for suspicious account activity" },
              { title: "Marketing Updates", description: "Stay updated with new features and promotions" },
              { title: "Weekly Reports", description: "Receive weekly transaction summaries" },
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/10 rounded-lg">
                <div>
                  <p className="font-medium text-card-foreground">{setting.title}</p>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                  <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}