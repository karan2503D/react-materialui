import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function MuiBreadcrumb() {
  return (
    <Box m={2}>
        {/* LIKE ITEMSAFTERCOLLAPSE THERE IS ITEM BEFORE COLLAPSE */}
        <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small' />} maxItems={2} itemsAfterCollapse={2} >
              <Link underline='hover' href='#'>Home</Link>
              <Link underline='hover' href='#'>About</Link>
              <Link underline='hover' href='#'>Settings</Link>
              <Typography color='GrayText.primary'>Test</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumb