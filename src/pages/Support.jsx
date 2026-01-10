import { useState } from "react";
import "./Support.css";

export default function Support() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000); // tự tắt thông báo sau 3s
  };

  return (
    <div className="page">
      <h1>Support Request</h1>
      <h3>Need help? Submit a request below.</h3>

      {submitted && (
        <div className="success-box">
          🎉 Your support request has been submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="support-form">

        {/* CATEGORY */}
        <label>Support Category</label>
        <select required>
          <option value="">Select category...</option>
          <option>IT Support</option>
          <option>Academic Assistance</option>
          <option>Finance & Tuition</option>
          <option>Wellbeing & Counselling</option>
          <option>Other</option>
        </select>

        {/* PRIORITY */}
        <label>Priority</label>
        <select required>
          <option value="">Select priority...</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        {/* SUBJECT */}
        <label>Subject</label>
        <input type="text" placeholder="Short title for your issue..." required />

        {/* DESCRIPTION */}
        <label>Description</label>
        <textarea
          placeholder="Describe your issue in detail..."
          rows="5"
          required
        ></textarea>

        {/* FILE */}
        <label>Attachment (optional)</label>
        <input type="file" />

        {/* SUBMIT BUTTON */}
        <button type="submit" className="submit-btn">
          Submit Request
        </button>

      </form>
    </div>
  );
}
