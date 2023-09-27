import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUZUxsqb7VbKCueCzvAx5OxO7N89Sgh1o",
  authDomain: "blog-3e2fb.firebaseapp.com",
  projectId: "blog-3e2fb",
  storageBucket: "blog-3e2fb.appspot.com",
  messagingSenderId: "377087939787",
  appId: "1:377087939787:web:8d0eaa79cc9e8df21bb74e",
  measurementId: "G-7XNBFZTZL6"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

function formatPost(p, direct) {
  let data = direct ? p : p.data();
  
  data.text = data.text.replaceAll("\\n", "\n");
  
  let lines = data.text
    .split("\n")
    .slice(0,4)
    .filter(Boolean);
  
  data.time = new Date(
    data.timestamp?.seconds*1000
  ).toDateString();
  
  data.id = p.id;
  data.title = lines[0] || "Blog Post";
  data.desc = lines[1] || lines[2] || "";
  
  return data;
}

export { firestore, auth, formatPost };