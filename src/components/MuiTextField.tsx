import React, { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

function MuiTextfield() {
    const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='name' variant='outlined' />
            <TextField label='name' variant='filled' />
            <TextField label='name' variant='standard' />
        </Stack>
        <Stack direction='row' spacing={2}>
              <TextField label='Small Size Secondary Color' size='small' color='secondary' variant='standard' />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form Input' required value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? 'Required Password' : 'Verified' } />
            <TextField label='Form Input' helperText='Enter Any Help Text To User' type='text' disabled />
            {/* <TextField label='read only' InputProps={{ readonly : true }} /> */}
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{ 
                startAdornment : <InputAdornment position='start'>$</InputAdornment>
             }} />
            <TextField label='Weight' InputProps={{
                  endAdornment: <InputAdornment position='end'>kg</InputAdornment>
            }} />
        </Stack>
    </Stack>
  )
}

export default MuiTextfield;