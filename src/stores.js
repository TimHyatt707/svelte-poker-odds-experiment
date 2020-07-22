import { writable } from 'svelte/store';

function createListOfToggledCards() {
    const { subscribe, update } = writable([]);

    return {
        subscribe,
        addCard: cardId => update(list => [...list, cardId]),
        removeCard: cardId => update(list => list.filter(card => card !== cardId)),
    }
};

const listOfToggledCards = createListOfToggledCards();

export { listOfToggledCards };