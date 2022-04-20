import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import React from 'react'

function MuiTimeline() {
  return (
    <Timeline position='alternate'>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>Some Thing</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>
          <TimelineItem>
              <TimelineSeparator>
                  <TimelineDot color='secondary' />
                  <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                  City B
              </TimelineContent>
          </TimelineItem>
          <TimelineItem>
              <TimelineSeparator>
                  <TimelineDot variant='outlined' />
              </TimelineSeparator>
              <TimelineContent>
                  City C
              </TimelineContent>
          </TimelineItem>
    </Timeline>
  )
}

export default MuiTimeline