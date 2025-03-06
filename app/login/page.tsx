'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (!result?.error) {
      router.push('/dashboard'); // Redirect after successful login
    } else {
      alert('Login failed!');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
