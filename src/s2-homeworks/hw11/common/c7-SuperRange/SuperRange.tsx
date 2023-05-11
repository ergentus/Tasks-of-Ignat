import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
               '& .MuiSlider-thumb': {
                  backgroundColor: 'white',
                  border: '2px solid #00CC22',
                  width: '20px',
                  height: '20px',
                  boxShadow: '0 0 0 0 rgba(0, 204, 34, 0.30)',
                  '&:hover': {
                     boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.30)',
                  },
                  '&:active': {
                     boxShadow: '0 0 0 11px rgba(0, 204, 34, 0.30)',
                  },
               },
               '& .MuiSlider-thumb::before': {
                  content: '""',
                  backgroundColor: '#00CC22',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 0 0 rgba(0, 204, 34, 0.30)',
               },
               '& .MuiSlider-track': {
                  backgroundColor: '#00CC22',
                  border: '3px solid #00CC22',
               },
               '& .MuiSlider-rail': {
                  backgroundColor: '#8B8B8B',
                  border: '3px solid #8B8B8B',
               },
            }}
            {...props}
        />
    )
}

export default SuperRange
