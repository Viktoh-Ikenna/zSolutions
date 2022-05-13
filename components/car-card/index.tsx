import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import banner from '../../assets/images/banner2.jpeg';
import { FavouriteIconContainer } from './card.styles';
import { Grid } from '@mui/material';
import { GoLocation } from 'react-icons/go';
import useTheme from '../../hooks/useTheme';
import { useDispatch } from 'react-redux';
import { getEachCar } from '../../redux/cars/car';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CarCards({ onClick, data }) {
    const { name, brand, prize, city, country, favourite, imgs } = data;
    const [expanded, setExpanded] = React.useState(false);
    const theme = useTheme();
    const dispatch = useDispatch();
    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };
    const handleClick = () => {
        onClick()
        dispatch(getEachCar(data));
    }
    const Capitalize = (val: string) => {
        let val2: string[] = `${val}`.split('');
        val2.shift();
        return `${val}`.charAt(0).toUpperCase() + val2.join('').toLowerCase();
    }
    const removeUplaod = () => {
        const img = imgs[0].split('/');
        img.shift()
        return img.join('/');
    }
    return (
        <Card onClick={handleClick} sx={{ maxWidth: 450, minWith: 400, minHeight:400 }} className="relative">
            <CardMedia
                component="img"
                height="200"
                image={removeUplaod()}
                alt="Paella dish"
                style={{minHeight:210}}
            />
            <FavouriteIconContainer>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon style={{ color: favourite ? theme.colors.primary : theme.colors.light }} />
                </IconButton>
            </FavouriteIconContainer>

            <CardContent>
                <Grid container className={'min-h-full'}>
                    <Grid xs={12}>
                        <Typography variant='h5' color={theme.colors.primary}>{Capitalize(brand)}</Typography>

                    </Grid>
                    <Grid xs={6} className='mb-1'>
                        <Typography variant='h4' className='mt-1' fontSize={25}>{Capitalize(name)}</Typography>
                    </Grid>
                    <Grid xs={6} style={{ textAlign: 'right' }}>
                        <Typography variant='h4' className='mt-1' fontSize={30} color={theme.colors.primary}>${prize}</Typography>
                    </Grid>
                    <Grid xs={11}>
                        <Typography variant='h5' color={'#808080'} className='flex flex-start justify-start align-center mt-1'><span className='flex-end mt-1'><GoLocation color={theme.colors.primary} size={20} style={{ marginRight: 10, marginTop: 2 }} /></span> {Capitalize(city)}, {Capitalize(country)}</Typography>
                    </Grid>
                    {/* <Grid xs={1}>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            className='mt-1'
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </Grid> */}
                </Grid>
            </CardContent>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant='h2'>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
