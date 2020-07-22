<script>
    import { listOfToggledCards } from '../stores.js';
    export let data, number;
    let _list;
    let toggled;
    const cardId = data.suite + number;

    listOfToggledCards.subscribe(list => {
        _list = list;
    });

    /* Helper function for checking if list contains cardId */
    const doesListContainId = (list = [], id = '') => list.indexOf(id) !== -1

    /* Handles card interaction */
    const handleClick = e => {
        e.preventDefault();

        if (doesListContainId(_list, cardId)) {
            listOfToggledCards.removeCard(cardId);
            toggled = false;
        } else if (_list.length < 2) {
            listOfToggledCards.addCard(cardId);
            toggled = true;
        }
    }

    toggled = doesListContainId(_list, cardId);

</script>

<div class="card" class:active="{toggled}" on:click={handleClick}>
    <p>
        {number}
    </p>
    <img src={data.imgPath} alt={data.suite} />
    <p class="bottom-right">
        {number}
    </p>
</div>

<style>
    .active {
        background-color: yellow !important;
    }

    .bottom-right {
        align-self: flex-end;
    }

    .card {
        background-color: white;
        height: 140px;
        width: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid black;
        margin-right: 5px;
    }

    img {
        padding: 8px;
        height: 32px;
        width: 28px;
        align-self: center;
    }

    p {
        font-weight: bold;
        margin: 0;
        padding: 4px;
    }
</style>