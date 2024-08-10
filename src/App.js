import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/user/Home';
import Login from './components/user/Login';
import Register from './components/user/Register';
import ViewComplaintStatus from './components/user/ViewComplaintStatus';
import Feedback from './components/user/Feedback';
import GetAdminContact from './components/user/GetAdminContact';
import OfficerLogin from './components/officer/OfficerLogin';
import ViewComplaint from './components/officer/ViewComplaint';
import UpdateStatus from './components/officer/UpdateStatus';
import UpdateProofOfWork from './components/officer/UpdateProofOfWork';
import AdminLogin from './components/admin/AdminLogin';
import GenerateCredentials from './components/admin/GenerateCredentials';
import ManageAccounts from './components/admin/ManageAccounts';
import ViewAccounts from './components/admin/ViewAccounts';
import Navbar from './components/Navbar';
import Complaint from './components/user/Complaint';
import ComplaintPost from './components/user/ComplaintPost';
import Users from './components/user/Users';
import './App.css';
 // Assuming Users page is in a pages folder

const App = () => {
  const [isUserDashboardOpen, setIsUserDashboardOpen] = useState(false);

  const toggleUserDashboard = () => {
    setIsUserDashboardOpen(!isUserDashboardOpen);
  };
    const [complaints, setComplaints] = useState([]);
  
    const addComplaint = (newComplaint) => {
      setComplaints([...complaints, newComplaint]);
    };
  return (
    <Router>
      <div className="App">
        
        <Navbar toggleUserDashboard={toggleUserDashboard} />
        <Users isOpen={isUserDashboardOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view-complaint-status" element={<ViewComplaintStatus />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/admin-contact" element={<GetAdminContact />} />
          <Route path="/officer-login" element={<OfficerLogin />} />
          <Route path="/officer/view-complaints" element={<ViewComplaint />} />
          <Route path="/officer/update-status" element={<UpdateStatus />} />
          <Route path="/officer/update-proof" element={<UpdateProofOfWork />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/generate-credentials" element={<GenerateCredentials />} />
          <Route path="/admin/manage-accounts" element={<ManageAccounts />} />
          <Route path="/admin/view-accounts" element={<ViewAccounts />} />
          <Route path="/user" element={<Users />} />
          <Route path="/complaint" element={<Complaint addComplaint={addComplaint} />} />
          <Route path="/posts" element={<ComplaintPost complaints={complaints} />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
