<script>
  export let data;
  
  let { posts } = data;
</script>

<section>
  <h1>
    Recent blogs
  </h1>
  
  <div class="postbox">
  {#each posts as p}
  <div class="postref" id="{p.id}">
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
  {/each}
  </div>
</section>

<style>
  .postbox {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 24rem;
  }
  .postref {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    align-items: center;
    text-align: left;
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
</style>