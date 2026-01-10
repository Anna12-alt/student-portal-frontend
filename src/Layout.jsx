export default function Layout({ children }) {
    return (
        <div className="layout">

            <div className="sidebar">
                {/* menu để ở đây */}
            </div>

            <div className="main-area">
                <div className="topbar">
                    {/* header ở đây */}
                </div>

                <div className="page-content">
                    {children}
                </div>
            </div>

        </div>
    );
}
