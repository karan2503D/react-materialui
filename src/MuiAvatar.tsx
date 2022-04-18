import { Stack, Avatar, AvatarGroup } from '@mui/material'

function MuiAvatar() {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <AvatarGroup max={3}>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
                    <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
                    <Avatar src='' alt='Name Of Avatar'>BW</Avatar>
                    <Avatar src='' alt='Name Of Avatar'>CK</Avatar>
                </AvatarGroup>
            </Stack>
        </Stack>
    )
}

export default MuiAvatar