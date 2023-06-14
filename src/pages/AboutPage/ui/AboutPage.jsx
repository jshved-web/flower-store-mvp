import React, { useState } from "react"
import { Header } from "widgets/Header"
import { Box, CardMedia, Typography } from "@mui/material"
import { Sidebar } from "widgets/Sidebar"
import { Footer } from "widgets/Footer"
import flowerStore from "entities/assets/flower-store.avif"

const AboutPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
           О нас
          </Typography>
          <Box sx={{maxWidth: '80%', my: 4}}>
            <Typography variant="caption" gutterBottom sx={{fontSize: 16}}>
              FlowerZ - это крупнейшая за Уралом сеть салонов цветов. Первый салон был открыт в 2011 году: вот уже более 10 лет мы следуем за мировыми трендами в мире флористики, при этом формируя индивидуальную эстетику и стиль.
            </Typography>
            <Box sx={{
              my: 4,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: 20,
            }}
            >
              <CardMedia
                component="img"
                height="500"
                image={flowerStore}
                alt="Flower Store"
              />
            </Box>
            <Typography variant="caption" display="block" gutterBottom sx={{fontSize: 16, my: 4}}>
              Мы напрямую работаем с крупнейшими цветочными поставщиками Южной Америки, Африки, Европы и России. Три раза в неделю растения поставляют из 12 стран: Голландии, Эквадора, Кении, Колумбии, Коста-Рики, России, Израиля, Италии, Франции, Чили, ЮАР.
            </Typography>
            <Typography variant="caption" display="block" gutterBottom sx={{fontSize: 16, my: 4}}>
              В каталоге - как популярные, так и редкие, экзотические цветы. Богатый выбор растений, опыт и профессионализм мастеров позволяют нам создавать эксклюзивные букеты, которые соответствуют самым оригинальным творческим идеям и поводам для подарка.
            </Typography>
          </Box>
        </Box>
      <Footer/>
    </>
  )
}

export default AboutPage
