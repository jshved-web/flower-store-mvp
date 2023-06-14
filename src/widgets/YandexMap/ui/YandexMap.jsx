import React from "react"
import { Box } from "@mui/material"

export const YandexMap = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A9682773c0d6b2cddd0911eae2ec7e2b3bacc8152b6cba55b19c191860fad1c75&amp;source=constructor"
        width="652" height="522" frameBorder="0">
      </iframe>
    </Box>
  )
}

