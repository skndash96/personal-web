<script>
  import showdown from "showdown";
  
  let conv = new showdown.Converter();
  
  let auth = null;
  
  let email, password,
    path, title, markdown, mdHtml;
  
  function preview() {
    mdHtml = conv.makeHtml(markdown);
  }
  
  function addPost() {
    
  }
  
  function authSubmit() {
    
  }
</script>

<section>
  {#if !auth}
  <form on:submit="{authSubmit}">
    <div>
      <label for="email">Email</label>
      <input bind:value="{email}" name="email" type="text"/>
    </div>
    <div>
      <label for="password">Password</label>
      <input bind:value="{password}" name="password" type="password"/>
    </div>
    <button type="submit">
      Submit
    </button>
  </form>
  {:else}
  <div>
    <form on:submit="{addPost}">
      <div>
        <label for="path">Path</label>
        <input bind:value="{path}" name="path" type="text"/>
      </div>
      <div>
        <label for="title">Title</label>
        <input bind:value="{title}" name="title" type="text"/>
      </div>
      <div>
        <label for="markdown">Markdown</label>
        <textarea bind:value="{markdown}" name="markdown"></textarea>
      </div>
      
      <button type="submit">
        Submit
      </button>
    </form>
    
    <button class="preview" on:click="{preview}">
      Preview
    </button>
    
    <div id="content">
      {@html mdHtml}
    </div>
  </div>
  {/if}
</section>

<style>
  @import "../blog.css";
  
  form div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  form input, textarea {
    background: var(--lgray);
    color: var(--black);
    padding: .5rem;
  }
  
  form button {
    display: block;
    margin: 0 auto;
    color: var(--white);
    background: var(--dblue);
  }
  
  button.preview {
    color: var(--white);
    background: var(--blue);
    padding: 0 .5rem;
    margin-top: 2rem;
  }
</style>