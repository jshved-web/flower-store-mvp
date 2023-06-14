import React, { useState } from "react"
import { Box, Typography } from "@mui/material"
import { Header } from "widgets/Header"
import { Footer } from "widgets/Footer"
import { YandexMap } from "widgets/YandexMap"
import { Sidebar } from "widgets/Sidebar"

const DeliveryPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <Box sx={{maxWidth: '80%', my: 4}}>
        <Typography variant="caption" display="block" gutterBottom sx={{fontSize: 16, my: 4}}>
          Если заказ не понравился, просто откажитесь от него или оплатите его частично. При полном или частичном отказе от покупки при доставке курьером или в пункт выдачи заказов, следует оплатить стоимость доставки каждого заказа (если сумма выкупа меньше 3 000 руб.).
        </Typography>
        <Typography variant="caption" display="block" gutterBottom sx={{fontSize: 16, my: 4}}>
          Оплата товара означает отсутствие претензий к его ассортименту и внешнему виду и согласие на покупку.
          Просим вас не пренебрегать проверкой содержимого доставленного вам заказа перед его оплатой.
        </Typography>
      </Box>
      <Typography
        variant="h5"
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
          display: 'flex',
          my: 4,
        }}
      >
        Бесплатная доставка по всему Севастополю
      </Typography>
      <YandexMap/>
      <Footer/>
    </>
  )
}

export default DeliveryPage
