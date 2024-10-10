import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/teacher" element={<TeacherDashboard />} />
                <Route path="/student" element={<StudentDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
