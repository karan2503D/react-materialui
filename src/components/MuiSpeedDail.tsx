import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'
function MuiSpeedDail() {
    return (
        <SpeedDial ariaLabel='Navigation' sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon openIcon={<EditIcon />} />} >
            <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy'></SpeedDialAction>
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle='print'></SpeedDialAction>
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' tooltipOpen></SpeedDialAction>
        </SpeedDial>
    )
}

export default MuiSpeedDail