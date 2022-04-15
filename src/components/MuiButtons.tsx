import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { ToggleButtonGroup, ToggleButton,ButtonGroup, Button, IconButton, Stack } from '@mui/material'
// TOGGLE BUTTON COMPONENT USE to group realated options

function MuiButtons() {
  const [formats, setFormats] = useState<string | null>(null)
  const HandleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null ) => {
    setFormats(updatedFormats);
  }
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
      <Stack direction="row">
        <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={HandleFormatChange} size='small' color='success' orientation='vertical' exclusive>
          <ToggleButton value='bold'aria-label='bold'><FormatBoldIcon /></ToggleButton>
          <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  )
}

export default MuiButtons