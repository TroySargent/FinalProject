import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from "../Title/Title";
import Saved from "../../SavedTable"



function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Tasks</Title> 
      <Saved></Saved>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See all tasks
        </Link>
      </div>
    </React.Fragment>
  );
}