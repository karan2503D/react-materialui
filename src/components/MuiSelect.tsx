import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material';

const MuiSelect = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState<String[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
    const handleMultipleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
  return (
    //   Single Option Selector Dropdown
    <Box width='250px'>
        <TextField label='Select Country' select value={country} onChange={handleChange} fullWidth>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='USA'>USA</MenuItem>
            <MenuItem value='EU'>Europe</MenuItem>
            <MenuItem value='EU'>Europe</MenuItem>
        </TextField>
        {/* Double Selector Dropdown */}
        <TextField label='Select Country' select value={countries} onChange={handleMultipleChange} fullWidth SelectProps={{
            multiple : true
        }} size='small' color='secondary' helperText='please select your country' error>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='USA'>USA</MenuItem>
            <MenuItem value='EU'>Europe</MenuItem>
            <MenuItem value='EU'>Europe</MenuItem>
        </TextField>
    </Box>
    // LIST RENDERING FOR CALLING FROM API IN SELECT
  )
}

export default MuiSelect