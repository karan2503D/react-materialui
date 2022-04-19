import React from 'react'
import { Stack, CircularProgress, LinearProgress } from '@mui/material';

export default function MuiProgress() {
  return (
    <Stack spacing={2}>
        <CircularProgress color='success'  />
          <CircularProgress variant='determinate' value={60} />
          <LinearProgress color='success' />
          <LinearProgress variant='determinate' value={60} />
    </Stack>
  )
}
