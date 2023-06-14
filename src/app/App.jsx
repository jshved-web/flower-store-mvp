import React, { Suspense } from "react"
import { AppRouter } from "./providers/AppRouter"
import { Box, Container } from "@mui/material"
import mainBackground from 'entities/assets/main-background.jpg';
import { Footer } from "widgets/Footer/"

const styles = {
  boxContainer: {
    backgroundImage: `url(${mainBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const App = () => {
  return (
    <div>
      <Box style={styles.boxContainer}>
        <Container maxWidth="xl" sx={{ background: '#eeeeee', minHeight: '100vh', position: 'relative' }}>
          <Suspense fallback={<div>...</div>} >
            <AppRouter/>
          </Suspense>
        </Container>
      </Box>
    </div>
  )
}

export default App;
