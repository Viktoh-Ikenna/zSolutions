import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CarCards from '../car-card';
import useTheme from '../../hooks/useTheme';
import { posts } from './posts.data';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import { Typography } from '@mui/material';


export default function CardLits({ toggleShowAds }) {
  const data = useSelector(state => state.carReducers).allCars;
  const theme = useTheme();
  console.log(data, 'data')
  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <Grid container spacing={1}>
        {data &&
          data.map((el, i) => (
            <Grid key={i} item xs={6} md={4} lg={4}>
              <CarCards onClick={toggleShowAds} data={el} />
            </Grid>
          ))
        }
        {
          data === null &&
          [...Array(3)].map(el => {
            return (
              <Grid key={el} item xs={6} md={4} lg={4}>
                <SkeletonColor />
              </Grid>
            )
          })

        }
      </Grid>
    </Box>
  );
}


function SkeletonColor() {
  return (
    <Box
      sx={{
        bgcolor: 'transparent',
        p: 2,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection:'column'
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.300' }}
        variant="rectangular"
        width={'100%'}
        height={200}
      />
      <Typography component="div" variant={'h2'}>
        <Skeleton />
      </Typography>
      <Typography component="div" variant={'h6'}>
        <Skeleton />
      </Typography>
    </Box>
  );
}