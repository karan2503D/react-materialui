import React, { useState } from 'react'
import { Box, FormControl, FormLabel, FormGroup, Checkbox, FormControlLabel } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const MuiCheckBox = () => {
    const [accept, setAccept] = useState(false);
    console.log({ accept });
    const [skills, setSkills] = useState<string[]>([])
    console.log(skills);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(event.target.checked);
    }
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if(index === -1 ){
            setSkills([...skills, event.target.value]);
        }else{
            setSkills(skills.filter((skills) => skills !== event.target.value))
        }
    }
    
    return (
        <Box>
            <Box>
                <FormControlLabel label='I Accept Terms and Conditions' control={<Checkbox size='small' color='secondary' checked={accept} onChange={handleChange} />} />
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}  checked={accept} onChange={handleChange} />
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row >
                        <FormControlLabel label='HTML' value='html' control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange} />} />
                        <FormControlLabel label='CSS' value='css' control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />} />
                        <FormControlLabel label='JS' value='js' control={<Checkbox checked={skills.includes('js')} onChange={handleSkillChange} />} />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckBox