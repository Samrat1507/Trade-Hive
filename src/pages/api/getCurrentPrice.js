import axios from 'axios';

export default async function getCurrentPrice(req, res) {
    if (req.method === 'POST'){
        try {
            const apiKey = process.env.NEXT_PUBLIC_STOCK_API_KEY;
            const symbol = req.body.symbol; // Replace with the desired stock symbol
            
            const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

            const response = await axios.get(apiUrl);
            const data = response.data['Global Quote'];
            const currentPrice = data['05. price'];
            
            res.send(JSON.stringify({price: currentPrice}));
        } catch (error) {
            console.error('Error fetching stock price:', error);
            res.status(500).send(JSON.stringify({message:'Error fetching stock price'}));
        }
    }
}