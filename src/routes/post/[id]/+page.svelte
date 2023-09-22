<script>
  export let data;

  import showdown from "showdown";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  
  let page_loaded = false;
  onMount(() => (page_loaded = true));
  
  let {
    id,
    text,
    time,
    title
  } = data;

  text = text.replaceAll("\\n", "\n");

  let conv = new showdown.Converter();
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
  
  <hr class="classic" />

  {#if page_loaded}
    <div id="content" in:fly={{ y: -50, duration: 200 }}>
      {@html html}
    </div>
  {:else}
    <div class="loader">
      <span>
        <i class="spin fa-solid fa-spinner"></i>
        Loading
      </span>
    </div>
  {/if}
</section>

<style>
  @import "../../blog.css";
  
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
  
  .loader {
    background: var(--dblue);
    padding: .5rem;
    z-index: 100;
    margin: 0 auto;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .spin {
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: Infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>