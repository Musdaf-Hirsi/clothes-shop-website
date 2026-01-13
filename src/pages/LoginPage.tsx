import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type Mode = 'login' | 'register';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register } = useAuth();
  
  const [mode, setMode] = useState<Mode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const from = (location.state as { from?: string })?.from || '/account';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let success: boolean;
      
      if (mode === 'login') {
        success = await login(email, password);
        if (!success) {
          setError('Invalid email or password. Please try again or register.');
        }
      } else {
        success = await register(name, email, password);
        if (!success) {
          setError('An account with this email already exists.');
        }
      }

      if (success) {
        navigate(from, { replace: true });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-light tracking-widest">
            KARAMA
          </Link>
          <h1 className="text-2xl font-light mt-6">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {mode === 'login' 
              ? 'Sign in to your account to continue' 
              : 'Join us for exclusive access and benefits'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
              minLength={6}
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-lg text-sm tracking-wide hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          >
            {loading 
              ? 'Please wait...' 
              : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          {mode === 'login' ? (
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <button 
                onClick={() => { setMode('register'); setError(''); }}
                className="underline hover:no-underline"
              >
                Create one
              </button>
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <button 
                onClick={() => { setMode('login'); setError(''); }}
                className="underline hover:no-underline"
              >
                Sign in
              </button>
            </p>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link to="/shop" className="text-sm text-gray-500 hover:text-black">
            Continue as guest
          </Link>
        </div>
      </div>
    </div>
  );
}
