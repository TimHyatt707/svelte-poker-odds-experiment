<script>
    import CardRow from './CardRow.svelte';

    const suites = [
        {
            suite: 'spade',
            imgPath: 'assets/spade.svg'
        },
        {
            suite: 'club',
            imgPath: 'assets/club.svg'
        },
        {
            suite: 'diamond',
            imgPath: 'assets/diamond.svg'
        },
        {
            suite: 'heart',
            imgPath: 'assets/heart.svg'
        },
    ]
</script>


<div class="container">
    {#each suites as suite} 
        <CardRow suite={suite} />
    {/each}
</div>

<style>
    .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

</style>