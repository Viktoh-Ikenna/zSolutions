import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
interface imageCarouselProps {
    images: { imgPath }[],
}

function ImageCarousel({ images }: imageCarouselProps) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [autoPlayState, setAutoPlay] = React.useState(false);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: "100%", flexGrow: 1 }} className="relative" >
            <div>
                <Button
                    size="large"
                    className="absolute z-50 top-2 right-2 border border-2 text-white lowercase"
                    onClick={()=> setAutoPlay(prev=>!prev)}
                >
                <Typography>
                {autoPlayState?"stop autoplay":"autoplay"}
                </Typography>
                </Button>
            </div>
            {autoPlayState && <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents

            >
                {images.map((step, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 255,
                                    display: 'block',
                                    maxWidth: "100%",
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>}
            {!autoPlayState && <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents>
                {images.map((step, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 255,
                                    display: 'block',
                                    maxWidth: "100%",
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </SwipeableViews>}
            <div className='flex-center -top-10'>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="large"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                            className="absolute top-1/2 right-0"
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={

                        <Button className="absolute top-1/2 left-0" size="small" onClick={handleBack} disabled={activeStep === 0} >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        </Button>
                    }
                />
            </div>

        </Box>
    );
}

export default ImageCarousel;
