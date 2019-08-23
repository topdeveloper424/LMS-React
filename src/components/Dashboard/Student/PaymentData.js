import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
// import { Grid } from '@material-ui/core';
// import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const style = theme => ({
    bg: {
        marginTop: 150,
        marginBottom: 150,
        marginLeft: 'auto', 
        marginRight: 'auto',
        [theme.breakpoints.down("sm")]: {
            marginTop: 100,
            marginBottom: 10
        }
    },
    gridCard: {
        background: 'white',
        boxShadow: '1px 1px 3px 4px #eeeeee',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 50,
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
            padding: 0
        }
    },
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        overflowY: 'auto',
    },
    table: {
        minWidth: 1000,
        [theme.breakpoints.down("sm")]: {
            minWidth: 310,
        }
    },
    cell: {
        direction: 'rtl',
        fontSize: 18,
        "&:hover": {
            color: '#6ac145'
        }
    }
})

class PaymentData extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.bg}>
                <div style={{display: 'flex', justifyContent:'flex-end', alignItems: 'center', paddingBottom: 20, paddingRight: 10}}>
                    <h3>بيانات السداد</h3>&nbsp;<i className="fas fa-money-check"></i>
                </div>
                <div className={classes.gridCard}>
                    <h5 style={{textAlign: 'center', color:'#1a1a23', fontSize: 20}}>عند الرغبة بسداد رسوم المقرر قم بالتحويل إلى بيانات الحساب التالي ثم قم بإرسال صورة لعملية التحويل (الإيصال)</h5>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="right" style={{fontSize: 18, color:'#6ac145'}}>
                                        الراجحي
                                    </TableCell>
                                    <TableCell align="right" className={classes.cell}>
                                        <i className="fa fa-university" aria-hidden="true"></i>&nbsp;
                                        البنك
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align="right" style={{fontSize: 18, color:'#6ac145'}}>                       
                                        321608010209551         
                                    </TableCell>
                                    <TableCell align="right" className={classes.cell}>
                                        <i className="fa fa-money-check-alt" aria-hidden="true"></i>&nbsp;
                                        رقم الحساب
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align="right" style={{fontSize: 18, color:'#6ac145'}}>                       
                                        نايف عالي محمد الشهري         
                                    </TableCell>
                                    <TableCell align="right" className={classes.cell}>
                                        <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                                        اسم صاحب الحساب
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align="right" style={{fontSize: 18, color:'#6ac145'}}>                       
                                       SA8580000321608010209551
                                    </TableCell>
                                    <TableCell align="right" className={classes.cell}>
                                        <i className="fa fa-sync-alt" aria-hidden="true"></i>&nbsp;
                                        رقم الآيبان
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(PaymentData)

