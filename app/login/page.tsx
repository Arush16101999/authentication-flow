"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { isValidEmail } from "@/utils/validators";
import { Input } from "@/components/Input";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      return setError("All fields are required.");
    }
    if (!isValidEmail(email)) {
      return setError("Enter a valid email address.");
    }

    if (email === "test@visionexdigital.com.au" && password === "password123") {
      login();
      router.push("/dashboard");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-16 bg-[#0F0F0F] text-white">
        <div className="max-w-md w-full mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/logo.svg" alt="Room.me" width={30} height={30} />
            <span className="text-xl font-semibold">ROOM.ME</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome back to Room.me!</h1>
          <p className="text-sm mb-8 text-gray-400">
            Room.me is an innovative video conference product that
            revolutionizes virtual meetings.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && <ErrorMessage message={error} />}
            <Input
              label="Email address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <Button type="submit">Sign in</Button>
            <button
              type="button"
              className="w-full border text-white py-2 rounded hover:bg-gray-800"
            >
              <Image
                src="/google.svg"
                alt="Google"
                width={20}
                height={20}
                className="inline mr-2"
              />{" "}
              Sign in with Google
            </button>
          </form>

          <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox mr-2" /> Remember
              for 30 days
            </label>
            <a href="#" className="text-purple-400 hover:underline">
              Forgot password
            </a>
          </div>

          <p className="mt-8 text-sm text-center text-gray-400">
            Doesn’t have account?{" "}
            <a href="#" className="text-white underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/login.png"
          alt="Login visual"
          layout="fill"
          objectFit="cover"
          className="rounded-4xl"
        />
        <div className="absolute bottom-10 left-10 bg-white/30 backdrop-blur-md p-6 rounded-xl w-10/12 max-w-xxl">
          <p className="text-xl text-white ">
            “We love the screen sharing and whiteboarding features, which have
            improved our presentations. Room.me has become an essential tool for
            our team, allowing us to collaborate effectively. Highly
            recommended!”
          </p>
          <p className="mt-3 font-semibold text-white">
            Sarah Markivoc - Project Manager
          </p>
        </div>
      </div>
    </div>
  );
}
