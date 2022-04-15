import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { ButtonGroup, Button, IconButton, Stack } from '@mui/material'

function MuiButtons() {
  return (
    <>
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        {/* BUTTON WITH TEXT VARIANT */}
        {/* HREF CONVERTS AN BUTTON TAG TO ANGER TAG */}
        <Button variant='text' href='https://google.com' >Text</Button>
        {/* BUTTON WITH CONTAINED VARIANT */}
        <Button variant='contained'>Contained</Button>
        {/* BUTTON WITH OUTLINE VARIANT */}
        <Button variant='outlined'>outline</Button>
      </Stack>
      {/* Color */}
      <Stack spacing={2} direction='row'>
          <Button variant='contained' color='primary'>Primary</Button>
          <Button variant='contained' color='secondary'>Secondary</Button>
          <Button variant='contained' color='error'>Error</Button>
          <Button variant='contained' color='warning'>Warning</Button>
          <Button variant='contained' color='info'>Info</Button>
          <Button variant='contained' color='success'>Success</Button>
      </Stack>
      {/* SizeProp */}
      <Stack display='block' spacing={2} direction='row' >
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
      </Stack>
      {/* ICON BUTTON */}
      <Stack spacing={2} direction='row'>
          <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={() => alert("Clicked")}>Icon Before Text</Button>
          <Button variant='contained' endIcon={<SendIcon />} disableElevation>Icon After Text</Button>
      </Stack>
      {/* ICON BUTTON */}
      <IconButton aria-label='send' color='success' size='small'>
        <SendIcon />
      </IconButton>
      </Stack>
      {/* BUTTON GROUP */}
      <Stack direction='row' >
        <ButtonGroup variant='contained' orientation="vertical" size='small' color='secondary' aria-label='alignment button group'>
          <Button onClick={() => alert('Left Clicked')}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </>
  )
}

export default MuiButtons