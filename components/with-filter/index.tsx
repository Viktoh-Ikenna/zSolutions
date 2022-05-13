import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CarCards from '../car-card';
import useTheme from '../../hooks/useTheme';
import CardLits from '../injectToLanding/injectToHome.component';
import FilterCard from '../filter-card';


export default function WithFilter({toggleShowAds}) {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3} lg={3}>
          <FilterCard />
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <CardLits toggleShowAds={toggleShowAds}/>
        </Grid>
      </Grid>
    </Box>
  );
}
