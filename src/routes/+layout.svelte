<script>
	import ProfilePic from "$lib/images/pfp.jpg"
  import './styles.css';
  
  let dropopen = false;
  function toggleDrop() {
    dropopen = !dropopen;
  }
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="description" content="Who I am and What I do | Portfolio and Blog" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <script src="https://kit.fontawesome.com/f3339b4404.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="app">
	<header>
    <div class="image">
      <img src="{ProfilePic}" alt="logo" />
      <a href="/"> DASH </a>
    </div>
    <button on:click="{toggleDrop}">
      <span>
        {#if dropopen} close {:else} menu {/if} 
      </span>
    </button>
    <div class:open="{dropopen}" class="dropdown">
      <ul>
        <li>
          <a rel="external" href="/">
            <i class="fa-solid fa-house"></i>
            Homepage
          </a>
        </li>
        <li>
          <a rel="external" href="/post">
            <i class="fa-solid fa-blog"></i>
            Blog
          </a>
        </li>
        <li>
          <a rel="external" href="https://github.com/skndash96">
            <i class="fa-brands fa-github"></i>
            Github
          </a>
        </li>
      </ul>
    </div>
  </header>
  
  <main>
		<slot />
	</main>
	
  <footer>
    Copyright @ 2023 | Dash Skndash
  </footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		color: var(--white);
		background: var(--gray);
	}
	
  header {
    background: linear-gradient(to bottom left, var(--dblue), var(--blue), var(--lblue));
    padding: .5rem 5vw;
    position: relative;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 3px 3px 5px rgba(0,0,0,.2);
    z-index: 10;
  }
  header button {
    color: var(--bblue);
  }
  .image {
    width: 2rem;
    height: 2rem;
    position: relative;
    display: flex;
    align-items: center;
  }
  .image a {
    font-size: 1.2rem;
    font-weight: 800;
    font-family: Monospace;
    margin-left: -.25rem;
    color: var(--white);
  }
  .image a:hover {
    text-decoration: none;
  }
  .image img {
    width: inherit;
    height: inherit;
    border-radius: 100%;
  }
  .dropdown {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    background: var(--bblue);
    max-height: 0;
    overflow: hidden;
    transition: all 200ms ease-in;
    font-size: .9rem;
    z-index: 5;
  }
  .dropdown.open {
    max-height: 100vh;
  }
  .dropdown ul {
    list-style-type: none;
    padding: .5rem 1rem;
  }
  .dropdown ul > * {
    padding-top: .75rem;
  }
  .dropdown ul > *:hover {
    color: var(--dblue);
    text-decoration: none;
  }
  
  footer {
    text-align: center;
    font-size: .8rem;
    padding: .5rem 1rem;
    position: relative;
    background: var(--black);
    color: var(--lgray);
  }
</style>
