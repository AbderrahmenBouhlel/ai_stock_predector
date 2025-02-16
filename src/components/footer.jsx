

import { Box  ,Link} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';







export default function Footer() {

    return (
        <Box component={"footer"}  
          sx={{
              backgroundColor: '#f5f5f5',
              padding: '20px',
              textAlign: 'center',
              flexGrow:1,
              maxHeight: '200px',
              mt: 'auto',
        }}>
          <Grid container spacing={2} gap={2} justifyContent={"center"}>
               {/* Left side of the footer */}
              <Grid  xs={12} sm={4} gap={2} sx={{display:"flex",justifyContent:"center" }}>
                  <GitHubIcon sx={{cursor:"pointer" , fontSize:'35px'}}/>
                  <FacebookIcon sx={{cursor:"pointer", fontSize:'35px'}}/>
                  <LinkedInIcon sx={{cursor:"pointer", fontSize:'35px'}}/>
                  <YouTubeIcon sx={{cursor:"pointer",fontSize:'35px'}}/>
              </Grid>

            
              {/* Right side of the footer */}
              <Grid  size={12} sm={4} textAlign={"center"} sx={{textDecoration:"none"}}>
                  <Link  href='#' underline='hover' color='inherit' sx={{mr:2}}>
                      Home
                  </Link>
                  <Link href='#' underline='hover' color='inherit' sx={{mr:2}}>
                      About
                  </Link>
                  <Link href='#' underline='hover'  color='inherit' sx={{mr:2}}>
                      Contact
                  </Link>
                  <Link href='#' underline='hover'  color='inherit' sx={{mr:2}}>
                      News
                  </Link>
                  <Link href='#' underline='hover'  color='inherit' sx={{mr:2}}>
                      Our team
                  </Link>
              
              </Grid>

              <Grid  size={12} sm={4} textAlign={"center"}>
                  <Typography variant="body1">
                      &copy; 2025 Your Company
                  </Typography>
              </Grid>

          </Grid>

        </Box>
    )



}