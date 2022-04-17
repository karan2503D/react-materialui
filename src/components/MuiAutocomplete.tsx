
import { Stack, Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react'

type Skill = {
    id: number,
    label: string
}

const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'];

const skillsOption = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))

function MuiAutocomplete() {
    const [value, setValue] = useState<string | null>(null);
    console.log(value);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log(skill);
    return (
    <Stack spacing={2} width='250px' >
        <Autocomplete options={skills} renderInput={(params)=> <TextField {...params} label='skills' /> } value={value} onChange={(event: any, newValue: string | null) => setValue(newValue)} freeSolo />
          <Autocomplete options={skillsOption} renderInput={(params) => <TextField {...params} label='skills' />} onChange={(event: any, newValue: Skill | null) => setSkill(newValue)} value={skill} />
    </Stack>
  )
}

export default MuiAutocomplete