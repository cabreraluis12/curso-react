import React from 'react'

import ItemCount from "../ItemCount/ItemCount";

import { Card , AspectRatio , Typography , Chip , Box , Divider} from "@mui/joy";

const ItemDetail = ({productSelected , onAdd ,}) => {
  return (
    <div>
        <Card
      variant="outlined"
      orientation="horizontal"
      sx={{margin:10,
        marginBottom:23.7,
        padding:10,
        width: 'auto',
        gap: 10,
        '&:hover': { boxShadow: 'lg', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 600 , height: 600 }}>
        <img
          src={productSelected.img}
          
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Divider color="primary" orientation="vertical"> </Divider>
      <div>
        <Typography level="h1" fontSize="ms" id="card-description" mb={10}>
        {productSelected.titulo}
        </Typography>
        <Typography fontSize="lg" aria-describedby="card-description" mb={10}>

            {productSelected.descripcion}
        </Typography>
        
        <Chip
          variant="outlined"
          color="primary"
          size="m"
          sx={{ fontSize:'25px', marginTop:'10'}}
        >
        Precio: $ {productSelected.precio}
        </Chip>

        <Box mt={25}>
        <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
        </Box>
      </div>  
    </Card>
    </div>
  )
}

export default ItemDetail