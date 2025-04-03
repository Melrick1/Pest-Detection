import { 
  signInWithEmailAndPassword,
  signOut, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail, 
  updateProfile,  
} from 'firebase/auth';
import { Auth } from './FirebaseAPI.js';

{/* SignUp */}
const AuthSignUp = async (name, email, password1, password2, setErrorMessage) => {
  try {
      // Check if invalid
      if (name.trim() === ""){
        setErrorMessage("Nama pengguna diperlukan")
        return;
      }
      if (password1 !== password2) {
          setErrorMessage("Password tidak sama");
          return;
      }

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(Auth, email, password1);
      const user = userCredential.user;
      await signOut(Auth);

      // Set display name in Firebase Auth
      await updateProfile(user, { displayName: name });

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
    navigate("/")
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
    setErrorMessage("Permintahan reset password telah dikirim, cek email anda")
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