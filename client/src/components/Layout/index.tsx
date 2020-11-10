import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: 'url("https://cdn.dribbble.com/users/605899/screenshots/2865113/icon_go_by_nikitin891.gif")'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  links: {
    textDecoration: 'none',
    color: theme.palette.common.white
  }
}));

const Layout = (props: { children: React.ReactElement }) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <div>
              <Typography variant="h6" color="inherit" noWrap>
                <Link className={classes.links} to="/">Pokemons</Link>
              </Typography>
            </div>
            <div>
              <Typography variant="h6" color="inherit" noWrap>
                <Link className={classes.links} to="/login">Login</Link>
              </Typography>
            </div>
            <div>
              <Typography variant="h6" color="inherit" noWrap>
                <Link className={classes.links} to="/deck">My deck</Link>
              </Typography>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        {children}
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Iban Balasch
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Exercise done with React, Typescript and MaterialUI
        </Typography>
      </footer>
    </div>
  );
}

export default Layout;
