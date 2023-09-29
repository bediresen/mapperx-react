import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import "./App.css"

function Dashboard() {
  return <div>Dashboard</div>;
}

function Users() {
  return <div>Users</div>;
}

function Customers() {
  return <div>Customers İçeriği</div>;
}

function CustomerGroups() {
  return <div>Customer Groups İçeriği</div>;
}
function SolarSite() {
  return <div>Solar Site</div>;
}
function Inspection() {
  return <div>Inspection</div>;
}
function Orders() {
  return <div>Orders</div>;
}


function App() {
  return (
    <div className='app-container'>
    <Router> 
       <div className='sidebar'> <Sidebar / > </div>
        <div className='content '>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customer-groups" element={<CustomerGroups />} />
          <Route path="/solar-site" element={<SolarSite />} />
          <Route path="/inspection" element={<Inspection />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        </div>
    </Router>
    </div>

  );
}

export default App;