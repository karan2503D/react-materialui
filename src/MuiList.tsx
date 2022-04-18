import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

function MuiList() {
    return (
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary='List Item 1' secondary='Secondary text' />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary='List Item 2' secondary='Secondary text' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary='List Item 3' secondary='Secondary text' />
                </ListItem>
            </List>
        </Box>
    )
}

export default MuiList