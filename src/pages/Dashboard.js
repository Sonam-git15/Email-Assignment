import React, { useEffect, useState } from 'react';
import api from '../api';
import EmailCard from '../components/EmailCard';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    api.get('/emails')
      .then(res => setEmails(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl mb-4">Communication History</h2>
        {emails.map(email => <EmailCard key={email.id} email={email} />)}
      </div>
    </div>
  );
};

export default Dashboard;
