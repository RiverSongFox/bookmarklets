<script>
    import Bookmarklet from '../components/bookmarklet.svelte'
    
    export let bookmarklets;
</script>

{#each bookmarklets as data}
    <Bookmarklet {...data} />
{/each}
