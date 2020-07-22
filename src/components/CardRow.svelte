<script>
    import Card from './Card.svelte';
    export let suite;

    const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
</script>


<div class="row">
    {#each cards as card}
        <Card data={suite} number={card} />
    {/each}
</div>


<style>
    .row {
        display: flex;
        justify-content: row;
        margin-bottom: 10px;
    }

</style>