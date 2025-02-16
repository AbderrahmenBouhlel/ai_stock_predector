import {AppBar,IconButton,Toolbar,Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import {Tooltip} from '@mui/material';
import {useTheme} from '@mui/material';



export default function NavBar() {
    const theme = useTheme();
    
    return (
        <AppBar position='static' color='primary'>
            <Toolbar sx={{color:theme.palette.secondary.light}}> 
                <Tooltip title='Menu' >
                    <IconButton
                        size='large'
                        edge='start'  
                        color='inherit' 
                        aria-label='menu'
                        sx={{mr: 2}}
                    >
                        <MenuIcon  />
                    </IconButton>

                </Tooltip>
            

                <Typography variant='h6' component={'div'} sx={{flexGrow: 1}}>
                    Dodgy
                </Typography>
            
                <Button color='inherit' variant='outlined' startIcon={<LoginIcon />}>
                    Login
                </Button>

            </Toolbar>
        
        </AppBar>
    )
}