import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CarCards from '../car-card';
import { Button, Typography } from '@mui/material';
import { SeeMoreContainer } from './inject.styles';
import useTheme from '../../hooks/useTheme';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <SeeMoreContainer>
        <Typography variant='h2' color={theme.colors.text}>
          Lets Help You Find Your Dream Car
        </Typography>
        <Typography paragraph fontSize={25} color={'#808080'} style={{ marginBottom: 60, maxWidth: "40%", textAlign: 'center' }}>
          We recommend the the very best and newest cars today. and also friendly prices for you
        </Typography>
      </SeeMoreContainer>
      <Grid container spacing={1}>
        <Grid item xs={6} md={4} lg={4}>
          <CarCards />
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <CarCards />
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <CarCards />
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <CarCards />
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <CarCards />
        </Grid><Grid item xs={6} md={4} lg={4}>
          <CarCards />
        </Grid>
      </Grid>
      <SeeMoreContainer>
        <Button style={{ fontStyle: 'uppercase' }} variant='outlined'>
          see more
        </Button>
      </SeeMoreContainer>

    </Box>
  );
}
