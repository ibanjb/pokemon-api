import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IPokemon from '../../interfaces/IPokemon';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
    '&:hover': {
      '-webkit-transition': 'all 1.0s ease',
      '-moz-transition': 'all 1.0s ease',
      '-o-transition': 'all 1.0s ease',
      '-ms-transition': 'all 1.0s ease',
      transform: 'scale(1.20)'
    }
  },
  buttonHover: {
    '&:hover': {
      '-webkit-transition': 'all 0.5s ease',
      '-moz-transition': 'all 0.5s ease',
      '-o-transition': 'all 0.5s ease',
      '-ms-transition': 'all 0.5s ease',
      transform: 'scale(1.50)'
    }
  },
  name: {
    color: theme.palette.primary.dark
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    justifyContent: 'center'
  }
}));

const PokemonCard = (props: { 
  pokemon: IPokemon, 
  onAdd?: Function, 
  onRemove?: Function, 
  deck?: Array<String> 
  isDeck?: Boolean
}) => {
  const classes = useStyles();
  const [ action, setAction ] = React.useState('Add');
  const { pokemon, onAdd, onRemove, deck, isDeck } = props;

  React.useEffect(() => {
    if (deck && deck.includes(pokemon.id)) {
      setAction('Remove');
    } else {
      setAction('Add');
    }
  }, [deck, pokemon]);

  const handleDeckAction = React.useCallback(() => {
    if (action === 'Add' && onAdd) {
      onAdd(pokemon.id);
    } else {
      if (onRemove) {
        onRemove(pokemon.id);
      }
    }
  }, [onAdd, onRemove, action, pokemon]);

  return (
    <Grid item key={pokemon.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={pokemon.image}
          title={pokemon.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.name} gutterBottom variant="h5" component="h2">
            {pokemon.name}
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
        { !isDeck && 
          <CardActions className={classes.cardActions}>
            { deck && deck.length < 5 && 
              <Button className={classes.buttonHover} size="small" color="primary" onClick={handleDeckAction}>
                {action}
              </Button>
            }
            { deck && deck.length === 5 && action === 'Remove' &&
              <Button className={classes.buttonHover} size="small" color="primary" onClick={handleDeckAction}>
                {action}
              </Button>
            }
          </CardActions>
        }
      </Card>
    </Grid>
  );
}

export default PokemonCard;
