<script>
    import Bookmarklet from '../components/bookmarklet.svelte'
    import Help from '../components/help.svelte'
    
    export let bookmarklets;
</script>

<Help />

{#each bookmarklets as data}
    <Bookmarklet {...data} />
{/each}
