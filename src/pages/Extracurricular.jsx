import { useState } from "react";
import data from "../data/extracurricular.json";
import "./Extracurricular.css";

export default function Extracurricular() {
  const [selectedClub, setSelectedClub] = useState(null);

  return (
    <div className="page extracurricular-page">
      <h1>Extracurricular Activities</h1>
      <h3>{data.term} — {data.year}</h3>

      <div className="club-grid">
        {data.clubs.map((club, index) => (
          <div key={index} className="club-card">

            <span className={`club-tag tag-${club.category.toLowerCase()}`}>
              {club.category}
            </span>

            <h2 className="club-title">{club.name}</h2>
            <p className="club-desc">{club.description}</p>

            <p><strong>Teacher:</strong> {club.teacher}</p>
            <p><strong>Schedule:</strong> {club.schedule}</p>
            <p><strong>Location:</strong> {club.location}</p>

            <button
              className="join-btn"
              onClick={() => setSelectedClub(club)}
            >
              Join Club
            </button>

          </div>
        ))}
      </div>

      {/* ⭐ POPUP MODAL */}
      {selectedClub && (
        <div className="modal-overlay" onClick={() => setSelectedClub(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

            <h2 className="modal-title">Join {selectedClub.name}</h2>

            <p><strong>Teacher:</strong> {selectedClub.teacher}</p>
            <p><strong>Schedule:</strong> {selectedClub.schedule}</p>
            <p><strong>Location:</strong> {selectedClub.location}</p>

            <p className="modal-text">
              Are you sure you want to join this club?
              Your request will be sent to the activities coordinator.
            </p>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setSelectedClub(null)}
              >
                Cancel
              </button>

              <button
                className="confirm-btn"
                onClick={() => {
                  alert(`Request sent to join ${selectedClub.name}!`);
                  setSelectedClub(null);
                }}
              >
                Confirm
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}


