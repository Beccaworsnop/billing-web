export default function PaymentHistory() {
    const history = [
      { amount: "/", status: "/", recipient: "/", date: "00/00/0000", method: "Visa" },
      { amount: "/", status: "/", recipient: "/", date: "00/00/0000", method: "paypal" },
    ]; 
  
    return (
      <table >
        <thead>
          <tr>
            <th >Amount</th>
            <th>Status</th>
            <th>Recipient</th>
            <th>Date</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.amount}</td>
              <td>{entry.status}</td>
              <td>{entry.recipient}</td>
              <td>{entry.date}</td>
              <td>{entry.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
);
}