<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/normalize.css@8.0.1/normalize.css" type="text/css">
    <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" media="screen" />
    <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-dark.css" media="screen and (prefers-color-scheme: dark)" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css" />
</svelte:head>

<a class="github-fork-ribbon" href="https://github.com/object-required/bookmarklets" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
<style>
    .github-fork-ribbon:hover {
        border-bottom: none;
    }
</style>

<header>
    <h1>Bookmarklets</h1>
</header>
<main>
    <slot></slot>
</main>