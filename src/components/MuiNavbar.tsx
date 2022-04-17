import { AppBar, Stack, Button, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import React, { useState } from 'react'

function MuiNavbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement >(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    POKEMON APP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit'>About</Button>
                    <Button id='resources-button' onClick={handleClick} color='inherit' aria-control={open ? 'resources-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined} >About</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
                <Menu 
                    id='resources-menu' 
                    anchorEl={anchorEl}
                    open={open} 
                    MenuListProps={{
                        'aria-labelledby': 'resources-button',
                    }}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar