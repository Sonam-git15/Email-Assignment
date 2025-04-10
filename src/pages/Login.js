import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={handleLogin} className="px-6 py-3 bg-blue-500 text-white rounded">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;