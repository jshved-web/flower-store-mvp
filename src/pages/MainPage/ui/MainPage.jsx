import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { Header } from "widgets/Header"
import { Sidebar } from "widgets/Sidebar"
import { AdvertisingBanner, AdvertisingBannerText } from "features/AdvertisingBanner"
import { ImageListView } from "widgets/ImageListView/ui/ImageListView"
import { FlowerCardsList } from "widgets/FlowerCardsList"
import { Footer } from "widgets/Footer/index.js"

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <Container maxWidth="xl" sx={{ marginTop: 4, display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto'}}>
          <AdvertisingBanner />
          <Sidebar
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
          <AdvertisingBannerText />
          <ImageListView />
          <FlowerCardsList/>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default MainPage;
