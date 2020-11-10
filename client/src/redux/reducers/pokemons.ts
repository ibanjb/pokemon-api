import * as types from '../types/pokemons';
import IPokemon from '../../interfaces/IPokemon';

interface IState {
  list: Array<IPokemon>;
  deck: Array<String>;
  sortAscending: Boolean;
  loading: Boolean;
}

export const initialState: IState = {
  list: [],
  deck: [],
  sortAscending: true,
  loading: false,
};

const pokemons = (state = initialState, action: any) => {
  switch (action.type) {
    case types.FETCH_POKEMONS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.pokemons,
        deck: [],
      };
    case types.FETCH_POKEMONS_FAILURE:
      return { ...state, loading: false, list: [], deck: [] };
    case types.ADD_POKEMON_TO_DECK:
      if (state.deck.length < 5) {
        const deckAdd = [...state.deck];
        deckAdd.push(action.id);
        return { ...state, deck: deckAdd };
      }
      return { ...state };
    case types.REMOVE_POKEMON_TO_DECK:
      const removeDeck = [...state.deck];
      var index = removeDeck.indexOf(action.id);
      if (index !== -1) {
        removeDeck.splice(index, 1);
      }
      return { ...state, deck: removeDeck };
    case types.SORT_ASCENDING:
      const ascendingList = [...state.list];
      ascendingList.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      return { ...state, list: ascendingList, sortAscending: true };
    case types.SORT_DESCENDING:
      const descendingList = [...state.list];
      descendingList.sort((a, b) =>
        b.name > a.name ? 1 : a.name > b.name ? -1 : 0
      );
      return { ...state, list: descendingList, sortAscending: false };
    default:
      return { ...state };
  }
};

export default pokemons;
