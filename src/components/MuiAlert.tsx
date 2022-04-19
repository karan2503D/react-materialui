import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import CheckIcon from '@mui/icons-material/check'

function MuiAlert() {
  return (
    <Stack spacing={2}>
        <Alert severity='error' onClose={() => alert("Close Clicked")}>Error ALERT</Alert>
          <Alert severity='warning'>Warning ALERT</Alert>
          <Alert severity='success'>Success ALERT</Alert>
          <Alert severity='info'>Info ALERT</Alert>

          <Alert severity='error' variant='outlined'>
            <AlertTitle>Error</AlertTitle>
              Error ALERT
            </Alert>

          <Alert severity='error' variant='filled' icon={<CheckIcon fontSize='inherit' />} action={
              <Button color='inherit' size='small'> UNDO </Button>
          }>Error ALERT</Alert>
    </Stack>
  )
}

export default MuiAlert