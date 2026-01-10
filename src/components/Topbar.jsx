export default function Topbar() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 24px",
                borderBottom: "1px solid #e4e8ec",
                background: "white",
                height: "64px",
                boxSizing: "border-box",
            }}
        >
            <div>
                <h1
                    style={{
                        fontFamily: "EB Garamond, serif",
                        fontSize: "24px",
                        fontWeight: 600,
                        margin: 0,
                        color: "#0A1A2F",
                    }}
                >
                    Academic Portal
                </h1>
                <p
                    style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "#6B7380",
                        fontFamily: "Inter, sans-serif",
                    }}
                >
                    Emily Tran — Year 11 · IGCSE · Phoenix House
                </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#0A1A2F",
                    }}
                >
                    Emily Tran
                </span>
                <div
                    style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "#C5A76A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "white",
                    }}
                >
                    E
                </div>
            </div>
        </div>
    );
}
