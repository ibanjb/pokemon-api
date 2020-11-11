import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import PokemonCard from '../../components/PokemonCard';
import Loading from '../../components/Loading';
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
  },
  sort: {
    marginRight: 20
  },
  icon: {
    fontSize: 24,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.dark
    }
  }
}));

const PokeList = (props: { 
    onOpen: Function, 
    onAdd: Function, 
    onRemove: Function, 
    list: Array<IPokemon>, 
    deck: Array<String>, 
    onSortAscending: Function,
    onSortDescending: Function,
    sortAscending: Boolean,
    loading: Boolean 
  }) => {
  const { onOpen, onAdd, onRemove, list, deck, onSortAscending, onSortDescending, sortAscending, loading } = props;
  const classes = useStyles();

  React.useEffect(() => {
    if (list.length === 0) {
      onOpen();
    }
  }, [onOpen, list, loading]);

  const handleSortAscending = React.useCallback((e: any) =>{
      onSortAscending();
  }, [onSortAscending]);

  const handleSortDescending = React.useCallback((e: any) =>{
    onSortDescending();
}, [onSortDescending]);

  return (
    <Layout>
      <>
      { loading && <Loading />}
      { !loading && 
        <Container className={classes.cardGrid} maxWidth="md">
          { deck.length >= 5 && 
            <div className={classes.alertMessage}>
              <Typography gutterBottom variant="h5" component="h2">
                Maximum number of pokemons into deck reached 
              </Typography>
            </div>
          }
           <Grid container>
            <Grid item>
              { sortAscending && <span className={classes.sort}>Sort ascending</span> }
              { !sortAscending && <span className={classes.sort}>Sort descending</span> }
            </Grid>
            <Grid item>
              <div onClick={handleSortAscending}>
                <ArrowDropUp className={classes.icon} /> 
              </div>
            </Grid>
            <Grid item>
            <div onClick={handleSortDescending}>
                <ArrowDropDown className={classes.icon} /> 
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
             {list.map((pokemon: IPokemon) => {
                return ( 
                  <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAdd} onRemove={onRemove} deck={deck} />
                )
              })
            }
          </Grid>
        </Container>
      }
      </>
    </Layout>
  );
}

export default PokeList;
