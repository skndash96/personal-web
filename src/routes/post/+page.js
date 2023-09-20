import { error } from '@sveltejs/kit';
import { formatPost, firestore } from "./firebase.js";
import { query, collection, limit, orderBy, getDocs } from "firebase/firestore";

export async function load() {
  let q = query(
    collection(firestore, "post"),
    orderBy("timestamp", "desc"),
    limit(10)
  );
  
  let result;
  
  try {
    result = await getDocs(q);
  } catch (e) {
    throw error(500, "Failed to get recent blog posts.");
  }
  
  let posts = [];
  
  result.forEach(p => {
    posts.push(formatPost(p));
  });
  
  return { posts }
}
