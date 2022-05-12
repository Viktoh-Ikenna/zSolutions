import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CarCards from '../car-card';
import { Button, Typography } from '@mui/material';
import { SeeMoreContainer } from './inject.styles';
import useTheme from '../../hooks/useTheme';
import { posts } from './posts.data';



export default function CardLits({ toggleShowAds }) {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <Grid container spacing={1}>
        {
          posts.map((el, i) => (
            <Grid key={i} item xs={6} md={4} lg={4}>
              <CarCards onClick={toggleShowAds} data={el} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
