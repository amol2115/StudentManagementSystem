import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [form, setForm] = useState({ name: '', email: '', course: '', enrollment: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/students', form);
      navigate('/');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="card p-4">
      <h3 className="mb-3">Add New Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input type="text" name="course" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Enrollment</label>
          <input type="text" name="enrollment" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;