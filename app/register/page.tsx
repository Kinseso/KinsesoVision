'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const register = async (e:any)=>{

    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/auth/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        name,
        password
      })
    });

    if(res.ok){
      router.push("/login");
    }

    setLoading(false);

  };

  return (

  <div className="min-h-screen flex items-center justify-center bg-black text-white">

    <form
      onSubmit={register}
      className="bg-zinc-900 p-8 rounded-xl space-y-4 w-96"
    >

      <h1 className="text-2xl font-bold">
        Create Account
      </h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="w-full p-2 rounded bg-zinc-800"
      />

      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full p-2 rounded bg-zinc-800"
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="w-full p-2 rounded bg-zinc-800"
      />

      <button
        disabled={loading}
        className="w-full bg-blue-600 p-2 rounded"
      >
        {loading ? "Creating..." : "Register"}
      </button>

      <p className="text-xs text-zinc-400">
        Already have an account? <a href="/login">Login</a>
      </p>

    </form>

  </div>

  );
}