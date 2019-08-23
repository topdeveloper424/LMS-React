import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, email, duplicated_login, action) {
  return { name, email, duplicated_login, action};
}

const rows = [
  createData('James', 'james@hotmail.com', 'NotAllowed'),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    marginTop: 150,
    overflowX: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 250,
    [theme.breakpoints.down("sm")]: {
        marginBottom: 150,
        // marginTop: 50
    }
  },
  table: {
    minWidth: 700,
  },
}));

export default function SearchResult() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Duplicated Login</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.duplicated_login}</StyledTableCell>
              <StyledTableCell align="center">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Allow Login
                    </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Link to="/dashboard/admin/duplicated-login">
        <Button variant="contained" color="primary" className={classes.button} style={{margin: 20}}>
            Back
        </Button>
      </Link>
    </Paper>
  );
}