import { 
  signInWithEmailAndPassword,
  signOut, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail, 
  updateProfile,  
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { Auth, fireStore } from './FirebaseAPI.js';

{/* SignUp */}
const AuthSignUp = async (Name, email, password1, setErrorMessage) => {
  try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(Auth, email, password1);
      const user = userCredential.user;

      // Set display name in Firebase Auth
      await updateProfile(user, { displayName: Name });

      // Update user data in Firestore
      await setDoc(doc(fireStore, 'Users', user.uid), {
          userName: Name,
          email: email,
      });

      // Registered successfully
      await setErrorMessage("Sign Up Berhasil")
      console.log("Sign Up Berhasil")
  }
  catch (error) {
    ErrorHandler(error, setErrorMessage);
  }
}

{/* SignIn */}
const AuthSignIn = async (email, password, navigate, setErrorMessage) => {
  try {
    await signInWithEmailAndPassword(Auth, email, password);

    navigate('/')
  }
  catch (error) {
    ErrorHandler(error, setErrorMessage);
  }
};

{/* SignOut */}
const AuthSignOut = async () => {
  try {
    await signOut(Auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
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

export { AuthSignUp, AuthSignIn, AuthSignOut, ResetPasswordReq };