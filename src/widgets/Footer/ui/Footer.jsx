import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <div style={{height: 200}}>
    <Paper
      sx={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        minWidth: '100%',
        flex: '0 0 auto',
        p: 1,
      }}
      component="footer"
      elevation={16}
    >
      <Container
        maxWidth="lg"
      >
        <Typography
          variant="subtitle1"
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            my: 1,
          }}
        >
          Powered by Ilya Shvedov
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023 Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
    </div>
  );
};

