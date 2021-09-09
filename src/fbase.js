import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHc-wIgryenrPu81tudZlpMt3fLQCMN9o",
    authDomain: "nwitter-ac781.firebaseapp.com",
    projectId: "nwitter-ac781",
    storageBucket: "nwitter-ac781.appspot.com",
    messagingSenderId: "724084165181",
    appId: "1:724084165181:web:deafe218c1a105ed48b854"
  };

const app = initializeApp(firebaseConfig);
export const authService = getAuth();



