import IPokemon from '../../interfaces/IPokemon';
import * as types from '../types/pokemons';

export const fetchPokemonsRequest = () => ({
  type: types.FETCH_POKEMONS_REQUEST,
});

export const fetchPokemonsSuccess = (pokemons: Array<IPokemon>) => ({
  type: types.FETCH_POKEMONS_SUCCESS,
  pokemons,
});

export const fetchPokemonsFailure = (e: any) => ({
  type: types.FETCH_POKEMONS_FAILURE,
  error: e,
});

export const addPokemonToDeck = (id: string) => ({
  type: types.ADD_POKEMON_TO_DECK,
  id,
});

export const removePokemonToDeck = (id: string) => ({
  type: types.REMOVE_POKEMON_TO_DECK,
  id,
});

export const sortAscending = () => ({
  type: types.SORT_ASCENDING,
});

export const sortDescending = () => ({
  type: types.SORT_DESCENDING,
});
