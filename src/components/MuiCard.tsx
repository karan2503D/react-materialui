import React from 'react'
import { Box, Typography, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material'

function MuiCard() {
    return (
        //   CARD CONTAINS CONTENT AND ACTIONS ABOUT SINGLE TOPIC
        <Box width='300px'>
            <Card>
                <CardMedia component='img' height='140' image='https://source.unsplash.com/random' alt='unsplash Image' />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        React
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' >Share</Button>
                    <Button size='small' >Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard