import materials from "../data/materials.json";
import "./Materials.css";

export default function Materials() {
  return (
    <div className="page">
      <h1>Study Materials — {materials.term}</h1>

      <div className="materials-list">
        {materials.subjects.map((subj, i) => (
          <div key={i} className="subject-section">
            <h2 className="subject-title">{subj.subject}</h2>

            <div className="material-table">
              {subj.materials.map((item, idx) => (
                <div key={idx} className="material-row">
                  <div className="material-icon">📄</div>

                  <div className="material-info">
                    <div className="material-name">{item.title}</div>
                    <div className="material-type">{item.type}</div>
                  </div>

                  <a href={item.link} className="download-btn">
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
