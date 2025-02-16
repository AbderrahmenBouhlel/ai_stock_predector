
import rich_guy_img from '../assets/rich_guy.png';
import { useState , useRef } from 'react';
import {IconButton,Button,useTheme , Box  ,InputBase ,Paper , CircularProgress} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import {fetchReport} from '../assets/sendMessage';
import Footer from './footer';
import NavBar from './navBar';


export default function Ai_predector() {
    const [tickers, setTickers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const [response , setResponse] = useState("")
    const theme = useTheme();


    // useEffect(()=>{
    //     sendMessage('Hello, how are you?');
    // }, [])
    function handleAddTicker(e){
        error  && setResponse('')
        e.preventDefault();
        if (response){
            setResponse(null);


        }
        const ticker = inputRef.current.value?.toUpperCase();
        if (!ticker) {
            setError('Please enter a ticker symbol');
            return;
        };
        setTickers([...tickers, ticker]);
    }
    
  


    async function generateReport(){
        
        try {
            if (tickers.length === 0){
                setError('Please add a ticker symbol');
                return;
            }
            setLoading(true);
            
            const aiResponse = await fetchReport(tickers);
            setResponse(aiResponse);
            setTickers([]);
            setLoading(false);

        } catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
            return;
        }
      
    }


    const renderContent = () => {
        if (loading) {
            return <CircularProgress sx={{alignSelf:'center', margin:'120px'}}/>;
        } else if (response) {
            return <Typography sx={{alignSelf:'center', margin:'50px'}} variant='p'>{response}</Typography>;
        } else {
            return (
                <Box  sx={{display:"flex",flexDirection:"column" ,justifyContent:'center',mt:2,flexWrap:'wrap',gap:2 }}>
                {
                    tickers.length > 0 ? ( 
                        <>
                            <Typography variant='h6' color='primary' gutterBottom>
                                Your Tickers
                            </Typography>
                            <Box sx={{display:'flex',flexWrap:'wrap',gap:2}}>
                                {tickers.map((ticker) => (
                                    <Button key={ticker} variant='contained' color='primary'>
                                        {ticker}
                                    </Button>
                                ))}
                            </Box>
                        </>
                    ) : (
                        <Typography variant='body1' color='textSecondary' gutterBottom sx={{mt:2}} textAlign={"center"}>
                            No Tickers Added
                        </Typography>
                    )

                }
                <Button color='primary' variant="contained" sx={{mt:2 , alignSelf:'center' , color:theme.palette.primary.contrastText}}  onClick={generateReport}>
                    Generate report
                </Button>
        
                </Box>
            );
        }
    }
    return (    
        <Box sx={{flexGrow: 1, minHeight:"100vh" , display:'flex',flexDirection:'column',overflowX:'hidden'}}>
            {/* navbar */}
            <NavBar />

            
            <Box sx={{padding:6}}>
                <Grid container gap={2} justifyContent={"space-between"} paddingX={12}>
                    {/* First Column */}
                    <Grid  size={{ xs: 12, md: 8}} textAlign={'left'} sx={{display:"flex" , flexDirection:"column"}} >
                        <Box sx={{mb:4}}>
                            <Typography color={theme.palette.primary.main} variant='h5'>
                                Welcome to Dodgy
                            </Typography>
                            <Typography variant='body1' color='textSecondary' >
                                Dodgy is a stock price prediction tool that uses AI to predict stock prices. 
                                It uses a neural network to predict stock prices based on historical data.
                            </Typography>
                            <Typography variant='body1' color='textSecondary' gutterBottom>
                                To get started, enter a stock ticker symbol in the search bar above.
                            </Typography>
                        </Box>

                        {error && <Typography color='error' sx={{textAlign:'center'}}>{error}</Typography>}

                        <Paper component="form" sx={{p: '2px 4px', display: 'flex', alignItems: 'center' ,alignSelf:"center", width: 500}} onSubmit={handleAddTicker}>
                            <InputBase 
                                placeholder='Enter Stock Ticker Symbol'
                                fullWidth
                                sx={{ml: 1, flex: 1 }}
                                inputRef={inputRef}
                                onChange={()=>setError('')}
                            />
                            
                            <IconButton
                                size='large'
                                color='inherit' 
                                aria-label="add"
                                type='submit'
                                >
                                <AddCircleIcon  color='primary' />
                            </IconButton>
                        </Paper >


                        {renderContent()}
                        

                    </Grid>

                    {/* Second Column */}
                    <Grid  size={{ xs: 5, md: 3 }} sx={{ display: { xs: "none", md: "block" } }}>
                        <img 
                            src={rich_guy_img} 
                            alt='rich guy' 
                            style={{ 
                                width: '100%',     // Fill the grid width
                                height: 'auto',    // Maintain aspect ratio
                                objectFit: 'cover' // Ensure the image covers the area
                            }} 
                        />
                    </Grid>


                </Grid>

                

            </Box>

            
            
            <Footer />



          
        
        </Box>
        
    )

}




{/* <Grid item xs={12} sm={6}>
                        <Typography variant='h4' color='primary' gutterBottom>
                            Welcome to Dodgy
                        </Typography>
                        <Typography variant='body1' color='textSecondary' gutterBottom>
                            Dodgy is a stock price prediction tool that uses AI to predict stock prices. 
                            It uses a neural network to predict stock prices based on historical data.
                        </Typography>
                        <Typography variant='body1' color='textSecondary' gutterBottom>
                            To get started, enter a stock ticker symbol in the search bar above.
                        </Typography>

                    </Grid> */}
