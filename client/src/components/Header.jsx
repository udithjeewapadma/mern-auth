import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-5xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex gap-6'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            {currentUser ? (
              <Link to='/profile'>
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-7 w-7 rounded-full object-cover"
                />
              </Link>
            ) : (
              <Link to='/sign-in'>SignIn</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
