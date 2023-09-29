import React from "react";
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "./logo.png";
import "./Sidebar.css"



function Sidebar() {
    return (
        <div className="sidebar-container">

            <div className="logo-container">
                <img src= {logo} alt="" style={{ width:175 ,height: '35%' }} />
            </div>

            <div className="sidebar-middle-container">
                <ul className="sidebar-ul">
                    <li className="sidebar-elements" >
                        <Link to="/dashboard" ><DashboardIcon /> Dashboard</Link>
                    </li>
                    <p style={{ marginLeft: '15px', fontSize: 'small', fontWeight: "bolder" }}>Admin Controls</p>
                    <li className="sidebar-elements">
                        <Link to="/users"> <PersonIcon />Users</Link>
                    </li>
                    <li className="sidebar-elements">
                        <Link to="/customers"> <GroupIcon />Customers</Link>
                    </li>
                    <li className="sidebar-elements">
                        <Link to="/customer-groups"> <GroupsIcon /> Customer Groups</Link>
                    </li>
                    <p style={{ marginLeft: '15px', fontSize: 'small', fontWeight: "bolder" }}>Other Features</p>
                    <li className="sidebar-elements">
                        <Link to="/solar-sites" > <SolarPowerIcon />Solar Site</Link>
                    </li>
                    <li className="sidebar-elements">
                        <Link to="/Inspection"> <SearchIcon />Inspections</Link>
                    </li>
                    <li className="sidebar-elements">
                        <Link to="/orders"> <LocalMallIcon />Orders</Link>
                    </li>
                </ul>
            </div>
            <div className="sidebar-bottom-container">
                <ul className="sidebar-ul">
                    <li className="sidebar-elements-logout">
                        <Link to="/login"> <LogoutIcon  />Log out</Link>
                    </li>
                </ul>
            </div>

        </div >
    );
}
export default Sidebar;