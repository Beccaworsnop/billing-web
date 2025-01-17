import Sidebar from "../components/sidebar"
import PaymentHistory from "../components/paymentHistory"
import BillingDetails from "../components/BillingDetails"
import dashboardcomponent from "../components/dashboardcomponent"
export default function Consult() {
  return (
    <div>
  <Sidebar></Sidebar>
  <main>
    <BillingDetails></BillingDetails>
    <PaymentHistory></PaymentHistory>
    <dashboardcomponent></dashboardcomponent>
    
  </main>
    </div>
  )
}
