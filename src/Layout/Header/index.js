import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Menu, Search } from '@material-ui/Icons';
import Container from '@material-ui/core/Container'
import { RiUserFill } from 'react-icons/ri';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  header: {
    backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.1) 0, rgba(0,0,0,0) 76%),linear-gradient(to right, #002672 0%, #002672 77px, #e10000 77px, #e10000 100%)",
    backgroundOrigin: "content-box",
    backgroundRepeat: "no-repeat",
    // maxWidth: "1024px",
    margin: "0 auto",
    // display: "table",
    width: "100%",
    // tableLayout: "fixed",
    borderCollapse: "separate",
    // padding: "0 14px",
    boxSizing: "border-box",

  },
  
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  img: {
    height: "100px",
    width: "150px",
    // display: "flex",
    // position: "relative",
    // zIndex: "2",
    // justifyContent: "flex-start",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  className={classes.header}>
        <Container maxWidth="md">

                <Toolbar>
          
          <img src="/static/img/skysporttrans.svg" alt="" className={classes.img}/>
          
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
