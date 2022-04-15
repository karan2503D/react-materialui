import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
    return (
        <>
            {/* H1 TO H6 */}
            {/* COMPONENT I.E HTML ELEMENT IS THE H4 BUT THE CLASS H4 */}
            {/* GUTTER BOTTOM ADDS THE MARGIN IN THE BOTTOM */}
            <Typography variant='h1' component='h4' gutterBottom>H1</Typography>
            {/* Subtitle */}
            <Typography variant='subtitle1'>subtitle1</Typography>
            <Typography variant='subtitle2'>subtitle2</Typography>
            {/* BODY TEXT */}
            <Typography variant='body1'>Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Typography variant='body2'>Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
             
        </>
    )
}
