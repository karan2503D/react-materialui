import React from 'react'
import { Box } from '@mui/material' ;

function MuiLayout() {
  return (
    //   BOX IS USED TO WRAP SOME TAGS IN IT , IT WORKS SAME AS DIV
    // SPAN WILL CONVERT IT INTO SPAN TAG
      <>
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
      </>
  )
}

export default MuiLayout