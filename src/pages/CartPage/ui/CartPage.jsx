import React, { useEffect, useMemo, useState } from "react"
import { Header } from "widgets/Header/index.js"
import { Sidebar } from "widgets/Sidebar/index.js"
import { Footer } from "widgets/Footer/index.js"
import { Typography, Box, Button } from "@mui/material"
import { CartItem } from "features/CartItem"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, fetchAllCartItems } from "../api/cartSlice.js"

const CartPage = () => {
  const dispatch = useDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [countEachProduct, setCountEachProduct] = useState({});

  const {cartItems} = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(fetchAllCartItems())
    return () => {
      dispatch(clearCart());
    }
  }, [])

  const getNonDuplicatedItems = () => {
    const result = [];

    cartItems?.forEach((item, index) => {
      if(index === 0) {
        result.push(item);
        return;
      }

      const currentItemInResultArray = result?.find(({id}) => id === item.id);

      if(currentItemInResultArray){
        setCountEachProduct((state) => ({
          ...state,
          [item.id]: state[item.id] ? state[item.id] += 1 : 2,
        }));
        return;
      }

      result.push(item);
    })
    return result;
  }
  const nonDuplicatedData = useMemo(() => {
    return getNonDuplicatedItems();
  }, [cartItems])

  const getTotalSumProducts = () => {
   return cartItems?.reduce((acc, current) => acc + Number(current?.price), 0)
  }

  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <Box>
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            my: 4,
          }}
        >
          Корзина
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'row'}}>
          <Box sx={{width: '50%', my: 4}}>
            {nonDuplicatedData?.map((item) => {
              return (
                <CartItem
                  cartItemData={item}
                  key={item.id}
                  countEachProduct={countEachProduct}
                />
              )
            })}
          </Box>
          <Box sx={{my: 5, border: '2px solid #808080', p: 2, borderRadius: '20px', width: '30%', display: 'flex', justifyContent: 'center'}}>
            <Box>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                justifyContent: 'center',
                display: 'flex',
                my: 4,
              }}
            >
              {`Общая сумма: ${getTotalSumProducts() ?? '–'}`}
            </Typography>
            <Button disabled sx={{width: '100%', backgroundColor: '#FFF', cursor: 'not-allowed'}}>
              Оплатить
            </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </>
  )
}

export default CartPage
