import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PokemonCard from '../../components/PokemonCard';
import IPokemon from '../../interfaces/IPokemon';
import Layout from '../../components/Layout';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  alertMessage: {
    color: theme.palette.primary.dark,
    paddingBottom: '4vh'
  }
}));

const Deck = (props: { 
    list: Array<IPokemon>, 
    deck: Array<String>
  }) => {
  const { list, deck } = props;
  const classes = useStyles();
  const [ pokemonDeck, setPokemonDeck ] = React.useState<IPokemon[]>();

  React.useEffect(() => {
    if (deck && deck.length > 0) {
      const pokemons = list.filter(x => deck.indexOf(x.id) !== -1);
      if (pokemons){
        setPokemonDeck(pokemons);
      }
    }
  }, [list, deck]);

  return (
    <Layout>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            {pokemonDeck && pokemonDeck.map((pokemon: IPokemon) => {
              return ( 
                <PokemonCard key={pokemon.id} pokemon={pokemon} isDeck />
              )
            })
          }
        </Grid>
      </Container>
    </Layout>
  );
}

export default Deck;
