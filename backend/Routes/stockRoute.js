const router = require("express").Router();

const finnhub = require("finnhub");

const finnhubClient = new finnhub.DefaultApi(process.env.FINNHUB_API_KEY);

router.get("/quote/:symbol", (req, res) => {
  const symbol = req.params.symbol;

  finnhubClient.quote(symbol, (error, data, response) => {
    if (error) {
      return res.status(500).json({
        success: false,
      });
    }

    res.json(data);
  });
});

router.get("/news/:symbol", (req, res) => {
  const symbol = req.params.symbol;

  finnhubClient.companyNews(
    symbol,
    "2024-01-01",
    "2025-12-31",

    (error, data, response) => {
      res.json(data);
    },
  );
});

module.exports = router;
