import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherDashboard() {
    const [teacherDetails, setTeacherDetails] = useState({
        name: '',
        course: '',
        assignmentTitle: '',
        examDate: ''
    });
    const [submittedTeachers, setSubmittedTeachers] = useState([]); 
    const [isSubmitted, setIsSubmitted] = useState(false); 
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeacherDetails({ ...teacherDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedTeachers([...submittedTeachers, teacherDetails]); 
        setTeacherDetails({ name: '', course: '', assignmentTitle: '', examDate: '' }); 
        setIsSubmitted(true); 
    };

    const handleNavigateToStudent = () => {
        navigate('/student'); 
    };

    return (
        <div className="container mt-4">
            <div className="card shadow mb-4"> 
                <div className="card-body">
                    <h2 className="card-title">Teacher Dashboard</h2>
                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={teacherDetails.name}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="course">Select Course</label>
                            <select
                                id="course"
                                name="course"
                                value={teacherDetails.course}
                                onChange={handleChange}
                                className="form-control"
                                required
                            >
                                <option value="">Select a course</option>
                                <option value="Math">Math</option>
                                <option value="Science">Science</option>
                                <option value="History">History</option>
                                <option value="English">English</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="assignmentTitle">Assignment Title</label>
                            <input
                                type="text"
                                id="assignmentTitle"
                                name="assignmentTitle"
                                value={teacherDetails.assignmentTitle}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="examDate">Exam Date</label>
                            <input
                                type="date"
                                id="examDate"
                                name="examDate"
                                value={teacherDetails.examDate}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>

           
            {submittedTeachers.length > 0 && (
                <div className="card shadow mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Submitted Teacher Details</h5>
                        {submittedTeachers.map((teacher, index) => (
                            <div key={index} className="mb-2">
                                <p><strong>Name:</strong> {teacher.name}</p>
                                <p><strong>Course:</strong> {teacher.course}</p>
                                <p><strong>Assignment Title:</strong> {teacher.assignmentTitle}</p>
                                <p><strong>Exam Date:</strong> {teacher.examDate}</p>
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
                        onClick={handleNavigateToStudent}
                    >
                        Next <span>&#8594;</span> 
                    </button>
                </div>
            )}
        </div>
    );
}

export default TeacherDashboard;
