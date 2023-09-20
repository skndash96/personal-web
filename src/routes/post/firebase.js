import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

function formatPost(p) {
  let data = p.data();
  
  data.id = p.id;
  
  data.time = new Date(
    data.timestamp.seconds*1000
  ).toDateString();
  
  let title = data.text.match("#\s*(.+?)\\n");
  
  data.title = (title && title.length > 1)
    ? title[1]
    : "Blog Post";
  
  return data;
}

export { firestore, formatPost };