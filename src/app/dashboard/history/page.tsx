import DashboardLayout from "../../../../components/dash-layout"

export default function HistoryPage() {
  const transactions = [
    { id: "TXN001", merchant: "Amazon", amount: "$89.99", status: "Completed", date: "2024-08-25", time: "14:30" },
    { id: "TXN002", merchant: "Netflix", amount: "$15.99", status: "Completed", date: "2024-08-24", time: "09:15" },
    { id: "TXN003", merchant: "Spotify", amount: "$9.99", status: "Completed", date: "2024-08-22", time: "16:45" },
    { id: "TXN004", merchant: "Adobe", amount: "$52.99", status: "Pending", date: "2024-08-20", time: "11:20" },
    { id: "TXN005", merchant: "GitHub", amount: "$4.00", status: "Completed", date: "2024-08-19", time: "08:30" },
    { id: "TXN006", merchant: "Vercel", amount: "$20.00", status: "Completed", date: "2024-08-18", time: "13:10" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        
        <div>
          <h1 className="text-3xl font-bold text-foreground">Transaction History</h1>
          <p className="text-muted-foreground mt-2">View all your payment transactions and their status.</p>
        </div>

        <div className="bg-card/10 backdrop-blur-sm p-6 rounded-lg border border-border/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Date Range</label>
              <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last year</option>
                <option>All time</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Status</label>
              <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option>All statuses</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Amount</label>
              <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Any amount</option>
                <option>$0 - $50</option>
                <option>$50 - $200</option>
                <option>$200+</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        <div className="bg-card/10 backdrop-blur-sm rounded-lg border border-border/20 overflow-hidden">
          <div className="p-6 border-b border-border/20">
            <h2 className="text-xl font-semibold text-card-foreground">All Transactions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/10">
                <tr>
                  <th className="text-left p-4 font-medium text-card-foreground">Transaction ID</th>
                  <th className="text-left p-4 font-medium text-card-foreground">Merchant</th>
                  <th className="text-left p-4 font-medium text-card-foreground">Amount</th>
                  <th className="text-left p-4 font-medium text-card-foreground">Status</th>
                  <th className="text-left p-4 font-medium text-card-foreground">Date</th>
                  <th className="text-left p-4 font-medium text-card-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={transaction.id} className="border-b border-border/10 hover:bg-muted/5">
                    <td className="p-4 text-card-foreground font-mono text-sm">{transaction.id}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">{transaction.merchant[0]}</span>
                        </div>
                        <span className="text-card-foreground font-medium">{transaction.merchant}</span>
                      </div>
                    </td>
                    <td className="p-4 text-card-foreground font-semibold">{transaction.amount}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          transaction.status === "Completed"
                            ? "bg-primary/20 text-primary"
                            : transaction.status === "Pending"
                              ? "bg-yellow-500/20 text-yellow-500"
                              : "bg-destructive/20 text-destructive"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      <div>
                        <div className="text-card-foreground">{transaction.date}</div>
                        <div className="text-sm">{transaction.time}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <button className="text-primary hover:text-primary/80 text-sm font-medium">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}