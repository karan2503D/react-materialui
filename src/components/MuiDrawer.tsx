import { Box, Typography, Drawer, IconButton } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

function MuiDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
        <IconButton size='large' edge='start' color='inherit' aria-aria-label='logo' onClick={() => setIsDrawerOpen(true) }>
            <MenuIcon />
        </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => { setIsDrawerOpen(false) }} >
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <Typography>
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}

export default MuiDrawer