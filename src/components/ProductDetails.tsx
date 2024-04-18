import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import {Product} from "../app-redux/saleTypes";


const ProductDetails: React.FC<{ product: Product }> = ({product}) => (
  <Card sx={{maxWidth: 345}}>
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt={product.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.subtitle}
      </Typography>
      {/* ... display other product details ... */}
    </CardContent>
    <CardActions>
      {product.tags.map(tag => (
        <React.Fragment key={tag}>
        <Button  size="small">{tag}</Button>
        </React.Fragment>
      ))}
    </CardActions>
  </Card>
);

export default ProductDetails