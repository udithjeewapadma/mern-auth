import {useSelector} from 'react-redux';
export default function Profile() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className=' p-2 max-w-sm mx-auto'>
      <h1 className=' text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.profilePicture} alt='profile' className=' h-24 w-24 self-center cursor-pointer rounded-full object-cover' />

        <input defaultValue={currentUser.username} type='text' id='username' placeholder='Username' className=' bg-slate-100 rounded-md p-2' />
        <input defaultValue={currentUser.email} type='email' id='email' placeholder='Email' className=' bg-slate-100 rounded-md p-2' />
        <input type='password' id='password' placeholder='Password' className=' bg-slate-100 rounded-md p-2' />

        <button className=' bg-slate-600 text-white p-2 rounded-md hover:opacity-95 disabled:opacity-80'>UPDATE</button>
      </form>
      <div className=' flex justify-between mt-5'>
          <span className=' text-red-600 cursor-pointer'>Delete Account</span>
          <span className=' text-red-600 cursor-pointer'>Sign Out</span>

      </div>
    </div>
  )
}
