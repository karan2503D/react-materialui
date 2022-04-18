import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react'

function MuiBottomNavigation() {
  const [value, setValue] = useState(0)
  return (
    <BottomNavigation sx={{ width: '100%', position: 'absolute', bottom: 0 }} value={value} onChange={(event, newValue) => {setValue(newValue)}} showLabels >
          <BottomNavigationAction icon={<HomeIcon />} label='Home' />
          <BottomNavigationAction icon={<FavoriteIcon /> } label='Favroite' />
          <BottomNavigationAction icon={<PersonIcon />} label='Profile' />
    </BottomNavigation>
  )
}

export default MuiBottomNavigation