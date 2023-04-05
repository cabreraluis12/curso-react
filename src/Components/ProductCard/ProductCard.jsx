

import { Link } from 'react-router-dom';



import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';



const ProductCard = ({element}) => {
  return (
    <Card variant="outlined" sx={{ width: 300, height: 400 }}>
      <Typography level="h1" fontSize="md" sx={{ mb: 1 }}>
        {element.titulo}
      </Typography>
      
      <AspectRatio sx={{ my: 'auto' , mt:5}}>
        <img
          src= {element.img}
  
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{display: 'flex', width:"50px", mt:8}}>
        <div>
          <Typography level="h6">Precio:</Typography>
          <Typography level="h4">
          ${element.precio}
          </Typography>
        </div>
        <Link to={`/itemDetail/${element.id}`}>
        <Button
          variant="solid"
          size="lg"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ fontWeight: 600 , ml:10 }}
        >
          Ver Mas
        </Button>
        </Link>
      </Box>
    </Card>
  );
}

export default ProductCard