import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleAuth = async () => {
    setError('');
    try {
      if (isNewUser) {
        alert('Account created! Redirecting to dashboard...');
      } else {
        alert('Logged in! Redirecting to dashboard...');
      }
      router.push('/dashboard');
    } catch (err) {
      setError('Error logging in. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAEFE6] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[#FDEDEB] p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-[#2D4A4E] mb-6 text-center">
          {isNewUser ? 'Create an Account' : 'Log in to Parent Hub'}
        </h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none" />
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        <button onClick={handleAuth}
          className="w-full bg-[#F3C370] text-[#2D4A4E] py-3 rounded-full font-semibold hover:bg-[#e4b352] transition">
          {isNewUser ? 'Sign Up' : 'Log In'}
        </button>
        <p className="mt-4 text-sm text-center text-[#2D4A4E]">
          {isNewUser ? 'Already have an account?' : 'Don’t have an account?'}{' '}
          <button onClick={() => setIsNewUser(!isNewUser)} className="text-[#2D4A4E] font-bold underline">
            {isNewUser ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
}