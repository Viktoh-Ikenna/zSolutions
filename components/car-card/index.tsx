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

export default function CarCards() {
    const [expanded, setExpanded] = React.useState(false);
    const theme = useTheme();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 450, minWith:350 }} className="relative">
            <CardMedia
                component="img"
                height="194"
                image={banner}
                alt="Paella dish"
            />
            <FavouriteIconContainer>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </FavouriteIconContainer>

            <CardContent>
                <Grid container>
                    <Grid xs={12}>
                        <Typography variant='h5' color={theme.colors.primary}>Bmw</Typography>

                    </Grid>
                    <Grid xs={6} className='mb-1'>
                        <Typography variant='h4'>BMW M3</Typography>
                    </Grid>
                    <Grid xs={6} style={{ textAlign: 'right' }}>
                        <Typography variant='h4' color={theme.colors.primary}>$760</Typography>
                    </Grid>
                    <Grid xs={11}>
                        <Typography variant='h5' color={'#808080'} className='flex flex-start justify-start align-center'><span className='flex-end pt-1'><GoLocation color={theme.colors.primary} size={20} /></span> Jarkata, Indonesia</Typography>

                    </Grid>
                    <Grid xs={1}>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </Grid>
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
