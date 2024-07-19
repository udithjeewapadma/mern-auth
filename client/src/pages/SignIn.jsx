import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SignIn() {
  const [formData , setFormData] = useState({});
  const {loading, error} = useSelector((state)=> state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit =async (e) =>{
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    
    if(data.success === false) {
      dispatch(signInFailure(data));
      return;
    }
    dispatch(signInSuccess(data));
    navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
    }

  };
  return (
    <div className='p-2 max-w-sm mx-auto'>
      <h1 className='text-2xl text-center font-semibold my-4'>Sign In</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>

        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-2 rounded-md text-sm'
            onChange={handleChange}
        />
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-2 rounded-md text-sm'
            onChange={handleChange}
        />

        <button disabled={loading} className='bg-slate-700 text-white p-2 rounded-md uppercase hover:opacity-95 disabled:opacity-80 text-sm'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>

      <div className='flex gap-1 mt-3'>
        <p className='text-sm'>Don't have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500 text-sm'>Sign Up</span>
        </Link>
      </div>
      <p className=' text-red-600 mt-5'>{error ? error.message || 'Something went wrong': ''}</p>
    </div>
  )
}
