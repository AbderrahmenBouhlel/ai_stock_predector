

async function fetchPolygondata(ticker){
    const startData = new Date(new Date().setDate(new Date().getDate() - 3)).toISOString().split('T')[0]
    const endDate = new Date().toISOString().split('T')[0]
    const url = `https://polygon-api-worker.abderrahmanebouhlel.workers.dev?startDate=${startData}&endDate=${endDate}&ticker=${ticker}`
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok) {
        // Handle any non-200 response from the server
        throw new Error(`Worker Error ${data.error} Status: ${response.status}`);
    }
    return data;

}
async function fetchReport(tickers) {
    const stocks = await  Promise.all(tickers.map((ticker) => {
        return fetchPolygondata(ticker)
    }))
    const filtredData = JSON.stringify(stocks.filter((stock) => !stock.error))
    const messages =[
        {
            role: 'system',
            content: `You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing 
            the stocks performance and recommending whether to buy, hold or sell.
             your responses must match the tone and excitment in the examples provided bellow between ### tour response should not contains  ###`,
        },
        {
            role: 'user',
            content: filtredData + `\n###
            OK baby, hold on tight! You are going to haate this! Over the past three days, Tesla (TSLA) shares have plummetted. The stock opened at $223.98 and closed at $202.11 on the third day, with some jumping around in the meantime. 
            This is a great time to buy, baby! But not a great time to sell! But I'm not done! Apple (AAPL) stocks have gone stratospheric! This is a seriously hot stock right now. They opened at $166.38 and closed at $182.89 on day three. 
            So all in all, I would hold on to Tesla shares tight if you already have them - they might bounce right back up and head to the stars! They are volatile stock, so expect the unexpected. For APPL stock, how much do you need the money? 
            Sell now and take the profits or hang on and wait for more! If it were me, I would hang on because this stock is on fire right now!!! Apple are throwing a Wall Street party and y'all invited!
            ###
            `,
        }
    ]
    const response = await fetch("https://mycloud.abderrahmanebouhlel.workers.dev/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(messages),
    })
    const ResponseData = await response.json()
    if (!response.ok) {
        // Handle any non-200 response from the server
        throw new Error(`Worker Error ${data.error} Status: ${response.status}`);
    }
    return ResponseData;
}





export  {fetchReport};






