import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd9AJ0IB7SKnyhH63HNwuY2dYUSONrYr4",
  authDomain: "plantdiseases-de42e.firebaseapp.com",
  databaseURL: "https://plantdiseases-de42e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "plantdiseases-de42e",
  storageBucket: "plantdiseases-de42e.appspot.com",
  messagingSenderId: "394491110807",
  appId: "1:394491110807:web:3572948b799f9c59fe50d2",
  measurementId: "G-H3S3YDN4KN"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
