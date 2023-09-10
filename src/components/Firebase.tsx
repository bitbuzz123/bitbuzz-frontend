// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjy7ppsorWAi33psnb4VuCXHnJCuKiST4",
  authDomain: "bitbuzz-398321.firebaseapp.com",
  projectId: "bitbuzz-398321",
  storageBucket: "bitbuzz-398321.appspot.com",
  messagingSenderId: "445904370961",
  appId: "1:445904370961:web:87ed363be6833eb3d160b0",
  measurementId: "G-SBZDBGGMC8"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
export const signInWithGoogle= () =>{
 signInWithPopup(auth,provider).then((result)=>{

 console.log(result);

}).catch((error) =>{
  
 console.log(error);
 });
}