import React, { useState } from 'react'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate=useNavigate();
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const handelChange=(e)=>{
        e.preventDefault();
        if(email && password){
            navigate("/")
        }
        else{
            alert("Plase fill correct information");
        }

    }
  return (
    <div>
      <h2>Login to Your Account</h2>
       <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
     
  )
}

export default SignIn
