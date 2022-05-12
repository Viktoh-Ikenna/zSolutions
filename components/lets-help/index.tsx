import * as React from 'react';
import { Typography } from '@mui/material';
import { SeeMoreContainer } from '../injectToLanding/inject.styles';
import useTheme from '../../hooks/useTheme';

export default function LetsFind() {
    const theme = useTheme();
    return (
        <SeeMoreContainer>
            <Typography variant='h2' color={theme.colors.text}>
                Lets Find Your Dream Car
            </Typography>
            <Typography paragraph fontSize={25} color={'#808080'} style={{ marginBottom: 60, maxWidth: "40%", textAlign: 'center' }}>
                We recommend the the very best and newest cars today. and also friendly prices for you
            </Typography>
        </SeeMoreContainer>
    );
}