import results from "../data/results.json";

export default function Results() {
  return (
    <div>
      <h2
        style={{
          fontFamily: "EB Garamond, serif",
          fontSize: "32px",
          fontWeight: 600,
          marginBottom: "20px",
          color: "#0A1A2F"
        }}
      >
        IGCSE Results — Term 2
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
          fontFamily: "Inter, sans-serif",
          fontSize: "15px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          borderRadius: "8px",
          overflow: "hidden"
        }}
      >
        <thead>
          <tr style={{ background: "#f1f3f7", textAlign: "left" }}>
            <th style={{ padding: "14px 16px" }}>Subject</th>
            <th style={{ padding: "14px 16px" }}>Term</th>
            <th style={{ padding: "14px 16px" }}>Grade</th>
            <th style={{ padding: "14px 16px" }}>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, index) => (
            <tr key={index} style={{ borderTop: "1px solid #e4e8ec" }}>
              <td style={{ padding: "12px 16px" }}>{r.subject}</td>
              <td style={{ padding: "12px 16px" }}>{r.term}</td>
              <td
                style={{
                  padding: "12px 16px",
                  fontWeight: 600,
                  color: r.grade === "A*" || r.grade === "A" ? "#0A1A2F" : "#444"
                }}
              >
                {r.grade}
              </td>
              <td style={{ padding: "12px 16px" }}>{r.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
