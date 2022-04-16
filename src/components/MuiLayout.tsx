import React from 'react'
import { Grid,Box, Stack, Divider, Paper } from '@mui/material' ;

function MuiLayout() {
  return (
    //   BOX IS USED TO WRAP SOME TAGS IN IT , IT WORKS SAME AS DIV
    // GRID COMPONENT IS USEFUL FOR 2 DIMENSIONAL AND RESPONSIVE LAYOUT
    // SPAN WILL CONVERT IT INTO SPAN TAG
    // SPACING IN MULTIPLED BY 8 
    <Paper sx={{ padding: '32px' }} elevation={4}>
      <Stack sx={{ border: '1px solid' }} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem />}>
          <Box component='span' sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                  backgroundColor: 'primary.light',
              },
          }}>
              Test
          </Box>
          <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>

          </Box>
          {/* STACK COMPONENT IS USED TO MANAGE LAYOUT IN 1 DIMENSION I.E EITHER IN HORIZONTAL OR VERTICAL */}

      </Stack>
      {/* GRID HAS 2 COMPONENTS 1 FOR PARENT AND 1 FOR CHILD */}
      <Grid container spacing={2}>
           <Grid item xs='auto' sm={6}>
               <Box bgcolor='primary.light' p={2}>1</Box>
           </Grid>
              <Grid item xs={12} sm={6}>
                  <Box bgcolor='primary.light' p={2}>2</Box>
           </Grid>
              <Grid item xs={12} sm={6}>
                  <Box bgcolor='primary.light' p={2}>3</Box>
           </Grid>
              <Grid item xs={12} sm={6}>
                  <Box bgcolor='primary.light' p={2}>4</Box>
           </Grid>
              <Grid item xs={12} sm={6}>
                  <Box bgcolor='primary.light' p={2}>5</Box>
           </Grid>
      </Grid>
      </Paper>
  )
}

export default MuiLayout