import React, { useState } from 'react';
import api from '../api';
import Navbar from '../components/Navbar';

const Compose = () => {
  const [formData, setFormData] = useState({ to: '', subject: '', body: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/emails', formData);
      alert('Email sent!');
      setFormData({ to: '', subject: '', body: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send email.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl mb-4">Compose Email</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="Recipient"
            className="border p-2 w-full"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border p-2 w-full"
            required
          />
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Message"
            className="border p-2 w-full"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Compose;