"use client";
import React from "react";
import Image from "next/image";
import LoginForm from "./login-form";

// server component for SSR
export default function LoginPage() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen text-black"
      style={{
        backgroundImage: "url('/logingbg.jpg')",
      }}
    >
      <LoginForm />
    </div>
  );
}
