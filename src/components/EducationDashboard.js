import React from 'react';

function EducationDashboard({ adminData, teacherData, studentData }) {
    return (
        <div className="container mt-4">
            <h2>Welcome to the Education Dashboard</h2>

            <h5>Admin Details:</h5>
            {adminData.length > 0 ? (
                adminData.map((admin, index) => (
                    <div key={index}>
                        <p><strong>Name:</strong> {admin.name}</p>
                        <p><strong>Email:</strong> {admin.email}</p>
                        <p><strong>Role:</strong> {admin.role}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>No admin data submitted.</p>
            )}

            <h5>Teacher Details:</h5>
            {teacherData.length > 0 ? (
                teacherData.map((teacher, index) => (
                    <div key={index}>
                        <p><strong>Name:</strong> {teacher.name}</p>
                        <p><strong>Course:</strong> {teacher.course}</p>
                        <p><strong>Assignment Title:</strong> {teacher.assignmentTitle}</p>
                        <p><strong>Exam Date:</strong> {teacher.examDate}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>No teacher data submitted.</p>
            )}

            <h5>Submitted Assignments:</h5>
            {studentData.length > 0 ? (
                studentData.map((assignment, index) => (
                    <div key={index}>
                        <p><strong>Subject:</strong> {assignment.subject}</p>
                        <p><strong>Assignment URL:</strong> <a href={assignment.assignmentUrl} target="_blank" rel="noopener noreferrer">{assignment.assignmentUrl}</a></p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>No assignments submitted.</p>
            )}
        </div>
    );
}

export default EducationDashboard;
