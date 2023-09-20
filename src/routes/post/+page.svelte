<script>
  export let data;
  
  let { posts } = data;
</script>

<section>
  <h1>
    Recent blogs
  </h1>
  
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
</section>

<style>
  .postref {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    color: var(--bblue);
    margin-right: 2rem;
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