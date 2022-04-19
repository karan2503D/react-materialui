import { Snackbar, Button, Alert, AlertProps } from '@mui/material'
import React, { useState, forwardRef } from 'react'

// CUSTOM SNACKBAR CAN ALSO BE MADE
function MuiSnackbar() {
const [open, setOpen] = useState(false)
const handleClose = (event?: React.SyntheticEvent | Event, reason?: string ) => {
    if(reason === 'clickaway'){
        return
    }
    setOpen(false);
}
  return (
    <>
        <Button onClick={() => setOpen(true)}>Submit</Button>
        <Snackbar message='Form Submitted' autoHideDuration={5000} open={open} 
        onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} />
    </>
  )
}

export default MuiSnackbar