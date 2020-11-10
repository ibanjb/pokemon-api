import React from 'react';
import { connect } from 'react-redux';
import IPokemon from '../interfaces/IPokemon';
import Deck from '../pages/Deck';

const DeckContainer = (props: {
 list: Array<IPokemon>;
  deck: Array<String>;
}) => {
  const { list, deck } = props;
  return (
    <Deck list={list} deck={deck} />
  );
};

const mapDispatchToProps = (dispatch: any) => ({});

const mapStateToProps = (state: any) => {
  return {
    list: state.pokemons.list,
    deck: state.pokemons.deck,
    loading: state.pokemons.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);
