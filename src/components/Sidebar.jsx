import { NavLink } from "react-router-dom";

const linkBase = {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
    padding: "10px 0",
    display: "block",
};

const activeStyle = {
    backgroundColor: "#112342",
    borderRadius: "6px",
    paddingLeft: "8px",
};

export default function Sidebar() {
    return (
        <div
            style={{
                width: "230px",
                backgroundColor: "#0A1A2F", // navy
                color: "white",
                height: "100vh",
                padding: "20px 18px",
                borderRight: "3px solid #C5A76A", // gold
                boxSizing: "border-box",
            }}
        >
            <h2
                style={{
                    color: "#C5A76A",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "28px",
                    fontFamily: "EB Garamond, serif",
                }}
            >
                Student Portal
            </h2>

            <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <NavLink
                    to="/results"
                    style={({ isActive }) =>
                        isActive ? { ...linkBase, ...activeStyle } : linkBase
                    }
                >
                    📊 Results
                </NavLink>
                <NavLink
                    to="/timetable"
                    style={({ isActive }) =>
                        isActive ? { ...linkBase, ...activeStyle } : linkBase
                    }
                >
                    🗓 Timetable
                </NavLink>
                <NavLink
                    to="/materials"
                    style={({ isActive }) =>
                        isActive ? { ...linkBase, ...activeStyle } : linkBase
                    }
                >
                    📁 Study Materials
                </NavLink>
                <NavLink
                    to="/fees"
                    style={({ isActive }) =>
                        isActive ? { ...linkBase, ...activeStyle } : linkBase
                    }
                >
                    💳 Fees & Tuition
                </NavLink>
                <NavLink
                    to="/extracurricular"
                    style={({ isActive }) =>
                        isActive ? { ...linkBase, ...activeStyle } : linkBase
                    }
                >
                    🎭 Extracurricular
                </NavLink>
                <NavLink
                    to="/library"
                    style={({ isActive }) =>
                        isActive ? { ...linkBase, ...activeStyle } : linkBase
                    }
                >
                    📚 Library
                </NavLink>
                <NavLink
                    to="/support"
                    style={({ isActive }) =>
                        isActive ? { ...linkBase, ...activeStyle } : linkBase
                    }
                >
                    💬 Support
                </NavLink>
            </nav>
        </div>
    );
}
