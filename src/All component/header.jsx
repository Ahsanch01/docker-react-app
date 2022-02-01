import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
function header(){
    return(
<Box style={{"backrground":"blue"}}>
<AppBar position="static">
<Typography variant='h1'>
    Azure Devops Team</Typography>
</AppBar>
</Box>
    )
}
export default header;