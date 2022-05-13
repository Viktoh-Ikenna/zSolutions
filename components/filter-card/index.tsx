import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import banner from '../../assets/images/banner2.jpeg';
import { BrandContainer, FavouriteIconContainer } from './card.styles';
import { Grid } from '@mui/material';
import { GoLocation } from 'react-icons/go';
import useTheme from '../../hooks/useTheme';
import Hr from '../hr/hr.component';
import FilterItem from '../filter-item';
import { filters } from './filters.d';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}


export default function FilterCard() {
    const [expanded, setExpanded] = React.useState(false);
    const theme = useTheme();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 450, minWith: 350 }} className="relative">

            <CardContent>
                <Typography variant='h5'>Filter By</Typography>
                <br />
                <Hr />
                <Grid container>
                    <FilterItem show={filters.carType.open} filters={filters.carType.lists} name={filters.carType.name} />
                    <FilterItem show={filters.capacity.open} filters={filters.capacity.lists} name={filters.capacity.name} />
                    <FilterItem show={filters.carType.open} filters={filters.carType.lists} name={filters.carType.name} />
                </Grid>
            </CardContent>
        </Card>
    );
}
