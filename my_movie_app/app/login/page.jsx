"use client";
import React, { useState } from "react";
import Image from "next/image";
import LoginForm from "./login-form";

// server component for SSR
export default function LoginPage() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen text-black bg-cover bg-center"
      style={{
        backgroundImage: "url('/bglogin.jpg')",
      }}
    >
      <LoginForm />
    </div>
  );
}
