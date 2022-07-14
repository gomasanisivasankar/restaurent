import { CssBaseline, Menu } from "@mui/material";
import React from "react";
import Navbar from '../Navbar/Navbar';
import SlideShow from "../SlideShow/SlideShow";
import Footer from "../Footer/Footer";
import CardImg from "../CardImg/CardImg";


const App = () =>{
    return(
        <>
            <CssBaseline />
            
            <Navbar />
            <SlideShow />
            <CardImg title='Menu' />
            <Footer />
           
        </>
    ); 
}

export default App;