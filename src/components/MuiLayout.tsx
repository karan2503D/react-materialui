import React from 'react'
import { Box, Stack, Divider } from '@mui/material' ;

function MuiLayout() {
  return (
    //   BOX IS USED TO WRAP SOME TAGS IN IT , IT WORKS SAME AS DIV
    // SPAN WILL CONVERT IT INTO SPAN TAG
    // SPACING IN MULTIPLED BY 8 
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
  )
}

export default MuiLayout