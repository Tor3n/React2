import {Component} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


class MuiJs extends Component{



    render(){
   

        return(
            <div>
                    
                
                <Stack spacing={2} direction="row">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
            </div>
        );
    }
}

export default MuiJs;