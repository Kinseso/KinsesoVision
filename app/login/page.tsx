'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage(){

const router = useRouter();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);

const login = async(e:any)=>{

e.preventDefault();

setLoading(true);

const res = await signIn("credentials",{
email,
password,
redirect:false
});

if(!res?.error){
router.push("/cloud");
}

setLoading(false);

};

return(

<div className="min-h-screen flex items-center justify-center bg-black text-white">

<form
onSubmit={login}
className="bg-zinc-900 p-8 rounded-xl space-y-4 w-96"
>

<h1 className="text-2xl font-bold">
Login
</h1>

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
{loading ? "Signing in..." : "Login"}
</button>

<p className="text-xs text-zinc-400">
No account? <a href="/register">Register</a>
</p>

</form>

</div>

);

}