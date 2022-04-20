import { Box, Paper } from '@mui/material'
import { Masonry } from '@mui/lab' 
import React from 'react'
import { HeightSharp } from '@mui/icons-material'

function MuiMasonry() {
    const height = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
        <Masonry columns={4} spacing={1} >
            { 
                height.map((height, index) => (
                    <Paper key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height, border: '1px solid' }}>
                        {index + 1}
                    </Paper>
                ))
            }
        </Masonry>
    </Box>
  )
}

export default MuiMasonry