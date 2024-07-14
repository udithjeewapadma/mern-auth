import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-2 max-w-sm mx-auto'>
      <h1 className='text-2xl text-center font-semibold my-4'>Sign Up</h1>

      <form className='flex flex-col gap-2'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-2 rounded-md text-sm'/>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-2 rounded-md text-sm'/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-2 rounded-md text-sm'/>

        <button className='bg-slate-700 text-white p-2 rounded-md uppercase hover:opacity-95 disabled:opacity-80 text-sm'>Sign Up</button>
      </form>

      <div className='flex gap-1 mt-3'>
        <p className='text-sm'>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500 text-sm'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
