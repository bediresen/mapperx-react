import React from "react";
import "./Dashboard.css"

function Dashboard() {
    return (
        <div className="page">
            <div className="sidebar">Sidebar (200px)</div>
            <div className="content">
                <div className="top-content">
                    <div className="left-top"> Left top (50%)</div>
                    <div className="right-top">Right Top (50%)</div>
                </div>

                <div className="bottom-content">Bottom Content</div>

            </div>
        </div>
    )
}
export default Dashboard;