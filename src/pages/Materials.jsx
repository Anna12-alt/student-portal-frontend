import materials from "../data/materials.json";
import "./Materials.css";

export default function Materials() {
  return (
    <div className="page materials-page">

      <h1>Study Materials — {materials.term}</h1>

      {materials.materials.map((subject, index) => (
        <div key={index} className="subject-section">

          {/* Subject title */}
          <h2 className="subject-title">{subject.subject}</h2>

          <div className="materials-list">
            {subject.items.map((item, i) => (
              <div key={i} className="material-card">

                {/* PDF icon + text */}
                <div className="material-left">
                  <span className="pdf-icon">📄</span>
                  <div>
                    <div className="material-title">{item.title}</div>
                    <div className="material-type">{item.type}</div>
                  </div>
                </div>

                {/* Download button */}
                <a href={item.file} download className="download-btn">
                  Download
                </a>

              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}


