import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { BsDash } from 'react-icons/bs'
import useTheme from '../../hooks/useTheme';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
interface FilterItemProps {
    show?: boolean;
    name: string,
    filters: { label: string }[],

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

export default function FilterItem({ show, name, filters }: FilterItemProps) {
    const [expanded, setExpanded] = React.useState(show || false);
    const theme = useTheme();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container className='pt-2'>
            <Grid xs={12}>
                <Grid container>
                    <Grid item xs={11}>
                        <Typography paragraph fontWeight={700}>{name}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <BsDash />
                        </ExpandMore>
                    </Grid>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <FormGroup>
                            {
                                filters.map(el => (
                                    < FormControlLabel control={< Checkbox />} label={el.label} />

                                ))
                            }

                        </FormGroup>
                    </Collapse>
                </Grid>
            </Grid>

        </Grid>
    );
}
