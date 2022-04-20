import { Box, Avatar, Typography, Stack, Skeleton } from '@mui/material'
import { width } from '@mui/system'
import React, { useEffect, useState } from 'react'

export default function MuiSkeleton() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])
    {/* <Skeleton variant='text' animation={false} />
          <Skeleton variant='circular' width={40} height={40} />
          <Skeleton variant='rectangular' width={250} height={125} /> */}
    return (
          <Box sx={{ width: '250px' }}>
            {
                loading ? (<Skeleton variant='rectangular' width={256} height={144} animation='wave' />) : (<img src='https://unsplash.com/photos/iedYX4wsxwI' alt='' width={256} height={144} />)
            }
            <Stack direction='row' spacing={1} sx={{ width: '100%', marginTop: '12px' }}>
                {
                    loading ? (<Skeleton variant='circular' width={40} height={40} animation='wave' />) : (<Avatar>K</Avatar>)
                }
            </Stack>
            <Stack direction='row' spacing={1} sx={{ width: '100%', marginTop: '12px' }}>
                {
                    loading ? (<>
                        <Typography variant='body1'>
                            <Skeleton variant='text' width='100%' animation='wave' />
                        </Typography>
                        <Typography variant='body2'>
                            <Skeleton variant='text' width='100%' animation='wave' />
                        </Typography>
                    </>) : (<>
                            <Typography variant='body2'>
                                Text
                            </Typography>
                    </>)
                }
            </Stack>
            
          </Box>
  ) 
}
