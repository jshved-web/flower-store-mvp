import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';

export const FlowerCard = React.memo(({
  itemData,
  handleAddToCart,
}) => {
  const { title, price, image } = itemData;
  return (
    <Box sx={{ maxWidth: 400, backgroundColor: 'lightGray', boxShadow: 5, marginRight: 2, marginTop: 2 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography color="text.black" sx={{ fontWeight: 500, fontSize: 20, marginTop: 1 }}>
            {`от ${price} руб.`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => handleAddToCart(itemData)}
          >Добавить в корзину</Button>
        </CardActions>
      </Card>
    </Box>
  );
});
