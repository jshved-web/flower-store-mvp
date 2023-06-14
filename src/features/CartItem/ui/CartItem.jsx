import React from "react"
import { Avatar, Box, Typography } from "@mui/material"
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
export const CartItem = ({
  cartItemData,
  countEachProduct,
}) => {
  const getEachSummary = () => {
    if(!countEachProduct[cartItemData?.id]) {
      return cartItemData?.price;
    }
    return cartItemData?.price * countEachProduct[cartItemData?.id];
  }
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '36px',
      backgroundColor: '#eeeeee',
      backgroundImage: 'linear-gradient(45deg, #eeeeee 0%, #FFFB7D 100%)',

    }}
         my={2}
    >
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Avatar
          alt="flower-image"
          src={cartItemData?.image ?? 's'}
          sx={{width: 78, height: 78}}
        />
        <Typography variant="overline" sx={{fontWeight: 600, mx: 4}}>
          {cartItemData?.title}
        </Typography>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', mx: 1}}>
        <Typography sx={{fontWeight: 600, marginRight: '10px'}}>
          {`Сумма: ${getEachSummary()}`}
        </Typography>
        <Typography sx={{fontWeight: 600, marginRight: '10px'}}>
          {`Кол-во: ${countEachProduct[cartItemData.id] ?? 1}`}
        </Typography>
        <AddCircleOutlineOutlinedIcon sx={{color: 'green', fontSize: 30, cursor: 'pointer'}}/>
        <RemoveCircleOutlineOutlinedIcon sx={{color: 'red',  fontSize: 30, cursor: 'pointer'}}/>
      </Box>
    </Box>
  )
}
