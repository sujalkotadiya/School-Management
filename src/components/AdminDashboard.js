import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const [adminDetails, setAdminDetails] = useState({
        name: '',
        email: '',
        role: ''
    });
    const [submittedAdmins, setSubmittedAdmins] = useState([]); 
    const [isSubmitted, setIsSubmitted] = useState(false); 
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminDetails({ ...adminDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedAdmins([...submittedAdmins, adminDetails]);
        setAdminDetails({ name: '', email: '', role: '' }); 
        setIsSubmitted(true); 
    };

    const handleNavigateToTeacher = () => {
        navigate('/teacher'); 
    };

    return (
        <div className="container mt-4">
            <div className="card shadow"> 
                <div className="card-body">
                    <h2 className="card-title">Admin Dashboard</h2>
                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={adminDetails.name}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={adminDetails.email}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={adminDetails.role}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>

           
            {submittedAdmins.length > 0 && (
                <div className="card shadow mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Submitted Admin Details</h5>
                        {submittedAdmins.map((admin, index) => (
                            <div key={index} className="mb-2">
                                <p><strong>Name:</strong> {admin.name}</p>
                                <p><strong>Email:</strong> {admin.email}</p>
                                <p><strong>Role:</strong> {admin.role}</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            )}

 
            {isSubmitted && (
                <div className="text-center mt-3">
                    <button 
                        className="btn btn-secondary"
                        onClick={handleNavigateToTeacher}
                    >
                        Next <span>&#8594;</span> 
                    </button>
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;
