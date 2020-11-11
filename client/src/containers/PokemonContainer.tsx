import React from 'react';
import { connect } from 'react-redux';
import IPokemon from '../interfaces/IPokemon';
import PokeList from '../pages/PokeList';
import { thunkFetchPokemons } from '../redux/thunks/pokemons';
import * as actions from '../redux/actions/pokemons';

const url = 'http://localhost:8080/pokemon';  // todo. must be placed in env. setting (for example)

const PokemonContainer = (props: {
  onOpen: Function;
  onAdd: Function;
  onRemove: Function;
  list: Array<IPokemon>;
  deck: Array<String>;
  onSortAscending: Function;
  onSortDescending: Function;
  sortAscending: Boolean;
  loading: Boolean;
}) => {
  const { onOpen, onAdd, onRemove, list, deck, onSortAscending, onSortDescending, sortAscending, loading } = props;
  return (
    <PokeList 
      list={list} 
      onOpen={onOpen} 
      onAdd={onAdd} 
      onRemove={onRemove} 
      deck={deck} 
      loading={loading} 
      onSortAscending={onSortAscending}
      onSortDescending={onSortDescending}
      sortAscending={sortAscending} 
    />
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  onOpen: async () => {
    await dispatch(thunkFetchPokemons(url));
  },
  onAdd: async (id: string) => {
    await dispatch(actions.addPokemonToDeck(id));
  },
  onRemove: async (id: string) => {
    await dispatch(actions.removePokemonToDeck(id));
  },
  onSortAscending: async () => {
    await dispatch(actions.sortAscending());
  },
  onSortDescending: async () => {
    await dispatch(actions.sortDescending());
  },
});

const mapStateToProps = (state: any) => {
  return {
    list: state.pokemons.list,
    deck: state.pokemons.deck,
    sortAscending: state.pokemons.sortAscending,
    loading: state.pokemons.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
