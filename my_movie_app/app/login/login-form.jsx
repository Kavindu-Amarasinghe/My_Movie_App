"use client";

import { useState } from "react";
import Image from "next/image";

// client component for client side rendering
export default function loginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const validateForm = () => {
    if (!email) {
      setEmailError("Email is required!");
      return false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setpasswordError("Password is required!");
      return false;
    } else {
      setpasswordError("");
    }

    return true;
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log("Form Data:", { email: email, password: password });
    }
  };

  return (
    <div>
      <div className="w-[380px] mx-auto">
        <div className="bg-white shadow-2xl border border-gray-200 rounded-2xl p-4 shadow-transparent">
          <form onSubmit={handelSubmit} className="space-y-6">
            <img
              src="/logo 1.png"
              alt="CineSphere Logo"
              className="mx-auto"
              style={{ height: "50px" }}
            />
            {/* <h3 className="text-center text-3xl font-semibold text-gray-900 ">
              Cine<span className="text-green-500">Sphere</span>
            </h3> */}

            {/* email section */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2 "
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="emial"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 block p-2.5 w-full h-10 rounded-lg focus:ring-1  focus:ring-blue-200"
                placeholder="yourname@gmail.com"
              />
              {emailError && (
                <div className="text-red-600 text-xs mt-2 ml-1">
                  {emailError}
                </div>
              )}
            </div>

            {/* password section */}
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 block p-2.5 w-full h-10 rounded-lg focus:ring-1  focus:ring-blue-200"
                placeholder="••••••••"
              />
              {passwordError && (
                <div className="text-red-600 text-xs mt-2 ml-1">
                  {passwordError}
                </div>
              )}
            </div>

            {/* remeber Me */}
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="remember"
                    className="bg-gray-50 border border-gray-300 h-4 w-4 rounded-2xl hover:border-blue-700"
                  />
                </div>
                <div className="text-sm ml-3">
                  <label
                    htmlFor="remeber"
                    className="font-medium text-gray-900"
                  >
                    Remeber Me
                  </label>
                </div>
              </div>
              <a
                href="/forget-password"
                className="text-sm text-blue-700 font-medium hover:underline ml-auto"
              >
                Forget Password?
              </a>
            </div>

            {/* submit button */}
            <div>
              <button
                type="submit"
                className="bg-blue-700 w-full text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-2xl px-5 py-2.5 font-medium "
              >
                Sign In
              </button>
            </div>

            {/* sign up section */}
            <div className="text-sm font-medium text-gray-500">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-semibold text-blue-700 hover:underline"
              >
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
