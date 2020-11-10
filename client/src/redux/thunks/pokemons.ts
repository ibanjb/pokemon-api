import {
  fetchPokemonsRequest,
  fetchPokemonsSuccess,
  fetchPokemonsFailure,
} from '../actions/pokemons';

export const thunkFetchPokemons = (uri: string) => async (dispatch: any) => {
  dispatch(fetchPokemonsRequest());
  try {
    const response = await fetch(uri, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const jsonResponse = await response.json();
    dispatch(fetchPokemonsSuccess(jsonResponse));
  } catch (e) {
    dispatch(fetchPokemonsFailure(e));
  }
};
