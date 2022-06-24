<script>
    import compile from "../lib/compile.js";

    export let id;
    export let title;
    export let description;
    export let source;
    export let options;

    let controls = [
        { name: "__linkText", value: title },
        ...options.map((option) => ({
            name: option.name,
            value: option.value,
        })),
    ];

    $: linkText = controls.find((c) => c.name === "__linkText")?.value;
    $: link = compile(source, controls);
</script>

<article>
    <header>
        <h2>
            <a name={id}>
                <a href="#{id}">#</a>
            </a>
            {title}
        </h2>
    </header>

    <section>
        <p>{description}</p>
        <pre>{source}</pre>
    </section>

    <form>
        {#each controls as c}
            <label>
                {c.name}
                <input placeholder={c.value} bind:value={c.value} />
            </label>
        {/each}
    </form>

    <blockquote>
        {#await link then href}
            <a {href}>{linkText}</a>
        {/await}
    </blockquote>
</article>
