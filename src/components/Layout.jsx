import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <Sidebar />
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Topbar />
                <div
                    style={{
                        padding: "24px",
                        background: "#f7f9fc",
                        flex: 1,
                        boxSizing: "border-box",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
