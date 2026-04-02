import React from 'react'
import Box from '@mui/material/Box'

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: (theme) =>
          `calc(100% - ${theme.trello.appBardHeight} - ${theme.trello.boardBardHeight})`,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Content
    </Box>
  )
}

export default BoardContent
