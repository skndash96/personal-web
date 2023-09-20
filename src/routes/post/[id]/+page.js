import { error } from '@sveltejs/kit';
import { formatPost, firestore } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

export async function load({ params }) {
  let ref = doc(firestore, "post", params.id);
  let post;
  
  try {
    post = await getDoc(ref);
  } catch (e) {
    throw error(500, 'Something isnt wrong while fetching post.');
  }
  
  if (post.exists()) {
		return formatPost(post);
  } else {
    throw error(404, 'Not found');
  }
}
