import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";

const objects = [1,2,3,4,5,6,7,8,9];


const CardImg = (props) => {


  const navigate = useNavigate();

  return (
    
   <>
    <div style={{display:'flex',color:'white',position:'relative',background:'black',justifyContent:'center'}}>
    {props.bool && <ArrowBackIcon style={{position:'absolute',fontSize:'30px',left:'30px',top:'58px'}} onClick={()=>navigate(-1)} />}
    
      <h1 style={{color:"white",padding:"30px"}}>{props.title}</h1>
    </div>
    <div style={{background:"#0c0c0d",display:"flex",padding:'15px 15px 60px 15px', flexWrap:"wrap",justifyContent:"center"}}>
    {objects.map((object,i) => (
        <Card key={i}  sx={{ maxWidth: 345, margin:'10px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://thumbs.dreamstime.com/b/closeup-chef-throwing-vegetable-mix-wok-pan-fire-closeup-chef-throwing-vegetable-mix-wok-pan-fire-fresh-249013469.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body1" color="text.primary">
            Rs. 100/-
          </Typography>
        </CardContent>
        <CardActions >
          <Button size="small" style={{fontSize:'10px'}} color='primary'> Add to Cart <AddCircleOutlineIcon /></Button>
        </CardActions>
      </Card>
    ))} 
    
        </div>
   </>
  );
}


export default CardImg;