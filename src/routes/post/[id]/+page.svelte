<script>
  export let data;

  import {
    Converter
  } from "showdown";

  let {
    id,
    text,
    time,
    title
  } = data;

  text = text.replaceAll("\\n", "\n");

  let conv = new Converter();
  let html = conv.makeHtml(text);
</script>

<svelte:head>
  <title> {title} </title>
</svelte:head>

<section>
  <div class="info">
    <span>
      Blog post
    </span>
    <span>
      {id} | {time}
    </span>
  </div>
  
  <hr />

  <div id="content">
    {@html html}
  </div>
</section>

<style>
  @import "./blog.css";
  
  section {
    display: block;
    margin: 0 auto;
  }
  
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
  }
  .info *:last-child {
    font-size: .8rem;
    color: var(--lgray);
  }
  
  hr {
    border: 1px solid rgba(255,255,255,.2);
    margin: .5rem 0 2rem 0;
  }
</style>