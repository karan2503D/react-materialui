import { Box, TextField } from '@mui/material'
import { DateRangePicker, DateRange } from '@mui/lab'
import React, { useState } from 'react'

export default function MuiDateRange() {
    const [value, setValue] = useState<DateRange<Date>>([null, null]); 
    console.log(value);
  return (
    <Box width='500px'>
        {/* <DateRangePicker startText='check-in' end-Text='check-out' value={value} onChange={(changeValue) => {setValue(changeValue)}} renderInput={(startProps, endProps) => (
            <>
                <TextField{...startProps} />
                <Box sx={{ mx: 2 }}>To</Box>
                <TextField{...endProps} />
            </>
        )} /> */}
    </Box>
  )
}
