import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
    const [studentDetails, setStudentDetails] = useState({
        subject: '',
        assignmentSubmission: ''
    });
    const [submittedAssignments, setSubmittedAssignments] = useState([]); 
    const [isSubmitted, setIsSubmitted] = useState(false); 
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentDetails({ ...studentDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedAssignments([...submittedAssignments, studentDetails]); 
        setStudentDetails({ subject: '', assignmentSubmission: '' }); 
        setIsSubmitted(true); 
    };

    const handleNavigateToEducation = () => {
        navigate('/'); 
    };

    return (
        <div className="container mt-4">
            <div className="card shadow mb-4">
                <div className="card-body">
                    <h2 className="card-title">Student Dashboard</h2>
                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="form-group">
                            <label htmlFor="subject">Select Subject</label>
                            <select
                                id="subject"
                                name="subject"
                                value={studentDetails.subject}
                                onChange={handleChange}
                                className="form-control"
                                required
                            >
                                <option value="">Select a subject</option>
                                <option value="Math">Math</option>
                                <option value="Science">Science</option>
                                <option value="History">History</option>
                                <option value="English">English</option>
                                <option value="Geography">Geography</option>
                                <option value="Art">Art</option>
                                <option value="Physical Education">Physical Education</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="assignmentSubmission">Assignment Submission</label>
                            <textarea
                                id="assignmentSubmission"
                                name="assignmentSubmission"
                                value={studentDetails.assignmentSubmission}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>

          
            {submittedAssignments.length > 0 && (
                <div className="card shadow mt-4"> 
                    <div className="card-body">
                        <h5 className="card-title">Submitted Assignments</h5>
                        {submittedAssignments.map((assignment, index) => (
                            <div key={index} className="mb-2">
                                <p><strong>Subject:</strong> {assignment.subject}</p>
                                <p><strong>Assignment Submission:</strong> {assignment.assignmentSubmission}</p>
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
                        onClick={handleNavigateToEducation}
                    >
                        Next <span>&#8594;</span> 
                    </button>
                </div>
            )}
        </div>
    );
}

export default StudentDashboard;
