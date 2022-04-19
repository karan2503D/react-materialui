import { Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import React, { useState } from 'react'

function MuiDialog() {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)} aria-aria-labelledby='dialog-title' aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>Submit</DialogTitle>
            <DialogContent>
                <DialogContentText id='dialog-description'>Sure ?</DialogContentText>
            </DialogContent>
            <DialogActions>
                  <Button>Submit</Button>
                  <Button onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default MuiDialog