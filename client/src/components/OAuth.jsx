import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';
import { app } from '../firebase';
import {useDispatch} from 'react-redux';
import {signInSuccess} from '../redux/user/userSlice'

export default function OAuth() {

    const dispatch = useDispatch();
    const handleGoogleClick = async ()=> {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,

                }),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
        } catch (error) {
            console.log("could not logging with google", error);
        }
    }
  return (
    <button type='button'
    onClick={handleGoogleClick} 
    className=' bg-cyan-600 text-white rounded-md text-sm uppercase hover:opacity-95 p-2'>Continue with google</button>
  )
}
