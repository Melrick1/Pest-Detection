import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { collection, setDoc, doc } from 'firebase/firestore';
import { Auth, FS } from '../../config/FirebaseAPI.js';

{/* User Authentication */}
const AuthSignIn = async (email, password, navigate, setErrorMessage) => {
  try {
    // Sign in with email and password
    await signInWithEmailAndPassword(Auth, email, password);

    navigate('/Home')
  }
  catch (error) {
    ErrorHandler(error, setErrorMessage);
  }
};

{/* SignUp */}
const AuthSignUp = async (Name, email, password1, setErrorMessage) => {
  try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(Auth, email, password1);

      const docName = email

      // Update user profile with data
      await setDoc(doc(collection(FS, 'users'), docName), {
          uid: userCredential.user.uid,
          userName: Name,
      });

      // Registered successfully
      await setErrorMessage("Sign Up Berhasil")
      console.log("Sign Up Berhasil")
  }
  catch (error) {
    ErrorHandler(error, setErrorMessage);
  }
}

const ResetPasswordReq = async (email, setErrorMessage) => {
  try {
    await sendPasswordResetEmail(Auth, email)
    setErrorMessage('Permintahan reset password telah dikirim, cek email anda')
  }
  catch (error) {
    ErrorHandler(error, setErrorMessage);
  }
}

{/* Error Handler */}
const ErrorHandler = (error, setErrorMessage) => {
  switch(error.code){
    case 'auth/invalid-email':
      setErrorMessage("Format Email salah");
      break;
    case 'auth/email-already-in-use':
      setErrorMessage("Email sudah dipakai");
      break;
    case 'auth/missing-password':
      setErrorMessage("Password tidak boleh kosong")
      break
    case 'auth/weak-password':
      setErrorMessage("Password anda lemah");
      break;
    case 'auth/invalid-credential':
      setErrorMessage("Email atau Password salah");
      break;
    default:
      setErrorMessage("Terjadi kesalahan");
      console.log(error.message)
      break;
  }
}

export { AuthSignIn, AuthSignUp, ResetPasswordReq };