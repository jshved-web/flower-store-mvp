import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import discountImage from 'entities/assets/discountFlowers.avif';

export const AdvertisingBanner = () => {
  return (
    <div style={{
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: 20,
    }}>
    >
      <CardMedia
        sx={{
          width: '70%',
          objectFit: 'cover',
        }}
        component="img"
        height="500"
        image={discountImage}
        alt="Discount"
      />
    </div>
  );
};

export const AdvertisingBannerText = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      my: 7,
    }}
    >
      <Typography variant="h4">
        Успей купить!
        <br />
        Скидка на все товары до 50%
      </Typography>
    </Box>
  );
};
