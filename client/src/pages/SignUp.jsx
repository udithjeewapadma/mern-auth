import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData , setFormData] = useState({});
  const [error, setError]= useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit =async (e) =>{
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/api/auth/signup",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    setLoading(false);
    if(data.success === false) {
      setError(true);
      return;
    }
    navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(true);
    }

  };
  return (
    <div className='p-2 max-w-sm mx-auto'>
      <h1 className='text-2xl text-center font-semibold my-4'>Sign Up</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-2 rounded-md text-sm'
            onChange={handleChange}
        />
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-2 rounded-md text-sm'
            onChange={handleChange}
        />
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-2 rounded-md text-sm'
            onChange={handleChange}
        />

        <button disabled={loading} className='bg-slate-700 text-white p-2 rounded-md uppercase hover:opacity-95 disabled:opacity-80 text-sm'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>

        <OAuth />
      </form>

      <div className='flex gap-1 mt-3'>
        <p className='text-sm'>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500 text-sm'>Sign In</span>
        </Link>
      </div>
      <p className=' text-red-600 mt-5'>{error && 'Something went wrong'}</p>
    </div>
  )
}
