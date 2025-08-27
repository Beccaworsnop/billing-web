import DashboardLayout from "../../../../components/dash-layout"
export default function ActivityLogPage() {
  
  const activities = [
    {
      id: 1,
      type: "login",
      description: "Successful login",
      timestamp: "2024-08-25 14:30:15",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
      status: "success",
    },
    {
      id: 2,
      type: "payment",
      description: "Payment processed for Amazon",
      timestamp: "2024-08-25 14:25:42",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
      status: "success",
    },
    {
      id: 3,
      type: "card_added",
      description: "New payment method added (Visa ****4242)",
      timestamp: "2024-08-24 09:15:33",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
      status: "success",
    },
    {
      id: 4,
      type: "login_failed",
      description: "Failed login attempt",
      timestamp: "2024-08-23 18:45:12",
      ip: "203.0.113.45",
      device: "Unknown",
      status: "failed",
    },
    {
      id: 5,
      type: "password_changed",
      description: "Password successfully changed",
      timestamp: "2024-08-22 16:20:08",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
      status: "success",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "login":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        )
      case "payment":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        )
      case "card_added":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        )
      case "login_failed":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Activity Log</h1>
          <p className="text-muted-foreground mt-2">Monitor all account activity and security events.</p>
        </div>

        <div className="bg-card/10 backdrop-blur-sm p-6 rounded-lg border border-border/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Activity Type</label>
              <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option>All activities</option>
                <option>Login events</option>
                <option>Payment activities</option>
                <option>Account changes</option>
                <option>Security events</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Date Range</label>
              <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>All time</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Status</label>
              <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option>All statuses</option>
                <option>Success</option>
                <option>Failed</option>
                <option>Pending</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">Recent Activity</h2>
          </div>
          <div className="divide-y divide-border/20">
            {activities.map((activity) => (
              <div key={activity.id} className="p-6 hover:bg-muted/5 transition-colors">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activity.status === "success"
                        ? "bg-primary/20 text-primary"
                        : activity.status === "failed"
                          ? "bg-destructive/20 text-destructive"
                          : "bg-muted/20 text-muted-foreground"
                    }`}
                  >
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-card-foreground">{activity.description}</p>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          activity.status === "success"
                            ? "bg-primary/20 text-primary"
                            : activity.status === "failed"
                              ? "bg-destructive/20 text-destructive"
                              : "bg-muted/20 text-muted-foreground"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      <p>{activity.timestamp}</p>
                      <p>
                        IP: {activity.ip} • {activity.device}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-destructive/10 rounded-lg p-6 border border-destructive/20">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-destructive mb-2">Security Notice</h3>
              <p className="text-sm text-destructive/80 leading-relaxed">
                We detected a failed login attempt from an unknown device on August 23rd. If this wasn't you, please
                change your password immediately and enable two-factor authentication.
              </p>
              <div className="mt-4 flex space-x-3">
                <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-destructive/90 transition-colors">
                  Change Password
                </button>
                <button className="border border-destructive text-destructive px-4 py-2 rounded-lg text-sm font-medium hover:bg-destructive/10 transition-colors">
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}