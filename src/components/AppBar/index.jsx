import React from 'react'
import ModeSelect from '../ModeSelect'
import Box from '@mui/material/Box'

const AppBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBardHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <ModeSelect />
    </Box>
  )
}

export default AppBar
