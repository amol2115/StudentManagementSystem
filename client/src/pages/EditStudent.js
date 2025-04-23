import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  const [form, setForm] = useState({ name: '', email: '', course: '', enrollment: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/students/${id}`).then((res) => setForm(res.data)).catch(err => console.error('Error fetching student:', err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/students/${id}`, form);
      alert('Student updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div className="card p-4">
      <h3 className="mb-3">Edit Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input type="text" name="course" className="form-control" value={form.course} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Enrollment</label>
          <input type="text" name="enrollment" className="form-control" value={form.enrollment} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;