<script>
  export let data;
  
  let { posts } = data;
</script>

<svelte:head>
  <title> Recent Blogs </title>
  <meta name="description" content="Check out my recent blogs packed with good stuff!">
</svelte:head>

<section>
  <h1>
    Recent blogs
  </h1>
  
  <div class="postbox">
  {#each posts as p}
  <div class="postref" id="{p.id}">
    <div>
      <a class="title" href="/post/{p.id}">
        {p.title}
      </a>
    
      <span class="time">
        <span>
          <i class="fa-solid fa-circle">Go</i>
        </span>
        {p.time}
      </span>
    </div>
    
    <p class="info">
      {p.desc}
    </p>
  </div>
  {/each}
  </div>
</section>

<style>
  .postbox {
    max-width: clamp(16rem, 80vw, 36rem);
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .postref {
    position: relative;
  }
  .postref > div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    margin-bottom: .5rem;
  }
  .title {
    color: var(--bblue);
  }
  .time {
    color: var(--lgray);
    font-size: .8rem;
  }
  .time span {
    margin-right: .25rem;
    font-size: .5rem;
  }
  .info {
    font-size: .8rem;
    color: var(--white);
    opacity: 0.9;
  }
</style>