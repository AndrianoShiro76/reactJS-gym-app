import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
    return (
        <Box position="relative" p="20px" sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}>

            {/* Text Banner */}
            <Typography fontSize="26px" fontWeight="600" color="#FF2625">
                Let's Exercise
            </Typography>
            <Typography fontWeight="700" mb="23px" mt="30px" sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
                Exercise, Sleep, <br /> and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb="40px">
                Check out the best exercise
            </Typography>

            {/* Button */}
            <Button href="exercise" variant="contained" color="error" sx={{ backgroundColor: '#ff2625', padding: '10px' }}>Explore Menu</Button>

            <Typography fontSize="200px" color="#ff2625" fontWeight="600" sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}>
                exercise
            </Typography>

            {/* Image Banner */}
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />

        </Box>
    )
}

export default HeroBanner