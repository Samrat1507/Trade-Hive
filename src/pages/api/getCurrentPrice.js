import axios from "axios";

export default async function getCurrentPrice(req, res) {
  if (req.method === "POST") {
    const options = {
      method: "GET",
      url: "https://mboum-finance.p.rapidapi.com/qu/quote/financial-data",
      params: { symbol: req.body.symbol },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RAPID_API_HOSTKEY,
      },
    };

    try {
      const response = await axios.request(options);
      res.send(JSON.stringify({price: response.data.financialData.currentPrice.raw}))
    } catch (error) {
      console.error(error);
      res.send(JSON.stringify({msg: "Error"}))
    }
  }
}
