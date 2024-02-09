import { Delete, Edit, Preview } from '@mui/icons-material'
import { Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { useValue } from '../../../context/ContextProvider'
import { deleteGear } from '../../../actions/gear'

const GearsActions = ({params}) => {
    const {dispatch, state:{currentUser}} = useValue();
  return (
    <Box>
        <Tooltip title='View gear details'>
            <IconButton onClick={()=>dispatch({type:'UPDATE_GEAR', payload:params.row})}>
                <Preview/>
            </IconButton>
        </Tooltip>
        <Tooltip title='Edit the gear'>
            <IconButton onClick={()=>{}}>
                <Edit/>
            </IconButton>
        </Tooltip>
        <Tooltip title='Delete gear'>
            <IconButton onClick={()=>deleteGear(params.row, currentUser, dispatch )}>
                <Delete/>
            </IconButton>
        </Tooltip>
    </Box>
  )
}

export default GearsActions