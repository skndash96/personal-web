<script>
  import showdown from "showdown";
  import { fly } from "svelte/transition";
  import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
  import { setDoc, doc, serverTimestamp } from "firebase/firestore";
  import { auth, firestore } from "../firebase.js";

  let conv = new showdown.Converter();
  
  let signed = false;
  
  let email, password,
    path, markdown, mdHtml,
    authmsg, postmsg,
    baderror = false;
  
  preview();
  function preview() {
    mdHtml = conv.makeHtml(markdown || "*there's nothing to show*");
  }
  
  async function addPost() {
    baderror = false;
    postmsg = "... Loading";
    
    if (!path || !markdown) {
      baderror = true;
      postmsg = "Invalid input";
      return;
    }
    
    try {
      let ref = doc(firestore, "post", path);
      
      await setDoc(ref, {
        text: markdown,
        timestamp: serverTimestamp()
      });
      
      postmsg = `Posted! check it out - ${window.location.origin}/post/${path}`;
      
      [path, markdown] = [null, null];
    } catch (err) {
      let {code, message} = err;
      
      baderror = true;
      postmsg = `${code} ${message}`;
    }
  }
  
  onAuthStateChanged(auth, u => {
    if (u) {
      authmsg = "... Signing in";
    
      setTimeout(() => (signed = true), 2000);
    }
  });
  
  async function authSubmit() {
    authmsg = "...loading";
    baderror = false;
    
    try {
      let u = await signInWithEmailAndPassword(auth, email, password);
      
      if (u) {
        authmsg = "Success";
        
        setTimeout(() => (signed = true), 2000);
      }
    } catch(err) {
      let { code, message } = err;
      
      baderror = true;
      authmsg = `${code} ${message}`;
    };
  }
</script>

<section>
  {#if !signed}
  <form id="auth" on:submit="{authSubmit}" in:fly={{ y: -200, duration: 500 }}>
    <div>
      <label for="email">Email</label>
      <input bind:value="{email}" name="email" type="text"/>
    </div>
    <div>
      <label for="password">Password</label>
      <input bind:value="{password}" name="password" type="password"/>
    </div>
    <button class="classic" type="submit">
      Submit
    </button>
    <p class:red="{baderror}" class="error">
      {authmsg||""}
    </p>
  </form>
  {:else}
  <div id="postbox" in:fly={{ y: -200, duration: 500 }}>
    <form on:submit="{addPost}">
      <div>
        <label for="path">Path</label>
        <input bind:value="{path}" name="path" type="text"/>
      </div>
      <div>
        <label for="markdown">Markdown</label>
        <textarea bind:value="{markdown}" name="markdown"></textarea>
      </div>
      
      <button class="classic" type="submit">
        Submit
      </button>
      
      <p class:red="{baderror}" class="error">
        {postmsg || ""}
      </p>
    </form>
    
    <button class="classic preview" on:click="{preview}">
      Preview
    </button>
    
    <hr class="classic" />
    
    <div id="content">
      {@html mdHtml}
    </div>
  </div>
  {/if}
</section>

<style>
  @import "../blog.css";
  
  section {
    width: 100%;
    max-width: clamp(16rem, 80vw, 32rem);
    margin: 0 auto;
  }
  
  form {
    width: fit-content;
    margin: 0 auto;
  }
  
  form div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  form input, textarea {
    background: var(--lgray);
    color: var(--black);
    padding: .5rem;
    width: 100%;
  }
  textarea {
    min-height: 15rem;
  }
  
  form button {
    display: block;
    margin: 0 auto;
    color: var(--white);
    background: var(--dblue);
  }
  
  p.error {
    margin-top: 1rem;
    font-size: .8rem;
  }
  p.red {
    color: red;
  }
  
  button.preview {
    color: var(--white);
    background: var(--blue);
    padding: 0 .5rem;
    margin-top: 2rem;
  }
</style>