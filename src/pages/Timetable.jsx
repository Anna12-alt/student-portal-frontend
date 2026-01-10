import timetable from "../data/timetable.json";
import "./Timetable.css";

export default function Timetable() {
  const days = Object.keys(timetable.schedule);

  return (
    <div className="page timetable-page">
      <h1>Timetable — {timetable.term}</h1>
      <h3>{timetable.year} · {timetable.week}</h3>

      <div className="timetable-table-wrapper">
        {days.map((day) => (
          <div key={day} className="day-section">
            <h2 className="day-title">{day}</h2>

            <table className="timetable-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Teacher</th>
                  <th>Room</th>
                </tr>
              </thead>

              <tbody>
                {timetable.schedule[day].map((p, idx) => (
                  <tr key={idx}>
                    <td>{p.period}</td>
                    <td>{p.time}</td>
                    <td>{p.subject}</td>
                    <td>{p.teacher}</td>
                    <td>{p.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}


