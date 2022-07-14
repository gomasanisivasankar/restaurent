import { CssBaseline, Paper } from "@mui/material";
import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import CardImg from "../CardImg/CardImg";


import {TextField, Button, Typography } from '@mui/material';

const classes = {
    container:{
        width:"520px",
        padding:"20px",
        margin:"30px auto"
    },
    title:{
        paddingBottom:'10px'
    },
    field:{
        marginBottom:'10px'
    }
}

export default function CartPage() {

    const [payment, setPayment] = useState({
        uname:'',phone_no:'',table_no:''
    });

    const clear = () => {
        setPayment({uname:'',phone_no:'',table_no:''});    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(payment));
        clear();
    }


  return (
   <>
    <CssBaseline />
     <CardImg title='Cart' bool='true' />

     <div style={{display:'flex',color:'white',position:'relative',background:'black',justifyContent:'center'}}>
      <h1 style={{color:"white",padding:"30px"}}>Make Your Payment</h1>
    </div>
    <div style={{background:'black',width:"100%",display:'flex',justifyContent:'center'}}>
    <Paper style={classes.container}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography style={classes.title} variant="h6" >Payment</Typography>
            <TextField style={classes.field} name='uname' variant='outlined' label="Name" fullWidth value={payment.uname} onChange={(e)=> setPayment({...payment,uname: e.target.value})}/>
            <TextField style={classes.field} name='phone_no' variant='outlined' label="Phone Number" fullWidth value={payment.phone_no} onChange={(e)=> setPayment({...payment,phone_no: e.target.value})}/>
            <TextField style={classes.field} name='table_no' variant='outlined' label="Table Number" fullWidth value={payment.table_no} onChange={(e)=> setPayment({...payment,table_no: e.target.value})}/>
            <Button style={classes.field} variant="contained" color="primary" size="large" type="submit" fullWidth> Pay </Button>
            <Button style={classes.field} variant="contained" color="warning" size="small" onClick={clear} fullWidth> Clear </Button>
        </form>
     </Paper>
    </div>

   </>


  );
}