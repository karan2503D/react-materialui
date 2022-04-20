import { Stack, TextField } from '@mui/material'
import { DatePicker, TimePicker } from '@mui/lab'
import React, { useState } from 'react'

// BOTH IN THE SAME TAG CAN ALSO BE DONE
export default function MuiDateTimePicker() {
    const [selectDate, setSelectDate] = useState<Date | null>(null)
    const [selectTime, setSelectTime] = useState<Date | null>(null)
    console.log({ selectDate });
    console.log({ selectedTime: selectTime && selectTime.toLocaleTimeString(), });
  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
          <DatePicker label='Date Picker' renderInput={(params) => <TextField {...params} />} value={selectDate} onChange={(newValue) => {
              setSelectDate(newValue);
          }} />
          <TimePicker label='Time Picker' renderInput={(params) => <TextField {...params} />} value={selectTime} onChange={(newValue) => {
              setSelectTime(newValue);
          }} />
    </Stack>
  )
}
