import fees from "../data/fees.json";
import "./Fees.css";

export default function Fees() {
  return (
    <div className="page">
      <h1>Fees & Tuition</h1>
      <h3>{fees.term}</h3>

      {/* SUMMARY CARDS */}
      <div className="fee-summary">
        <div className="card total">
          <div className="label">Total Fees</div>
          <div className="amount">${fees.summary.total.toLocaleString()}</div>
        </div>

        <div className="card paid">
          <div className="label">Paid</div>
          <div className="amount">${fees.summary.paid.toLocaleString()}</div>
        </div>

        <div className="card outstanding">
          <div className="label">Outstanding</div>
          <div className="amount">${fees.summary.outstanding.toLocaleString()}</div>
        </div>
      </div>

      {/* TABLE */}
      <div className="fees-table">
        <div className="table-header">
          <div>Item</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Due Date</div>
          <div>Invoice</div>
        </div>

        {fees.fees.map((f, i) => (
          <div key={i} className="table-row">
            <div>{f.item}</div>
            <div>${f.amount.toLocaleString()}</div>

            <div className={f.status === "Paid" ? "paid-status" : "unpaid-status"}>
              {f.status}
            </div>

            <div>{f.due}</div>

            <div>
              <a href="#" className="invoice-btn">Download</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
