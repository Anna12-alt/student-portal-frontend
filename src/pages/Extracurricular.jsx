import clubs from "../data/extracurricular.json";
import "./Extracurricular.css";

export default function Extracurricular() {
  return (
    <div className="page">
      <h1>Extracurricular Activities</h1>
      <h3>{clubs.term}</h3>

      <div className="club-grid">
        {clubs.clubs.map((club, i) => (
          <div key={i} className="club-card">
            <div className={`tag ${club.category.toLowerCase()}`}>
              {club.category}
            </div>

            <h2 className="club-name">{club.name}</h2>

            <p className="club-desc">{club.description}</p>

            <div className="club-info">
              <p><strong>Teacher:</strong> {club.teacher}</p>
              <p><strong>Schedule:</strong> {club.schedule}</p>
              <p><strong>Location:</strong> {club.room}</p>
            </div>

            <button className="join-btn">Join Club</button>
          </div>
        ))}
      </div>
    </div>
  );
}

