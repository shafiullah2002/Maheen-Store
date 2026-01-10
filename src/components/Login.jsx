import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in successfully:", userCredential.user.email);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created & signed in:", userCredential.user.email);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign-in</h1>

        <form className="flex flex-col">
          <label className="text-sm font-medium mb-1">E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <label className="text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button
            type="submit"
            onClick={signIn}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded mb-4 transition-colors duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-xs text-gray-600 mb-4">
          By continuing, you agree to Amazon Clone Conditions of Use and Privacy Notice.
        </p>

        <button
          onClick={register}
          className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 rounded transition-colors duration-200"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
