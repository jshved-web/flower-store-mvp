import React from 'react';
import { ImageListItem, ImageList } from '@mui/material';
import { imageBannerItems } from '../const/ItemData.js';

export const ImageListView = () => {
  return (
    <ImageList sx={{ maxWidth: 1000, height: 700, boxShadow: 20, margin: '0 auto' }} variant="woven" cols={3} gap={8}>
      {imageBannerItems?.map((item) => (
        <ImageListItem key={item?.img} sx={{ boxShadow: 20 }}>
          <img
            src={`${item?.img}?w=400&fit=crop&auto=format`}
            srcSet={`${item?.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
            alt={item?.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
