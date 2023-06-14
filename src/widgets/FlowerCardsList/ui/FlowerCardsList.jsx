import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, fetchAllCardItems } from "../api/flowersSlice.js"
import { FlowerCard } from "entities/FlowerCard"
import { fetchAllCartItems } from "widgets/Header/api/headerSlice.js"

export const FlowerCardsList = () => {
  const dispatch = useDispatch();
  const { cardItemsData } = useSelector((state) => state.flowerItems) ?? {};

  const handleAddToCart = async (flower) => {
    await dispatch(addItemToCart({...flower}))
    dispatch(fetchAllCartItems())
  }

  useEffect(() => {
    dispatch(fetchAllCardItems());
  }, []);

  return (
    <Box sx={{ display: 'flex', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cardItemsData?.map((item) => (
        <FlowerCard
          handleAddToCart={handleAddToCart}
          key={item?.id} itemData={item}
        />
      ))}
    </Box>
  )
}

