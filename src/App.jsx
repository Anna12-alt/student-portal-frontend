import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Results from "./pages/Results";
import Timetable from "./pages/Timetable";
import Materials from "./pages/Materials";
import Fees from "./pages/Fees";
import Extracurricular from "./pages/Extracurricular";
import Library from "./pages/Library";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          {/* Default vào /results */}
          <Route path="/" element={<Navigate to="/results" replace />} />

          {/* Pages */}
          <Route path="/results" element={<Results />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/extracurricular" element={<Extracurricular />} />
          <Route path="/library" element={<Library />} />
          <Route path="/support" element={<Support />} />

          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/results" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;



