import React from 'react';

const EmailCard = ({ email }) => (
  <div className="p-4 border rounded shadow my-2">
    <p><strong>From:</strong> {email.from}</p>
    <p><strong>To:</strong> {email.to}</p>
    <p><strong>Subject:</strong> {email.subject}</p>
    <p><strong>Message:</strong> {email.body}</p>
  </div>
);

export default EmailCard;