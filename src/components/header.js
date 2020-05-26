import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import "../styles/bootstrap.min.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
// import { Navbar, Nav } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  // primarybutton: {
  //   // alignItems: "right",
  //   // justifyContent: "center",
  //   // margin: theme.spacing(1),
  //   // fontSize: 12,
  //   color: "white",
  // },
  // highlight: {
  //   backgroundColor: "red",
  // },
  root: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: "#2C2416",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = ({ siteTitle }) => {
  const classes = useStyles();
  return (
    // <Navbar  sticky ="top"  bg="dark" expand="md" variant="dark" role="navigation" style={{minHeight:70,fontFamily:'lato',color:'white'}}>
    // <div className="container">
    // <Navbar.Brand className="ml-auto mr-auto" style={{fontSize:20}} >{'ANVESHREDDY MEKALA'}</Navbar.Brand>
    // <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //  <Navbar.Collapse id="basic-navbar-nav">
    //    <Nav expand="md"  className="ml-auto mr-auto" >
    //      <Nav style={{padding:"0rem 0rem 0rem 5rem"}} > <Link to={"/"} style={{color:'white'}}> Home </Link> </Nav>
    //      <Nav style={{padding:"0rem 0rem 0rem 5rem"}}><Link to={"/skills"} style={{color:'white'}}>Skills </Link></Nav>
    //      <Nav style={{padding:"0rem 0rem 0rem 5rem"}}><Link to={"/projects"} style={{color:'white'}}>Projects</Link></Nav>
    //      <Nav style={{padding:"0rem 0rem 0rem 5rem"}}><Link to={"/contact"} style={{color:'white'}}>Contact</Link></Nav>
    //    </Nav>
    //    </Navbar.Collapse>
    //    </div>
    //  </Navbar>
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static" className={classes.nav}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {siteTitle}
            </Typography>

            <Button color="inherit">Blog</Button>

            
              <Button component={Link} to="/projects" color="inherit">Projects</Button>
            
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
