import { Avatar, Chip, Stack } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

function MuiChip() {
  return (
    <Stack direction='row' spacing={1}>
        <Chip label='Chip' color='primary' size='small' icon={<FaceIcon />} />
        <Chip label='Outlined' color='secondary' size='small' variant='outlined' avatar={<Avatar>K</Avatar>} />
        <Chip label='Click' color='success' size='small' onClick={() => alert('Clicked')} />
        <Chip label='Delete' color='error' size='small' onClick={() =>  alert('Clicked') } onDelete={() => alert("Delete Handler Called")} />
    </Stack>
  )
}

export default MuiChip