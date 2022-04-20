import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React from 'react'

export default function MuiLoadingbutton() {
  return (
     <Stack spacing={2} direction='row'>
         <LoadingButton variant='outlined'>Submit</LoadingButton>
          <LoadingButton loading variant='outlined'>Submit</LoadingButton>
          <LoadingButton loading loadingIndicator='Loading....' variant='outlined'>Fetch Data</LoadingButton>
     </Stack>
  )
}
