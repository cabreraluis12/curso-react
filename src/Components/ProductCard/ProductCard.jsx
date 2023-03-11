import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


const ProductCard = ({element}) => {
  return (
    <Card sx={{ width: 350,
        height: 470,
        color: "black",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px black",
      }}>
      <CardMedia
        sx={{ height: 250 }}
        image={element.img}
        title={element.titulo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {element.titulo}
        </Typography>
        
        <Typography variant="h5" color="text.secondary">
          ${element.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
    
      <Button variant="contained">Ver Mas</Button>
        
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProductCard