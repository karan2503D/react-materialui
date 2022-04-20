import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import React, { useState, useEffect } from 'react'

function MuiTabs() {
    const [value, setValue] = useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList aria-label='Tabs example' onChange={handleChange} textColor='secondary' indicatorColor='secondary' centered>
                      <Tab label='Tab one' value='1' icon={<FavoriteIcon />} iconPosition='start'></Tab>
                      <Tab label='Tab Two' value='2'></Tab>
                      <Tab label='Tab Three' value='3' disabled></Tab>
                </TabList>
            </Box>
              <TabPanel value='1'> Panel One </TabPanel>
              <TabPanel value='2'> Panel Two </TabPanel>
              <TabPanel value='3'> Panel Three </TabPanel>
        </TabContext>
    </Box>
  )
}

export default MuiTabs